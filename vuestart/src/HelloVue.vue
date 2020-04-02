<template>
   <div class="hellovue">
      {{message}}
   </div>
</template>
<script>

export default {
   name: 'HelloVue',
   data() {
      return {
        message :'🤙 .... Soy otro Componente .... 🤙',
      };
   },
};
</script>

<style scoped>
   .hellovue {
           color: royalblue;
           font-size: 20px;
        }
</style>