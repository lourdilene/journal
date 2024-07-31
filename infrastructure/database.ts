import { Client, QueryResult } from "pg";

// Definindo um tipo para o objeto de consulta
// type QueryObject = string | {
//   text: string;
//   values?: any[];
// };

// Função para criar uma nova conexão com o banco de dados
async function query(queryObject: any): Promise<QueryResult<any>> {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT), // Convertendo para número
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

// Função para executar a consulta
// async function executeQuery(queryObject: QueryObject): Promise<QueryResult<any>> {
//   const client = await createConnection();
  
//   let result: QueryResult<any>;
  
//   if (typeof queryObject === 'string') {
//     result = await client.query(queryObject);
//   } else {
//     result = await client.query(queryObject.text, queryObject.values);
//   }

//   await client.end();
//   return result;
// }

export default {
  query
};
