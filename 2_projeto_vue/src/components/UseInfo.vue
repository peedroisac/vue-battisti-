<template>
    
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>Python</li>
        </ul>
        <div> 
            <button @click="showEmail">{{textoBotao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
    <UsePicture />
    </div>
</template>

<script>

import UsePicture from './UsePicture.vue';

export default{
    name: 'UseInfo',
    components: {
        UsePicture
    },
    data(){
        return{
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'pedro@email.com',
            meu_link: 'https://duckduckgo.com/',
            textoBotao: 'Mostrar e-mail'
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = "Mostrar e-mail"
            } else {
                this.textoBotao = 'Esconder e-mail'
            }
        }
    }
}
</script>