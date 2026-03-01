🛠️ E2-M7 Ejercicio
Lectura de Datos y Consultas Seguras 🛡️
Objetivo: Aprender a ejecutar consultas SELECT para leer datos desde una base de datos PostgreSQL utilizando Node.js. El ejercicio se centrará en dos casos de uso comunes: obtener múltiples registros y buscar un registro específico de forma segura, introduciendo el concepto de consultas parametrizadas para prevenir ataques de inyección SQL.

CREA un archivo ".env" en la raiz del proyecto y pega el contenido modificando lo necesario con TUS datos:
DB_USER=tu_usuario
DB_HOST=tu_host
DB_DATABASE=tu_base_de_datos
DB_PASSWORD=tu_contrasena
DB_PORT=5432

Crea la tabla en tu base de datos:
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO usuarios (nombre, email) VALUES
('Ana Garcia', 'ana.garcia@example.com'),
('Luis Fernandez', 'luis.fernandez@example.com'),
('Sofia Martinez', 'sofia.martinez@example.com');

Para usar: node app.js

