const pinEl = document.querySelector(".pin");
const prefixEl = document.querySelector(".prefix");
const botCountEl = document.querySelector(".count");
const botForm = document.querySelector("form");

const addBotURL = "/api/add-bot";

const addBot = async (gameKey, botName, botCount) => {
  const req = await fetch(addBotURL, {
    method: "POST",
    body: JSON.stringify({
      gameKey: parseInt(gameKey),
      botName,
      botCount: parseInt(botCount),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await req.json();
};

const clear = () => {
  pinEl.value = "";
  prefixEl.value = "";
  botCountEl.value = "";
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(pinEl.value, prefixEl.value, botCountEl.value);
  addBot(pinEl.value, prefixEl.value, botCountEl.value);
  clear();
};

botForm.addEventListener("submit", handleFormSubmit);
