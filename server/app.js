const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http);


// Aqui será armazenada a posição do player
var position = {
    x: 200,
    y: 200
};

// Ouvir eventos de conexão com o server
Socketio.on("connection", socket => {

    // Emitir a posição inicial assim que o client se conectar
    socket.emit("position", position);

    // Ouvir o evento "move" e atualizar a posição do player
    socket.on("move", data => {
        switch (data) {
            case "left":
                position.x -= 5;
                break;
            case "right":
                position.x += 5;
                break;
            case "up":
                position.y -= 5;
                break;
            case "down":
                position.y += 5;
                break;
        }
        // Emitir o evento "position" com a nova posição
        Socketio.emit("position", position);
    })
});

// Iniciar o server na porta 3000
Http.listen(3000, () => {
    console.log("Listening at :3000...");
});
