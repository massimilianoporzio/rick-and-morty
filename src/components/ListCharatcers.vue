<template>
<section>
  <div class="chracters">
    <div class="characters__item">
      <h2>{{ characters }}</h2>
    </div>
  </div>
</section>
</template>

<script setup>
import {onMounted,computed} from "vue";
import {useStore} from 'vuex'

  const name =  "ListCharatcers"
  const characters = computed(()=>{
    return store.state.charactersFiltered
})
  const store = useStore()
  onMounted(()=>{
      store.dispatch('getCharacters')
    })





</script>

<style scoped>

</style>
