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
/*
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
Incidencia.crear = (nueIncidencia, result) => {
  servBD.query("Insert Into incidencia Set ?", nueIncidencia, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return
    }
    console.log("Creando incidencia: ", { id: res.insertID, ...nueIncidencia })
    result(null, { id: res.insertID, ...nueIncidencia })
  })
}//Listo
Incidencia.ObtPorId = (id, result) => {
  servBD.query(`Select * From incidencia Where Incid_ID = ${id}`, (err, res) => {
    if (err) {
      console.log("Error:", err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log("Se encontró el incidencia: ", res[0])
      result(null, res[0])
      return
    }
    //No encuentra
    result({ kind: "no_encontrado" }, null)
  })
}//Listo
Incidencia.ObtTodos = (Incid_Prior, result) => {
  let consult = "Select * From incidencia"
  if (Incid_Prior) {
    query += `Where Incid_Prior Like '%${Incid_Prior}'`
  }
  servBD.query(consult, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Incidencias: ", res)
    result(null, res)
  })
}//Listo
Incidencia.ObtTodosEnProc = result => {
  servBD.query("Select * From incidencia Where Incid_Prior = 'EnProceso'", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Incidencias en proceso: ", res)
    result(null, res)
  })
}//Listo
Incidencia.ActPorId = (id, incidencia, result) => {
  servBD.query(
    "Update incidencia Set Incid_Infor = ?, Incid_FR = ?, Incid_Prior = ?, Incid_GR = ?, Incid_AR = ? Where Incid_ID = ?",
    [incidencia.Incid_Infor, incidencia.Incid_FR, incidencia.Incid_Prior, incidencia.Incid_GR, incidencia.Incid_AR, id], (err, res) => {
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
      console.log("Actualizando incidencia: ", { id: id, ...incidencia })
      result(null, { id: id, ...incidencia })
    })
}//Listo
Incidencia.BorrarPorId = (id, result) => {
  servBD.query("Delete From incidencia Where Incid_ID = ?", id, (err, res) => {
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
    console.log("Borrando el incidencia con identificador: ", id)
    result(null, res)
  })
}//Listo
Incidencia.BorrarTodo = result => {
  servBD.query("Delete From incidencia", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log(`Borrados ${res.affectedRows} incidencias`)
    result(null, res)
  })
}//Listo
module.exports = Incidencia
*/
