const express = require('express')
const incidenciaR = express.Router()
incidenciaR.get('/', (req, res) => {
  console.log('Accediendo a incidencias')
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From incidencia', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
incidenciaR.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into incidencia Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia añadida')
    })
  })
})
incidenciaR.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From incidencia Where Incid_ID = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia eliminada')
    })
  })
})
incidenciaR.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update incidencia Set ? Where Incid_ID = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia actualizado')
    })
  })
})
module.exports = incidenciaR
