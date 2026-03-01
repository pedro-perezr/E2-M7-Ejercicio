require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function obtenerUsuarios() {
  try {
    const resultado = await pool.query('SELECT * FROM usuarios');
    console.log(resultado.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
  }
}

async function obtenerUsuarioPorEmail(email) {
  try {
    const resultado = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (resultado.rows.length === 0) {
      console.log(`No existe un usuario con el email ${email}`);
      return;
    }

    console.log(resultado.rows[0]);
  } catch (error) {
    console.error('Error al buscar usuario:', error.message);
  }
}

async function main() {
  await obtenerUsuarios();
  await obtenerUsuarioPorEmail('ana.garcia@example.com');
  await obtenerUsuarioPorEmail('noexiste@example.com');
  await pool.end();
}

main();