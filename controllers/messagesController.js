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

const message_controller_new_message_get = asyncHandler(
  async (req, res, next) => {
    res.render("form", { title: "Post a new message" });
  }
);

const message_controller_new_message_post = asyncHandler(
  async (req, res, next) => {
    messages.push({
      text: req.body.text,
      user: req.body.username,
      time: new Date(),
    });
    res.redirect("/");
  }
);

module.exports = {
  message_controller_index_get,
  message_controller_new_message_get,
  message_controller_new_message_post,
};
