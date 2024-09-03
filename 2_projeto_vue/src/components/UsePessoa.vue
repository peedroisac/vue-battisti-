<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <UseInfo />
        <UseForm />
    </div>
</template>

<script>
import UseInfo from './UseInfo.vue';
import UseForm from './UseForm.vue';

export default {
    name: 'UsePessoa',
    components: {
        UseInfo,
        UseForm,
    },
    data(){
        return{
            nome: 'Pedro'
        }
    }
}
</script>
