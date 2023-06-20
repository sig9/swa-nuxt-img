<template>
  <div>
    <nuxt-img height="800" src="feature/test2.png" />
    <br/>
    <br/>
    error message:<br/><pre>{{ data?.errormsg }}</pre>
    errors<br/><pre>{{ data?.errors }}</pre>
    <br/>tree<br><pre>{{ data?.tree }}</pre>
    
  </div>
</template>

<script setup lang="ts">

const {data, refresh } = await useFetch('/api/ls', {method: 'GET'})



</script>

