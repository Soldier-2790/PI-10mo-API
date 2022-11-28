/*Vista desde la base de datos
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
