/*Vista desde la base de datos
`Usuario` (
  `Usu_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador del usuario',
  `Usu_NomCompl` varchar(200) NOT NULL COMMENT 'Nombre completo de usuario',
  `Usu_CE` varchar(200) NOT NULL COMMENT 'Correo del usuario',
  `Usu_Contr` varchar(200) NOT NULL COMMENT 'Contraseña del usuario',
  `Usu_Gen` ENUM ('Masculino', 'Femenino') COMMENT 'Genero del usuario',
  `Usu_TU` ENUM ('Administrador', 'Guardia') NOT NULL DEFAULT "Guardia" COMMENT 'Tipo de usuario',
  `Usu_AA` integer COMMENT 'Area asignada',
  `Usu_E` ENUM ('Activo', 'Inactivo') DEFAULT ('Activo') COMMENT 'Estatus del usuario',
  `Usu_FP` varchar(200) COMMENT 'Foto de perfil del usuario',
  `Usu_FechaCrea` datetime DEFAULT (now()) COMMENT 'Fecha de creación del usuario'
);
*/
const Usuario = function (usuario) {
  this.Usu_ID = usuario.Usu_ID
  this.Usu_NomCompl = usuario.Usu_NomCompl
  this.Usu_CE = usuario.Usu_CE
  this.Usu_Contr = usuario.Usu_Contr
  this.Usu_Gen = usuario.Usu_Gen
  this.Usu_TU = usuario.Usu_TU
  this.Usu_AA = usuario.Usu_AA
  this.Usu_E = usuario.Usu_E
  this.Usu_FP = usuario.Usu_FP
  this.Usu_FechaCrea = usuario.Usu_FechaCrea
}
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
module.exports = Usuario
