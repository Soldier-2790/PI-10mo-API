const express = require('express')
const revision = express.Router()
revision.get('/', (req, res) => {
  console.log('Accediendo a revisiones')
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From revision', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
revision.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into revision Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision añadida')
    })
  })
})
revision.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From revision Where id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision eliminada')
    })
  })
})
revision.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update revision Set ? Where id = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision actualizada')
    })
  })
})
module.exports = revision
