/*
 * @Author: your name
 * @Date: 2021-09-18 17:10:27
 * @LastEditTime: 2021-09-18 17:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-server\request.js
 */
const express = require('express')
const app = express()
app.listen(8001)
app.get('/testget', (req, res) => {
    res.send('<div>hello world   get</div>')
})
app.post('/testpost', (req, res) => {
  res.json('<div>hello world post</div>')
})