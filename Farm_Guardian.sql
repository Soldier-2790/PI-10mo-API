--Proyecto integrador 10 cuatrimestre
--Creamos la base de datos
Create Database UTM_Proyecto;
--Usamos la base de datos
Use UTM_Proyecto;
--
Create Database Farm_Guardian;
Use Farm_Guardian;
--Creamos la tabla usuario
CREATE TABLE `Usuario` (
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
--Creamos la tabla Area
CREATE TABLE `Area` (
  `Area_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador del area',
  `Area_Num` integer COMMENT 'Número de area',
  `Area_Nom` varchar(100) COMMENT 'Nombre del area',
  `Area_Descr` varchar(100) COMMENT 'Descripción del area',
  `Area_Espec` varchar(60) NOT NULL COMMENT 'Especie del area',
  `Area_CA` integer COMMENT 'Cantidad de animales',
  `Area_E` ENUM ('Activo', 'Inactivo') DEFAULT ('Activo') COMMENT 'Estatus del area',
  `Area_FechaCrea` datetime DEFAULT (now()) COMMENT 'Fecha de creación del area'
);
--Actualización
UPDATE area
Set Area_Num = ?,
  Area_Nom = ?,
  Area_Descr = ?,
  Area_Espec = ?,
  Area_CA = ?,
  Area_E = ?
Where Area_ID = ?;
--Creamos la tabla revision
CREATE TABLE `Revision` (
  `Rev_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la revisión',
  `Rev_Infor` text NOT NULL COMMENT 'Informe de la revisión',
  `Rev_FR` varchar(200) COMMENT 'Foto referente a la revisión',
  `Rev_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la revisión',
  `Rev_AR` integer NOT NULL COMMENT 'Identificador del area al que se le hizo revisión'
);
--Creamos la tabla incidencia
CREATE TABLE `Incidencia` (
  `Incid_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la incidencia',
  `Incid_Infor` text NOT NULL COMMENT 'Informe de la incidencia',
  `Incid_FR` varchar(200) COMMENT 'Foto referente a la incidencia',
  `Incid_Prior` ENUM ('EnProceso', 'Solucionado', 'EnProblemas') NOT NULL COMMENT 'Prioridad del incidendia',
  `Incid_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la incidencia',
  `Incid_AR` integer NOT NULL COMMENT 'Identificador del area al que se le hizo incidencia'
);
--Alteramos la tabla usuario
ALTER TABLE `Usuario` COMMENT = 'Tabla de usuarios para guardar datos de los datos del administrador y guardias';
--Alteramos la tabla area
ALTER TABLE `Area` COMMENT = 'Tabla de areas en donde se encuentran los animales con respecto a la granja';
--Alteramos la tabla revision
ALTER TABLE `Revision` COMMENT = 'Tabla referente a las revisiones que se hacen a las areas';
--Alteramos la tabla incidencia
ALTER TABLE `Incidencia` COMMENT = 'Tabla referente a las incidencias que ocurren en las areas';
--LLave foranea Usu_AA hace referencia a Area_ID
ALTER TABLE `Usuario`
ADD FOREIGN KEY (`Usu_AA`) REFERENCES `Area` (`Area_ID`);
--LLave foranea Rev_GR hace referencia a Usu_ID
ALTER TABLE `Revision`
ADD FOREIGN KEY (`Rev_GR`) REFERENCES `Usuario` (`Usu_ID`);
--LLave foranea Rev_AR hace referencia a Area_ID
ALTER TABLE `Revision`
ADD FOREIGN KEY (`Rev_AR`) REFERENCES `Area` (`Area_ID`);
--LLave foranea Incid_GR hace referencia a Usu_ID
ALTER TABLE `Incidencia`
ADD FOREIGN KEY (`Incid_GR`) REFERENCES `Usuario` (`Usu_ID`);
--LLave foranea Incid_AR hace referencia a Area_ID
ALTER TABLE `Incidencia`
ADD FOREIGN KEY (`Incid_AR`) REFERENCES `Area` (`Area_ID`);
