import { credentialDB } from "@main/configuration/crendential-DB"
import mysql from "mysql2/promise"

let connection: mysql.Connection

export async function getConnection(): Promise<mysql.Connection> {
  if (!connection) return (connection = await connect())
  return connection
}

async function connect(): Promise<mysql.Connection> {
  return await mysql
    .createConnection(credentialDB)
    .then((connection) => connection)
    .catch(() => {
      throw new Error("Error to connect database")
    })
}
