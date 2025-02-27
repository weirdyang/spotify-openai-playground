const prompt = (profileDescription, recentTweets) => `
Analyze the following Twitter profile description and recent tweets to determine the user's personality, mood, and interests.

Profile Description: ${profileDescription}

Recent Tweets: ${recentTweets.join('\n')}

Provide a single song genre that closely matches the profile, be concise, and use information from the tweets. Only reply with the genre, eg. "Lame Political Hiphop"

`;
exports.prompt = prompt;

const imagePrompt = (description, recentTweets) => `Provide a single song genre that closely matches the profile image, be concise,
be creative,
and use information from the User Tweets and the User Description.

User Description: ${description}.

${tweets(recentTweets)}

Only reply with the genre, eg. "Lame Political Hiphop"`;

const tweets = (recentTweets) => {
  if(recentTweets) {
    return `Recent Tweets: ${recentTweets.join('\n')}v`
  }
}
exports.imagePrompt = imagePrompt;

