/*
`Incidencia` (
  `Incid_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la incidencia',
  `Incid_Infor` text NOT NULL COMMENT 'Informe de la incidencia',
  `Incid_FR` varchar(200) COMMENT 'Foto referente a la incidencia',
  `Incid_Prior` ENUM ('EnProceso', 'Solucionado', 'EnProblemas') NOT NULL COMMENT 'Prioridad del incidendia',
  `Incid_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la incidencia',
  `Incid_AR` integer NOT NULL COMMENT 'Identificador del area al que se le hizo incidencia'
);
*/
const Incidencia = function (incidencia) {
  this.Incid_ID = incidencia.Incid_ID
  this.Incid_Infor = incidencia.Incid_Infor
  this.Incid_FR = incidencia.Incid_FR
  this.Incid_Prior = incidencia.Incid_Prior
  this.Incid_GR = incidencia.Incid_GR
  this.Incid_AR = incidencia.Incid_AR
}
//Servicios de base de datos
const servBD = require('../recursos/conexBD')
//Métodos del modelo
Incidencia.crear = (nueArea, result) => {
  servBD.query("Insert Into incidencia Set ?", nueArea, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return
    }
    console.log("Creando Area: ", { id: res.insertID, ...nueArea })
    result(null, { id: res.insertID, ...nueArea })
  })
}
Incidencia.ObtPorId = (id, result) => {
  servBD.query(`Select * From incidencia Where Area_ID = ${id}`, (err, res) => {
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
Incidencia.ObtTodos = (area_Nom, result) => {
  let consult = "Select * From incidencia"
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
Incidencia.ObtTodosActivos = result => {
  servBD.query("Select * From incidencia Where Area_E = 'Activo'", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Areas activas: ", res)
    result(null, res)
  })
}
Incidencia.ActPorId = (id, area, result) => {
  servBD.query(
    "Update incidencia Set Area_Num = ?, Area_Nom = ?, Area_Descr = ?, Area_Espec = ?, Area_CA = ?, Area_E = ? Where Area_ID = ?",
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
      console.log("Actualizando incidencia: ", { id: id, ...area })
      result(null, { id: id, ...area })
    })
}
Incidencia.BorrarPorId = (id, result) => {
  servBD.query("Delete From incidencia Where Area_ID = ?", id, (err, res) => {
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
Incidencia.BorrarTodo = result => {
  servBD.query("Delete From incidencia", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log(`Borrados ${res.affectedRows} areas`)
    result(null, res)
  })
}
module.exports = Incidencia
