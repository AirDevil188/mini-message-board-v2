const asyncHandler = require("express-async-handler");

const messages = [
  {
    text: "Hi, there!",
    user: "Amando",
    time: new Date(),
  },
  {
    text: "This is my first message on this app",
    user: "Jack",
    time: new Date(),
  },
  {
    text: "Howdy! How are you doing guys and girls?",
    user: "John",
    time: new Date(),
  },
];
const message_controller_index_get = asyncHandler(async (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = { message_controller_index_get };
