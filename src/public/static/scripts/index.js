const pinEl = document.querySelector(".pin");
c

const addBotURL = "/api/add-bot";

const addBot = async () => {
  const req = await fetch(addBotURL, {
    method: "POST",
    body: JSON.stringify({
      gameKey: 3363786,
      botName: "test",
      botCount: 20,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();
};

// addBot();
