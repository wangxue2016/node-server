/*
 * @Author: your name
 * @Date: 2021-09-18 15:11:37
 * @LastEditTime: 2021-09-18 16:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-server\index.js
 */
let http = require('http')
let fs=require('fs')
const server = http.createServer(function (req,res) {
  console.log('有新的客户端接入');
  server.maxConnections = 3000;
  let  html= fs.readFileSync('./index.html')
  res.write(html)
  res.end()
});
//设置监听端口
server.listen(8001);
//设置监听时的回调函数
server.on('listening', function () {
  console.log("服务正在监听")
});
//设置关闭时的回调函数
server.on('close', function () {
  console.log('服务已关闭');
});
//设置出错时的回调函数
server.on('error', function (err) {
  console.log('服务运行异常', err);
});