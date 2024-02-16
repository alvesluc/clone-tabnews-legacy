import { Client } from "pg";

/**
 * Executes a SQL query on the PostgreSQL database.
 * @param {string|{text: string, values: Array<any>}} queryObject - The SQL query to execute. Can be either a string representing the query or an object with `text` property representing the query text and `values` property representing the parameterized values.
 * @returns {Promise<object>} A Promise that resolves with the result of the SQL query.
 */
async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: getSSLValues(),
  });

  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    await client.end();
  }
}

/**
 * Retrieves SSL configuration values for PostgreSQL connection.
 * @returns {{ ca: string }|boolean} SSL configuration object if `POSTGRES_CA` environment variable is set, otherwise boolean value based on the current environment.
 */
function getSSLValues() {
  if (process.env.POSTGRES_CA) {
    return {
      ca: process.env.POSTGRES_CA,
    };
  }

  return process.env.NODE_ENV === "development" ? false : true;
}

export default {
  query: query,
};
