import { COHERE_API_GENERATE_URL } from '../config/index.js'

export const getDataFromCohere = async (input) => {
  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'BEARER FvEpVq9EZg1FtyirqHk0ObqPjIcVfzdFHrg0y3Yp'
    },
    body: JSON.stringify({
      model: 'command-xlarge-20221108',
      prompt: `Give me a list of books with name with the same genre as ${input}`,
      max_tokens: 500,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    })
  })

  const data = await response.json()
  return data
}
