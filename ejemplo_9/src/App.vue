<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <transition name="fade">
        <div class="modal-uno" v-if="mostarModal"></div>
    </transition>
    <transition name="fade">
      <div class="modal" v-if="mostarModal">
        <h1>mensaje en la ventana modal</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat possimus omnis accusamus obcaecati debitis tempora magnam nobis ratione, tempore delectus odio culpa quas non nisi assumenda at id doloremque ex?</p>
        <button @click="mostarModal = false" >Cerrar</button>
      </div>
    </transition>
    <button @click="mostarModal = true">Abrir ventana Modal</button>
    <br>
    <br>
    <Contador/>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'

export default {
  name: 'App',
  data() {
    return {
      mostarModal : false
    }
  },
  components: {
    Contador
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
  }

body, html {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

button {
  border: none;
  cursor: pointer;
  background: none;
  border-radius: 15px;
  display: block;
  padding: 15px 20px;
  background-image: linear-gradient(to right #aaffcc, #faa111);
  color: black;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 3px 3px #00000046;
}

button:hover {
   box-shadow: 6px 6px  rgba(59, 56, 56, 0.733);

}

.modal-uno {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 6px 6px  rgba(59, 56, 56, 0.733);
  z-index: 2;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.8s ease-in-out;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>
