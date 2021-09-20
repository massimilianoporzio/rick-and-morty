<template>
<div>
  <h1>Rick and Morty</h1>
  <ListCharacter/>
</div>
</template>

<script>
import ListCharacter from '@/components/ListCharatcers'

export default {
  name: 'App',
  components: {
    ListCharacter
  }
}
</script>

<style lang="scss">

</style>
