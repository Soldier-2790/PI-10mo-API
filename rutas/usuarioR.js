const express = require('express')
const usuarioR = express.Router()
usuarioR.get('/', (req, res) => {
  console.log('Accediendo a usuarios')
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From usuario', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
usuarioR.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into usuario Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario añadido')
    })
  })
})
usuarioR.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From usuario Where id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario eliminado')
    })
  })
})
usuarioR.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update usuario Set ? Where id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Usuario actualizado')
    })
  })
})
module.exports = usuarioR
