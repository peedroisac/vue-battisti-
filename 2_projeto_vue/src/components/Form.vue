<template>
    <from action="">
      <div>
        <InputText />
      </div>
      <div>
        <InputText />
      </div>
      <div>
      <Submit />
    </div>
    </from>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';

export default{
    name: 'Form',
    components:{
        InputText,
        Submit
    }
}
</script>
