/*
`Area` (
  `Area_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador del area',
  `Area_Num` integer COMMENT 'Número de area',
  `Area_Nom` varchar(100) COMMENT 'Nombre del area',
  `Area_Descr` varchar(100) COMMENT 'Descripción del area',
  `Area_Espec` varchar(60) NOT NULL COMMENT 'Especie del area',
  `Area_CA` integer COMMENT 'Cantidad de animales',
  `Area_E` ENUM ('Activo', 'Inactivo') DEFAULT ('Activo') COMMENT 'Estatus del area',
  `Area_FechaCrea` datetime DEFAULT (now()) COMMENT 'Fecha de creación del area'
);
*/
//Constructor
const Area = function (area) {
  this.Area_ID = area.Area_ID
  this.Area_Num = area.Area_Num
  this.Area_Nom = area.Area_Nom
  this.Area_Descr = area.Area_Descr
  this.Area_Espec = area.Area_Espec
  this.Area_CA = area.Area_CA
  this.Area_E = area.Area_E
  this.Area_FechaCrea = area.Area_FechaCrea
}
//Servicios de base de datos
const servBD = require('../recursos/conexBD')
//Métodos del modelo
Area.crear = (nueArea, result) => {
  servBD.query("Insert Into area Set ?", nueArea, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return
    }
    console.log("Creando Area: ", { id: res.insertID, ...nueArea })
    result(null, { id: res.insertID, ...nueArea })
  })
}
Area.ObtPorId = (id, result) => {
  servBD.query(`Select * From area Where Area_ID = ${id}`, (err, res) => {
    if (err) {
      console.log("Error:", err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log("Se encontró el area: ", res[0])
      result(null, res[0])
      return
    }
    //No encuentra
    result({ kind: "no_encontrado" }, null)
  })
}
Area.ObtTodos = (area_Nom, result) => {
  let consult = "Select * From area"
  if (area_Nom) {
    query += `Where Area_Nom Like '%${area_Nom}'`
  }
  servBD.query(consult, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Areas: ", res)
    result(null, res)
  })
}
Area.ObtTodosActivos = result => {
  servBD.query("Select * From area Where Area_E = 'Activo'", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Areas activas: ", res)
    result(null, res)
  })
}
Area.ActPorId = (id, area, result) => {
  servBD.query(
    "Update area Set Area_Num = ?, Area_Nom = ?, Area_Descr = ?, Area_Espec = ?, Area_CA = ?, Area_E = ? Where Area_ID = ?",
    [area.Area_Num, area.Area_Nom, area.Area_Descr, area.Area_Espec, area.Area_CA, area.Area_E, id], (err, res) => {
      if (err) {
        console.log("Error: ", err)
        result(null, err)
        return
      }
      if (res.affectedRows == 0) {
        //No encuentra el tutorial por el id
        result({ kind: "no_encontrado" }, null)
        return
      }
      console.log("Actualizando area: ", { id: id, ...area })
      result(null, { id: id, ...area })
    })
}
Area.BorrarPorId = (id, result) => {
  servBD.query("Delete From area Where Area_ID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }
    if (result.affectedRows == 0) {
      //No encuentra el tutorial por id
      result({ kind: "no_encontrado" }, null)
      return
    }
    console.log("Borrando el area con identificador: ", id)
    result(null, res)
  })
}
Area.BorrarTodo = result => {
  servBD.query("Delete From area", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log(`Borrados ${res.affectedRows} areas`)
    result(null, res)
  })
}
module.exports = Area
