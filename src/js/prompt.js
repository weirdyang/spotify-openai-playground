const prompt = (profileDescription, recentTweets) => `
Analyze the following Twitter profile description and recent tweets to determine the user's personality, mood, and interests.

Profile Description: ${profileDescription}

Recent Tweets: ${recentTweets.join('\n')}

Provide a single song genre that closely matches the profile, be concise, and use information from the tweets. Only reply with the genre, eg. "Lame Political Hiphop"

`;
exports.prompt = prompt;

const imagePrompt = (description) => `Provide a single song genre that closely matches the profile image, be concise,
and use information from the tweets and the User description : ${description}.
Only reply with the genre, eg. "Lame Political Hiphop"`;
exports.imagePrompt = imagePrompt;

