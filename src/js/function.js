const { OpenAI } = require('openai');
const SpotifyWebApi = require('spotify-web-api-node');
const { prompt, imagePrompt } = require('./prompt');

// OpenAI API credentials
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});

// Spotify API credentials
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT,
  clientSecret: process.env.SPOTIFY_SECRET,
});

const bearer = process.env.BEARER;


async function getTwitterProfile(username) {
  try {
    const socialDataResponse = await fetch(`https://api.socialdata.tools/twitter/user/${username}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearer}`,
          'Accept': 'application/json'
        }
      });
      const userData = await socialDataResponse.json();
      console.log(JSON.stringify(userData));
      const userId = userData.id;
      const tweets = await fetch(`https://api.socialdata.tools/twitter/user/${userId}/tweets?`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${bearer}`,
            'Accept': 'application/json'
          }
        });
      const tweetData = await tweets.json();
      console.log(tweetData);
      const tweetText = tweetData.tweets.map(tw => tw.full_text);
      return { description: userData.description, tweetText };
  } catch (error) {
    console.error('Error fetching Twitter profile:', error);
    return null;
  }
}

async function getTwitterProfilePic(username) {
  try {
    const socialDataResponse = await fetch(`https://api.socialdata.tools/twitter/user/${username}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${bearer}`,
          'Accept': 'application/json'
        }
      });
      const userData = await socialDataResponse.json();
      console.log(JSON.stringify(userData));
      const profile = userData.profile_image_url_https;
      const banner = userData.profile_banner_url;
      return { profile, banner }
  } catch (error) {
    console.error('Error fetching Twitter profile:', error);
    return null;
  }
}
async function analyzeProfile(profileDescription, recentTweets) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: "system", content: "You are a helpful assistant that specializes in recommending music and songs based on users' preferences, moods, activities, or genres." },
        { role: 'user', content: prompt }],
      max_tokens: 150,
    });
    console.log(completion.choices[0].message);
    return completion.choices[0].message;
  } catch (error) {
    console.error('Error analyzing profile:', error);
    return null;
  }
}
async function analyzeProfilePic({ profile, banner }) {
  console.log(profile, banner);
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: "system", content: "You are a helpful assistant that specializes in recommending music and songs based on analyzing images" },
        {
          role: "user",
          content: [
            { type: "text", text: imagePrompt },
            {
              type: "image_url",
              image_url: {
                "url":  profile, // either url (not local) or base64. file id is used only in assistants api.
              },
            },
            {
              type: "image_url",
              image_url: {
                "url":  banner, // either url (not local) or base64. file id is used only in assistants api.
              },
            },
          ],
        },
      ],
      max_tokens: 300,
    });
    console.log(completion.choices[0].message);
    return completion.choices[0].message;
  } catch (error) {
    console.error('Error analyzing profile:', error);
    return null;
  }
}
async function analyzeProfileDescription(profileDescription) {
  try {
    const prompt = `
      Analyze the following Twitter profile description and recent tweets to determine the user's personality, mood, and interests.

      Profile Description: ${profileDescription}

      Provide a single song genre that closely matches the profile, be concise, and use information from the tweets. Only reply with the genre, eg. "Lame Political Hiphop"

    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: "system", content: "You are a helpful assistant that specializes in recommending music and songs based on users' preferences, moods, activities, or genres." },
        { role: 'user', content: prompt }],
      max_tokens: 150,
    });
    console.log(completion.choices[0].message);
    return completion.choices[0].message;
  } catch (error) {
    console.error('Error analyzing profile:', error);
    return null;
  }
}
async function suggestSpotifySong(analysisText) {
  try {
    const clientCredentials = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(clientCredentials.body.access_token);

    const searchQuery = `q:${analysisText} songs type:track`;
    console.log(searchQuery);
    const results = await spotifyApi.searchTracks(searchQuery, { limit: 10 });

    if (results.body.tracks.items.length > 0) {
      const songs = results.body.tracks.items.map(tr => {
        return {
          name: tr.name,
          artist: tr.artists[0].name,
          url: tr.external_urls.spotify,
          popularity: tr.popularity,
          img: tr.album.images[0].url
        }
      });
    return songs;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error suggesting Spotify song:', error);
    return null;
  }
}

async function main(twitterUsername) {
  const { profile, banner } = await getTwitterProfilePic(twitterUsername);

  if (!profile || !banner) {
    console.log('Failed to retrieve Twitter profile.');
    return;
  }
  const analysis = await analyzeProfilePic({ profile, banner });
  //const analysis = await analyzeProfileManual("I like food and learning about how it reaches my plate. singaporean, likes gaming, enjoys food, new father");
  if (!analysis) {
    console.log('Failed to analyze profile.');
    return;
  }
  const songInfo = await suggestSpotifySong(analysis.content);
  const result = {
    profile,
    banner,
    genre: analysis.content,
    song: songInfo.sort((a, b) => b.popularity - a.popularity)[0]
  };

  if(songInfo && songInfo.length > 0){
    for (let i = 0; i < songInfo.length; i++) {
      const element = songInfo[i];
      if (element) {
        console.log(`Suggested Song: ${element.name} by ${element.artist}`);
        console.log(`Spotify Link: ${element.url}`);
        console.log(`Popularity: ${element.popularity}`);
      } else {
        console.log('Could not find a suitable song.');
      }
    }
  }

  return result;
}
exports.analyzeUserProfile = main;


