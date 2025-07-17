module.exports.config = {
  name: "hi",
  version: "1.0.0",
  credits: "vern",
  description: "A simple command that sends a greeting message.",
  commandCategory: "General",
  usages: "[optional message]",
  cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  try {
    const msg = args.length ? args.join(" ") : "👋Hello po have a nice day i love you mwuah mwuah chupchup😘";
    return api.sendMessage(msg, event.threadID);
  } catch (err) {
    console.error(err);
  }
};
