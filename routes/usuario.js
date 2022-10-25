const express = require('express')
const usuario = express.Router()
usuario.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From usuario', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
usuario.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into usuario Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario añadido')
    })
  })
})
usuario.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From usuario Where id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario eliminado')
    })
  })
})
usuario.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update usuario Set ? Where id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario actualizado')
    })
  })
})
module.exports = usuario
