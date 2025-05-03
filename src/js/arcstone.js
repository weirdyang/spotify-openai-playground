
const { OpenAI } = require('openai');
const { arcstonePrompt } = require('./prompt');

// OpenAI API credentials
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI,
});
async function getSuggestions(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: "system", content: "You are arc.ops AI Assistant, an intelligent system designed to recommend suitable arc.ops modules for manufacturing operations. Your goal is to understand the user's needs and suggest the most relevant module(s) from the arc.ops suite, explaining their benefits and how they can be implemented." },
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

const question = "recommend products for quality control";

const prompt = arcstonePrompt.replace('{{QUESTION}}', question);

getSuggestions(prompt);