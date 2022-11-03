//app.js
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PROJECT_NAME } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${PROJECT_NAME}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
//   const result = await sql`select version()`;
  const result = await sql`SELECT * FROM playing_with_neon`;
  console.log("ANISHA", result);
}

async function insertPgVersion() {
    //   const result = await sql`select version()`;
      const result = await sql`INSERT INTO playing_with_neon (name, value) VALUES ('Dog', 456);`;
      console.log(result);
    }

async function deletePgVersion() {
          const result = await sql`DELETE FROM playing_with_neon WHERE name = 'dog' AND value = 231`;
          console.log(result);
        }

async function getFunction(){
    // await insertPgVersion();
    // await deletePgVersion();
    await getPgVersion();
}


getFunction();
