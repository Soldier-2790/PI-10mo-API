/*
`Revision` (
  `Rev_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la revisión',
  `Rev_Infor` text NOT NULL COMMENT 'Informe de la revisión',
  `Rev_FR` varchar(200) COMMENT 'Foto referente a la revisión',
  `Rev_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la revisión',
  `Rev_AR` integer NOT NULL COMMENT 'Identificador del Revision al que se le hizo revisión'
);
*/

/*
const Revision = function (revision) {
  this.Rev_ID = revision.Rev_ID
  this.Rev_Infor = revision.Rev_Infor
  this.Rev_FR = revision.Rev_FR
  this.Rev_GR = revision.Rev_GR
  this.Rev_AR = revision.Rev_AR
}
const servBD = require('../recursos/conexBD')
//Métodos del modelo
Revision.crear = (nueRevision, result) => {
  servBD.query("Insert Into revision Set ?", nueRevision, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return
    }
    console.log("Creando revision: ", { id: res.insertID, ...nueRevision })
    result(null, { id: res.insertID, ...nueRevision })
  })
}//Listo
Revision.ObtPorId = (id, result) => {
  servBD.query(`Select * From revision Where Rev_ID = ${id}`, (err, res) => {
    if (err) {
      console.log("Error:", err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log("Se encontró el Revision: ", res[0])
      result(null, res[0])
      return
    }
    //No encuentra
    result({ kind: "no_encontrado" }, null)
  })
}//Listo
Revision.ObtTodos = (Rev_Infor, result) => {
  let consult = "Select * From revision"
  if (Rev_Infor) {
    query += `Where Rev_Infor Like '%${Rev_Infor}'`
  }
  servBD.query(consult, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Revisiones: ", res)
    result(null, res)
  })
}//Listo

Revision.ObtTodos = result => {
  servBD.query("Select * From revision Where Incid_Prior = 'EnProceso'", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Revisions en proceso: ", res)
    result(null, res)
  })
}//Listo

Revision.ActPorId = (id, Revision, result) => {
  servBD.query(
    "Update revision Set Rev_Infor = ?, Rev_FR = ?, Rev_GR = ?, Rev_AR = ? Where Rev_ID = ?",
    [Revision.Rev_Infor, Revision.Rev_FR, Revision.Rev_GR, Revision.Rev_AR, id], (err, res) => {
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
      console.log("Actualizando revision: ", { id: id, ...Revision })
      result(null, { id: id, ...Revision })
    })
}//Listo
Revision.BorrarPorId = (id, result) => {
  servBD.query("Delete From revision Where Rev_ID = ?", id, (err, res) => {
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
    console.log("Borrando el Revision con identificador: ", id)
    result(null, res)
  })
}//Listo
Revision.BorrarTodo = result => {
  servBD.query("Delete From revision", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log(`Borrados ${res.affectedRows} revisiones`)
    result(null, res)
  })
}//Listo
module.exports = Revision
*/
