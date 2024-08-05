const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");

const messages = [
  {
    id: uuidv4(),
    text: "Hi, there!",
    user: "Amando",
    time: new Date(),
  },
  {
    id: uuidv4(),
    text: "This is my first message on this app",
    user: "Jack",
    time: new Date(),
  },
  {
    id: uuidv4(),
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
      id: uuidv4(),
      text: req.body.text,
      user: req.body.username,
      time: new Date(),
    });
    res.redirect("/");
  }
);

const message_controller_details_get = asyncHandler(async (req, res, next) => {
  const message = messages.find((message) => (message.id = req.params.id));
  res.render("message-detail", { title: "Message detail", message: message });
});

module.exports = {
  message_controller_index_get,
  message_controller_new_message_get,
  message_controller_new_message_post,
  message_controller_details_get,
};
