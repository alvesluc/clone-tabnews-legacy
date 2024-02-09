import database from "../../../../infra/database.js";

async function handler(request, response) {
  const result = await database.query('SELECT 1 + 1 as sum;');
  console.log(result.rows);

  return response.status(200).json({ message: "funciona" });
}

export default handler;
