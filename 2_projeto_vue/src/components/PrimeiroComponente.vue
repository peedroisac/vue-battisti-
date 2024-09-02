<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ name }} e também trabalho como {{ profissao }}.</p>
    </div>
</template>

<script>

    export default {
        name: 'PrimeiroComponente',
        data(){
            return {
                name: "Pedro",
                profissao: "Programador"
            }
        }
    }

</script>
