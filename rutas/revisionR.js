const express = require('express')
const revisionR = express.Router()
revisionR.get('/', (req, res) => {
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
revisionR.get('/:id', (req, res) => {
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
revisionR.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into revision Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision añadida')
    })
  })
})
revisionR.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From revision Where Rev_ID = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision eliminada')
    })
  })
})
revisionR.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update revision Set ? Where Rev_ID = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Revision actualizada')
    })
  })
})
module.exports = revisionR
