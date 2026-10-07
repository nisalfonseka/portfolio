import { readFile } from "node:fs/promises"
import pg from "pg"

const connectionString = process.env.DATABASE_URL_UNPOOLED
if (!connectionString) throw new Error("DATABASE_URL_UNPOOLED is required for migrations")

const sql = await readFile(new URL("../db/migrations/001_portfolio.sql", import.meta.url), "utf8")
const client = new pg.Client({ connectionString })

try {
  await client.connect()
  await client.query(sql)
  console.log("Applied db/migrations/001_portfolio.sql")
} finally {
  await client.end()
}
