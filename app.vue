<template>
  <div>
    <nuxt-img height="200" src="https://wonderful-meadow-0d9011810.3.azurestaticapps.net/images/feature/test.png" />
    <br/>
    <button :click="refresh">Refresh SWA Directories</button>
    <br/>
    error message:<br/><pre>{{ data?.errormsg }}</pre>
    errors<br/><pre>{{ data?.errors }}</pre>
    <br/>tree<br><pre>{{ data?.tree }}</pre>
    
  </div>
</template>

<script setup lang="ts">

const {data, refresh } = await useFetch('/api/ls', {method: 'GET'})



</script>

