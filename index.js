var request = require("request");
var net = require('net');

var Token = 'ohMIiD5N1vx7mlzlUWwb9EqcMY533cGBI6y8EPxbGOb'

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
    //socket.pipe(socket);
    socket.on('data', function(data){
        lineNotify("kai",data)
        console.log (data.toString());
      });
});


//line 推播 function

var lineNotify = function (place,event){
    var options = {
        method: 'POST',
        url: 'https://notify-api.line.me/api/notify',
        headers: {
            Authorization: `Bearer ${Token}` ,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            message: "\n" + '地點：' + place + "\n" + "事件: " + event
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
    });
}

server.listen(50011, '127.0.0.1');
console.log("server up!!")