<script>
export default {
    data() {
        return {
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            }
        }
    }
}
</script>

<template>
  <div class="exercise">
    <div v-bind="objectOfAttrs"></div>
  </div>
</template>
