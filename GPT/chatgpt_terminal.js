#!/usr/bin/env node

const axios = require('axios');
const readline = require('readline');

const API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const API_KEY = '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'; // Replace this with your actual API key

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getChatGptResponse(prompt) {
  return axios.post(
    API_ENDPOINT,
    {
      prompt: prompt,
      max_tokens: 150,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    }
  );
}

function waitForUserInput() {
  rl.question('You: ', async (question) => {
    if (question.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    try {
      const response = await getChatGptResponse(question);
      const answer = response.data.choices[0].text.trim();
      console.log('ChatGPT: ' + answer);
    } catch (error) {
      console.error('Error:', error.message);
    }

    waitForUserInput();
  });
}

function main() {
  console.log('ChatGPT Terminal');
  console.log('Type "exit" to quit.');

  waitForUserInput();
}

main();
