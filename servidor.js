//Paquetes y archivos referenciados
const express = require('express')
//const mysql = require('mysql')
//const myconn = require('express-myconnection')
const cors = require('cors')
const usuarioR = require('./rutas/usuarioR')
const areaR = require('./rutas/areaR')
const revisionR = require('./rutas/revisionR')
const incidenciaR = require('./rutas/incidenciaR')
const infoBD = require('./recursos/infoBD')
//Objetos
const app = express();
//Uso de bibliotecas
app.set('port', process.env.PORT || 9000)
//app.use(myconn(mysql, infoBD, 'single'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//Rutas aplicadas
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Farm Guardian')
  console.log('Empezando la API')
})
app.use('/usuario', usuarioR)
app.use('/area', areaR)
app.use('/revision', revisionR)
app.use('/incidencia', incidenciaR)
app.listen(app.get('port'), () => {
  console.log(`API escuchando en el puerto ${app.get('port')}`)
})
