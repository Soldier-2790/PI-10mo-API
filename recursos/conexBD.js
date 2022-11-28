const mysql = require('mysql')
const datosBD = require('./infoBD')
//Creando la conexión de la base de datos
const conexBD = mysql.createConnection({
  host: datosBD.Host,
  port: datosBD.Port,
  user: datosBD.User,
  password: datosBD.Password,
  database: datosBD.Database
})
//Abre la conexión a la base de datos en MySQL
conexBD.connect(error => {
  if (error) throw error
  console.log(`Conexión a la base de datos ${datosBD.Database} exitosa.`)
})
module.exports = conexBD
