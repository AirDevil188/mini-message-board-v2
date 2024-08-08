const pool = require("../db/pool");

async function messagesGet() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows, "rows");
  return rows;
}

async function insertMessage(text, username, time) {
  await pool.query("INSERT INTO messages(text, username) VALUES($1, $2)", [
    text,
    username,
  ]);
}

async function detailMessage(id) {
  const { rows } = await pool.query(
    `SELECT text, username, time FROM messages WHERE id = ${id} `
  );
  return rows;
}

module.exports = {
  messagesGet,
  insertMessage,
  detailMessage,
};
