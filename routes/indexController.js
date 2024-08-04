const { Router } = require("express");
const messagesController = require("../controllers/messagesController");

const indexController = Router();

indexController.get("/", messagesController.message_controller_index_get);

module.exports = indexController;
