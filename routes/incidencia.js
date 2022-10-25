const express = require('express')
const incidencia = express.Router()
incidencia.get('/', (req, res) => {
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
incidencia.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into incidencia Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia añadida')
    })
  })
})
incidencia.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From incidencia Where id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia eliminada')
    })
  })
})
incidencia.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update incidencia Set ? Where id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Incidencia actualizado')
    })
  })
})
module.exports = incidencia
