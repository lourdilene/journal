import { Request, Response } from 'express';
import database from "../../../../infrastructure/database";

async function status(request: Request, response: Response): Promise<void> {
  try {
    // Consulta para obter a versão do PostgreSQL
    const result = await database.query("SELECT version();");
    const fullVersionString: string = result.rows[0].version;

    const postgresVersion: string = fullVersionString.match(
      /PostgreSQL ([0-9]+\.[0-9]+)/,
    )?.[0] || '';

    const updateAt: string = new Date().toISOString();
    response.status(200).json({
      postgres_version: postgresVersion,
      update_at: updateAt,
    });
  } catch (error) {
    console.error("Erro ao obter a versão do PostgreSQL:", error);
    response
      .status(500)
      .json({ error: "Erro ao obter a versão do PostgreSQL" });
  }
}

export default status;