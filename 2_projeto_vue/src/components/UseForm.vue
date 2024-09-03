<template>
    <from action="">
      <div>
        <InputText />
      </div>
      <div>
        <InputText />
      </div>
      <div>
      <UseSubmit />
    </div>
    </from>
</template>

<script>
import InputText from './form/InputText.vue';
import UseSubmit from './form/UseSubmit.vue';

export default{
    name: 'UseForm',
    components:{
        InputText,
        UseSubmit
    }
}
</script>
