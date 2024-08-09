const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, text TEXT, username VARCHAR ( 255 ),  time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);


INSERT INTO messages (text, username) 
VALUES ('Hi there, this is my first message!', 'papaDock123'),
('Whats up!?', 'jackShepard123');
`;

async function mainDriver() {
  console.log("sending information...");
  const client = new Client({
    connectionString:
      process.env.STATUS === "production"
        ? process.env.EXTERNAL_DB_CONNECTION_STRING
        : process.env.LOCAL_DB_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

mainDriver();
