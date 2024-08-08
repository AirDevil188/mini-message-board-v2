const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const message_controller_index_get = asyncHandler(async (req, res, next) => {
  const messages = await db.messagesGet();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

const message_controller_new_message_get = asyncHandler(
  async (req, res, next) => {
    res.render("form", { title: "Post a new message" });
  }
);

const message_controller_new_message_post = asyncHandler(
  async (req, res, next) => {
    const { text, username } = req.body;
    await db.insertMessage(text, username);
    res.redirect("/");
  }
);

const message_controller_details_get = asyncHandler(async (req, res, next) => {
  const message = await db.detailMessage(req.params.id);
  console.log(message);
  res.render("message-detail", { title: "Message detail", message: message });
});

module.exports = {
  message_controller_index_get,
  message_controller_new_message_get,
  message_controller_new_message_post,
  message_controller_details_get,
};
