let socket;

function init(url) {
	socket = new WebSocket(url);
	console.log('connecting...');
}

// initial setup when connection first opened
function registerOpenHandler(handler) {
	socket.onopen = () => {
		console.log('open');
		handler();
	};
}

// forward incoming messages to handlers
function registerMessageHandler(handler) {
	socket.onmessage = (e) => {
		console.log('message', e.data);
		let data = JSON.parse(e.data);
		handler(data);
	};
}

// send outgoing messages to WebSocket
function sendMessage(payload) {
  	socket.send(JSON.stringify(payload));
}

export default {
	init,
	registerOpenHandler,
	registerMessageHandler,
	sendMessage
}
