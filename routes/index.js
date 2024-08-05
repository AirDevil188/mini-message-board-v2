const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const indexController = Router();

indexController.get("/", messagesController.message_controller_index_get);

indexController.get(
  "/new",
  messagesController.message_controller_new_message_get
);

indexController.post(
  "/new",
  messagesController.message_controller_new_message_post
);

indexController.get(
  "/message/:id",
  messagesController.message_controller_details_get
);

module.exports = indexController;
