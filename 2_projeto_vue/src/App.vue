<template>
  <the-header />
  <div>
    <PrimeiroComponente />
    <p class="paragrafo-pai">O dado de app é: {{testando}}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/UsePessoa.vue';
import TheHeader from "@/components/form/TheHeader.vue";

  export default {
    name: 'App',
    components: {
      TheHeader,
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    },
    data(){
      return {
        testando: "Teste"
      }
    }
  }

</script>

<style>
  body {
    background-color: #333;
    color: #FFF;
  }
  a {
    color: red;
  }
  .teste {
    background-color: black;
  }


</style>
