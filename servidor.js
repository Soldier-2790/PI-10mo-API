//Paquetes y archivos referenciados
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
//Base de datos
const infoLocalBD = require('./recursos/infoLocalBD')//Información de la base de datos
const infoAzureBD = require('./recursos/infoAzureBD')
//Enlace a las rutas
const usuarioR = require('./rutas/usuarioR')//Rutas de usuario
const areaR = require('./rutas/areaR')//Rutas de area
const revisionR = require('./rutas/revisionR')//Rutas de revision
const incidenciaR = require('./rutas/incidenciaR')//Rutas de incidencia
//Objetos
const app = express();
//Uso de bibliotecas
app.set('port', process.env.PORT || 9000)
app.use(myconn(mysql, infoAzureBD, 'single'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
console.log("Iniciando la aplicación")
//Rutas aplicadas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Farm Guardian')
  console.log('Empezando la API')
})
console.log('Estableciendo rutas')
app.use('/usuario', usuarioR)
app.use('/area', areaR)
app.use('/revision', revisionR)
app.use('/incidencia', incidenciaR)
console.log(`Estableciendo puerto que escucha en ${app.get('port')}`)
app.listen(app.get('port'), () => {
  console.log(`API escuchando en el puerto ${app.get('port')}`)

})
