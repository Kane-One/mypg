// 嗅探解析

// 发送命令
// 启动ws服务，建立websocket连接

require('dotenv').config()
const helper = require('./helper')


const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: env('WEBSOCKET_PROT') });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send("{player_id:1,position_x:100,position_y:50}");
  ws.send("{player_id:2,position_x:200,position_y:100}");
  ws.send("{player_id:3,position_x:300,position_y:300}");
  ws.send("{player_id:4,position_x:400,position_y:200}");
});