const express = require('express')
const areaR = express.Router()
areaR.get('/', (req, res) => {
  console.log('Accediendo a areas')
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From area', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
      console.log(rows)
    })
  })
})
areaR.get('/:id', (req, res) => {
  console.log(`Buscando el area con id ${req.params.id}`)
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Select * From area Where Area_ID = ?', [req.params.id], (err, row) => {
      if (err) return res.send(err)
      res.json(row)
      console.log(row)
    })
  })
})
areaR.post('/', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    console.log(req.body)
    conn.query('Insert Into area Set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area añadido')
    })
  })
})
areaR.delete('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Delete From area Where Area_ID = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area eliminado')
    })
  })
})
areaR.put('/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    conn.query('Update area Set ? Where Area_ID = ?', [req.body, req.params.id], (err, rows) => {
      if (err) return res.send(err)
      res.send('Area actualizado')
    })
  })
})
module.exports = areaR
