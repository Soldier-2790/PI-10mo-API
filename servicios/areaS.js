const areaM = require('../modelos/areaM')
const areaS = {}
areaS.crear = (req, res) => {
  //Valida la consulta
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacio."
    })
  }
  //Creamos un objeto
  const area = new areaM({
    Area_Num: req.body.Area_Num,
    Area_Nom: req.body.Area_Nom,
    Area_Descr: req.body.Area_Descr,
    Area_Espec: req.body.Area_Espec,
    Area_CA: req.body.Area_CA,
    Area_E: req.body.Area_E
  })
  //Guarda area
  areaM.crear(area, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Algún error ocurrió al crear el area"
      })
    } else res.send(data)
  })
}
areaS.ObtTodos = (req, res) => {
  const Area_Nom = req.query.Area_Nom
  areaM.ObtTodos(Area_Nom, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Algún error ocurrió al encontrar las areas."
      })
    } else res.send(data)
  })
}
areaS.ObtPorId = (req, res) => {
  areaM.ObtPorId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontró el area con id ${req.params.id}.`
        })
      } else {
        res.status(500).send({
          message: `Error al buscar el area con id ${req.params.id}`
        })
      }
    } else res.send(data)
  })
}
areaS.ObtTodosActivos = (req, res) => {
  areaM.ObtTodosActivos(err, data)=> {
    if (err) {
      res.status(500).send({
        message: err.message || "Algún error ocurrió al estar encontrando las areas"
      })
    } else res.send(data)
  }
}
