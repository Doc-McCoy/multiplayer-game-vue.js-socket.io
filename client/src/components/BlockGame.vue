<template>
  <div>
    <canvas
      ref="game"
      width="640"
      height="480"
      style="border: 1px solid black;"
    >
    </canvas>
    <p>
      <button v-on:click="move('right')">Right</button>
      <button v-on:click="move('left')">Left</button>
      <button v-on:click="move('up')">Up</button>
      <button v-on:click="move('down')">Down</button>
    </p>
  </div>
</template>

<script>
import io from "socket.io-client"
export default {
  name: 'BlockGame',
  data() {
    return {
      socket: {},
      context: {},
      position: {
        x: 0,
        y: 0
      }
    }
  },

  // Função chamada sempre que a instância é criada
  // Para mais informações sobre estes gatilhos das instâncias do vue:
  // https://br.vuejs.org/v2/guide/instance.html#Ciclo-de-Vida-da-Instancia
  created() {
    this.socket = io("http://localhost:3000");
    document.onkeydown = this.onkeydown;
  },

  // Função chamada logo após a instância ser montada
  mounted() {
    // Acessar o canvas
    this.context = this.$refs.game.getContext("2d");
    // Escuta evento "position" do server
    this.socket.on("position", data => {
      // Atribui a nova posição que vem do server na variável data
      this.position = data;
      // Limpa o canvas
      this.context.clearRect(
        0, 0,
        this.$refs.game.width, this.$refs.game.height
      );
      // Redesenha o player no canvas com as novas coordenadas
      this.context.fillRect(
        this.position.x,
        this.position.y,
        20,
        20
      );
    });
  },
  methods: {
    // Emite o signal "move" para o server
    move(direction) {
      this.socket.emit("move", direction);
    },
    // Recebe um evento de teclado e chama o move() de acordo com o keyCode
    onkeydown(event) {
      switch (event.keyCode) {
        case 38:
          this.move('up');
          break;
        case 40:
          this.move('down');
          break;
        case 37:
          this.move('left');
          break;
        case 39:
          this.move('right');
          break;
      }
    }
  }
}
</script>

<style scoped></style>
