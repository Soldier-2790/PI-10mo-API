const express = require('express')
const areaR = express.Router()
const areaS = require('../servicios/areaS')
areaR.get('/', areaS.ObtTodos)
areaR.get('/activos', areaS.ObtTodosActivos)
areaR.get('/:id', areaS.ObtPorId)
areaR.post('/', areaS.crear)
areaR.delete('/:id', areaS.BorrarPorId)
areaR.put('/:id', areaS.ActPorId)
module.exports = areaR