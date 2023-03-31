export default function handler(req, res) {
  if (req.method == "POST") {
    var request = initializeRequest(req.body.prompt);
    request
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({ name: data });
      });
  }
}

function initializeRequest(prompt) {
  const proto = {
    prompt: prompt,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 1000,
    stop: "string",
    best_of: 1,
  };

  return fetch(
    "https://api-gpt-playground.bold.com/gpt3/OpenAI_Text-DV-003/completions",
    {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(proto),
      method: "POST",
    }
  );
}
