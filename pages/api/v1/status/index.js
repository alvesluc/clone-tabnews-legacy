import database from "infra/database.js";

async function handler(_, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersion = await getDatabaseVersion();
  const databaseMaxConnections = await getDatabaseMaxConnections();
  const databaseOpenedConnections = await getDatabaseOpenedConnections();

  return response.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: databaseMaxConnections,
        opened_connections: databaseOpenedConnections,
      },
    },
  });
}

/**
 * Retrieves the version of the database server.
 * @returns {Promise<string>} Resolves with the version of the database server.
 */
async function getDatabaseVersion() {
  const databaseVersionResult = await database.query("SHOW server_version;");

  return databaseVersionResult.rows[0].server_version;
}

/**
 * Retrieves the maximum number of connections allowed by the database server.
 * @returns {Promise<number>} Resolves with the maximum number of connections
 * allowed by the database server.
 */
async function getDatabaseMaxConnections() {
  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );

  return parseInt(databaseMaxConnectionsResult.rows[0].max_connections);
}

/**
 * Retrieves the number of currently opened connections to the database.
 * @returns {Promise<number>} Resolves with the number of opened connections
 * to the database.
 */
async function getDatabaseOpenedConnections() {
  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  return databaseOpenedConnectionsResult.rows[0].count;
}

export default handler;
