<?php
/**
 * Created by PhpStorm.
 * User: kane
 * Date: 2018/11/16
 * Time: 16:47
 */

if (!function_exists('mylog')) {

    function mylog($s)
    {
        $file = fopen('aaa', 'a');
        fwrite($file, $s);
        fwrite($file, "\n");
        fclose($file);
    }
}

$server = new swoole_websocket_server("localhost", 9502);

$server_state = true;

$reqs = [];

$log_path = '';

go(function () use ($server_state, $log_path) {
    $offset = 0;
    $limit = 1000;
    while ($server_state) {

        $fd = fopen($log_path,'r');

        $content = fread()

        $offset += $length;
    }
});

$server->on('open', function ($server, $req) use ($reqs) {
    $reqs[$req->fd] = $req;
});

$server->on('message', function ($server, $frame) {
});

$server->on('close', function ($server, $fd) use ($reqs) {
    unset($reqs[$fd]);
});


$server->start();