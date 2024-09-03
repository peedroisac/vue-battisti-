<template>

    <img :src="avatar" alt="descricao">
</template>

<script>
export default {
    name: 'UsePicture',
    data(){
        return{
            avatar: "/img/avatar.png",
            descricao: "Pedro Patricio"
        }
    }
}
</script>

<style>

</style>