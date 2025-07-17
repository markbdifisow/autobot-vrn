module.exports.config = {
  name: "bot",
  version: "1.0.0",
  credits: "vern",
  description: "A simple command that sends a greeting message.",
  commandCategory: "General",
  usages: "[optional message]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  try {
    const msg = args.length ? args.join(" ") : "Ano kailangan mo puking*na?😤";
    return api.sendMessage(msg, event.threadID);
  } catch (err) {
    console.error(err);
  }
};
