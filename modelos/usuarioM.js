/*Vista desde la base de datos
`Usuario` (
  `Usu_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador del usuario',
  `Usu_NomCompl` varchar(200) NOT NULL COMMENT 'Nombre completo de usuario',
  `Usu_CE` varchar(200) NOT NULL COMMENT 'Correo del usuario',
  `Usu_Contr` varchar(200) NOT NULL COMMENT 'Contraseña del usuario',
  `Usu_Gen` ENUM ('Masculino', 'Femenino') COMMENT 'Genero del usuario',
  `Usu_TU` ENUM ('Administrador', 'Guardia') NOT NULL DEFAULT "Guardia" COMMENT 'Tipo de usuario',
  `Usu_AA` integer COMMENT 'usuario asignada',
  `Usu_E` ENUM ('Activo', 'Inactivo') DEFAULT ('Activo') COMMENT 'Estatus del usuario',
  `Usu_FP` varchar(200) COMMENT 'Foto de perfil del usuario',
  `Usu_FechaCrea` datetime DEFAULT (now()) COMMENT 'Fecha de creación del usuario'
);
*/
/*
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
Usuario.crear = (nueUsuario, result) => {
  servBD.query("Insert Into usuario Set ?", nueUsuario, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(err, null)
      return
    }
    console.log("Creando Usuario: ", { id: res.insertID, ...nueUsuario })
    result(null, { id: res.insertID, ...nueUsuario })
  })
}//Listo
Usuario.ObtPorId = (id, result) => {
  servBD.query(`Select * From usuario Where Usu_ID = ${id}`, (err, res) => {
    if (err) {
      console.log("Error:", err)
      result(err, null)
      return
    }
    if (res.length) {
      console.log("Se encontró el usuario: ", res[0])
      result(null, res[0])
      return
    }
    //No encuentra
    result({ kind: "no_encontrado" }, null)
  })
}//Listo
Usuario.ObtTodos = (Usu_NomCompl, result) => {
  let consult = "Select * From Usuario"
  if (Usu_NomCompl) {
    query += `Where Usu_NomCompl Like '%${Usu_NomCompl}'`
  }
  servBD.query(consult, (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("Usuarios: ", res)
    result(null, res)
  })
}//Listo
Usuario.ObtTodosActivos = result => {
  servBD.query("Select * From usuario Where Usu_E = 'Activo'", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log("usuarios activas: ", res)
    result(null, res)
  })
}//Listo
Usuario.ActPorId = (id, usuario, result) => {
  servBD.query(
    "Update usuario Set Usu_NomCompl = ?, Usu_CE = ?, Usu_Contr = ?, Usu_Gen = ?, Usu_TU = ?, Usu_AA = ?, Usu_E = ?, Usu_FP = ?  Where Usu_ID = ?",
    [usuario.Usu_NomCompl, usuario.Usu_CE, usuario.Usu_Contr, usuario.Usu_Gen, usuario.Usu_TU, usuario.Usu_AA, usuario.Usu_E, usuario.Usu_FP, id], (err, res) => {
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
      console.log("Actualizando Usuario: ", { id: id, ...usuario })
      result(null, { id: id, ...usuario })
    })
}//Listo
Usuario.BorrarPorId = (id, result) => {
  servBD.query("Delete From usuario Where Usu_ID = ?", id, (err, res) => {
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
    console.log("Borrando al usuario con identificador: ", id)
    result(null, res)
  })
}//Listo
Usuario.BorrarTodo = result => {
  servBD.query("Delete From usuario", (err, res) => {
    if (err) {
      console.log("Error: ", err)
      result(null, err)
      return
    }
    console.log(`Borrados ${res.affectedRows} usuarios`)
    result(null, res)
  })
}//Listo
module.exports = Usuario
*/
