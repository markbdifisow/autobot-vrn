module.exports.config = {
  name: "keijobio",
  version: "1.0.0",
  credits: "keijo",
  description: "Send a detailed biography about Keijo.",
  commandCategory: "Info",
  usages: "",
  cooldowns: 10
};

module.exports.run = async function({ api, event }) {
  try {
    const bio = 
`🌟 Keijo's Biography 🌟

Keijo is a passionate software developer and tech enthusiast who has contributed extensively to open-source projects. With a strong background in JavaScript and bot development, Vern creates powerful automation tools and interactive chatbots to enhance user experience. 

Key Highlights:
- Skilled in Node.js and Facebook Messenger bots.
- Loves building creative and fun commands for various communities.
- Always eager to learn and collaborate with other developers.

Keijo’s vision is to empower communities through automation, making everyday tasks easier and more enjoyable.

Feel free to reach out and connect!`;

    return api.sendMessage(bio, event.threadID);
  } catch (error) {
    console.error(error);
  }
};
