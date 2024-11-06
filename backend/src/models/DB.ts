// import dotenv from 'dotenv';
// import sql from 'mssql';

// dotenv.config();

// const sqlConfig: any ={
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   server: process.env.DB_HOST,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };

// async function query(queryString: string, p0: any[]) {
//   try {
//     const pool = await sql.connect(sqlConfig);
//     console.log("Conectado ao banco de dados com sucesso!");
    
//     const result = await pool.query(queryString);
//     console.log("Resultado da consulta:", result.recordset); // Imprimindo o resultado da consulta
    
//     return result;
//   } catch (err) {
//     console.error("Erro ao conectar ao banco de dados:", err);
//     throw err;
//   }
// }

// export { query };

// // // Testando a consulta
// // query("SELECT * FROM users").then(() => {
// //   console.log("Teste de query executado.");
// // }).catch(err => {
// //   console.error("Erro ao executar teste de query:", err);
// // });

// import dotenv from 'dotenv';
// import sql from 'mssql';

// dotenv.config();

// const sqlConfig: any = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   server: process.env.DB_HOST,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
// };

// async function query(queryText: string,params: any[]=[]) {
//     try {
//     const pool = await sql.connect(sqlConfig);
//     console.log("Conectado ao banco de dados com sucesso!");
    
//     const result = await pool.query(queryText);
//     console.log("Resultado da consulta:", result.recordset); // Imprimindo o resultado da consulta
    
//     return result;
//   } catch (err) {
//     console.error("Erro ao conectar ao banco de dados:", err);
//     throw err;
//   }
// }

// export { query };
// module.exports = { query };

// // // Testando a consulta
// // query("SELECT * FROM users").then(() => {
// //   console.log("Teste de query executado.");
// // }).catch(err => {
// //   console.error("Erro ao executar teste de query:", err);
// // });

import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const sqlConfig:any ={
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

async function query(queryString: string, params: { [key: string]: any } = {}) {
  try {
    const pool = await sql.connect(sqlConfig);
    console.log("Conectado ao banco de dados com sucesso!");

    const request = pool.request();

    // Adiciona os parâmetros à consulta
    for (const key in params) {
      request.input(key, params[key]);
    }

    const result = await request.query(queryString);
    console.log("Resultado da consulta:", result.recordset);

    return result;
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    throw err;
  }
}

export { query };
