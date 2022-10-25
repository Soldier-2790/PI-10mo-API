const express = require('express')
const area = express.Router()
area.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From area', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
area.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into area Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area añadido')
    })
  })
})
area.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From area Where id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area eliminado')
    })
  })
})
area.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update area Set ? Where id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area actualizado')
    })
  })
})
module.exports = area
