/*
`Incid_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la incidencia',
  `Incid_Infor` text NOT NULL COMMENT 'Informe de la incidencia',
  `Incid_FR` varchar(200) COMMENT 'Foto referente a la incidencia',
  `Incid_Prior` ENUM ('EnProceso', 'Solucionado', 'EnProblemas') NOT NULL COMMENT 'Prioridad del incidendia',
  `Incid_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la incidencia',
  `Incid_AR` integer NOT NULL COMMENT 'Identificador del area al que se le hizo incidencia'
*/
const Incidencia = function (incidencia) {
  this.Incid_ID = incidencia.Incid_ID
  this.Incid_Infor = incidencia.Incid_Infor
  this.Incid_FR = incidencia.Incid_FR
  this.Incid_Prior = incidencia.Incid_Prior
  this.Incid_GR = incidencia.Incid_GR
  this.Incid_AR = incidencia.Incid_AR
}
