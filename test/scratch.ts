const content = {
  endpoint: "https://example.api/chat/",
  status: "UP",
  cost: 5000,
  schema: {},
  outputSchema: {},
  description: "This will call the ChatGPT endpoint"
}

const event = {
  "kind": 31402,
  "created_at": 1675642635,
  "content": JSON.stringify(content),
  "tags": [
    ["s", "https://api.openai.com/v1/chat/completions"],
    ["d", "https://api.openai.com/v1/chat/completions"]
  ],
  "pubkey": "<pubkey>",
  "id": "<id>"
}
