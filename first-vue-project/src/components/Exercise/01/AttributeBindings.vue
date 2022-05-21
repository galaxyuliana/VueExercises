<script>
export default {
    data() {
        return {
            dynamicId: 'galaxyuliana'
        }
    }
}
</script>

<template>
  <div class="exercise">
    <!-- without shorthand -->  
    <!-- <div v-bind:id="dynamicId"></div> -->
    <!-- with shorthand -->  
    <div :id="dynamicId"></div>
  </div>
</template>
