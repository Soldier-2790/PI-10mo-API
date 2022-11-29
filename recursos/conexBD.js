
const mysql = require('mysql')
const datosBD = require('./infoBD')
//Creando la conexión de la base de datos
const conexBD = mysql.createConnection({
  host: datosBD.host,
  port: datosBD.port,
  user: datosBD.user,
  password: datosBD.password,
  database: datosBD.database
})
//Abre la conexión a la base de datos en MySQL
conexBD.connect(error => {
  if (error) throw error
  console.log(`Conexión a la base de datos ${datosBD.Database} exitosa.`)
})
module.exports = conexBD
