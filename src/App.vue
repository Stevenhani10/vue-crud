<template>
  <NavbarComponent></NavbarComponent>
<router-view/>
</template>

<script>
import NavbarComponent from './components/navbarComponent.vue';


export default {
  name: 'App',
  components: {
    NavbarComponent
}
}
</script>

<style>

</style>
