/*
  `Rev_ID` integer PRIMARY KEY AUTO_INCREMENT COMMENT 'Identificador de la revisión',
  `Rev_Infor` text NOT NULL COMMENT 'Informe de la revisión',
  `Rev_FR` varchar(200) COMMENT 'Foto referente a la revisión',
  `Rev_GR` integer NOT NULL COMMENT 'Identificador del guardia que hizo la revisión',
  `Rev_AR` integer NOT NULL COMMENT 'Identificador del area al que se le hizo revisión'
*/
const Revision = function (revision) {
  this.Rev_ID = revision.Rev_ID
  this.Rev_Infor = revision.Rev_Infor
  this.Rev_FR = revision.Rev_FR
  this.Rev_GR = revision.Rev_GR
  this.Rev_AR = revision.Rev_AR
}
