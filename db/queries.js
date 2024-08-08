const pool = require("../db/pool");

async function messagesGet() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, username, time) {
  await pool.query("INSERT INTO messages(text, username) VALUES($1, $2)", [
    text,
    username,
  ]);
}

module.exports = {
  messagesGet,
  insertMessage,
};
