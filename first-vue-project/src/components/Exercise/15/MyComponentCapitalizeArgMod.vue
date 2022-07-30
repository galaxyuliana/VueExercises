<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({})
    }
  },
  props: ['title', 'titleModifiers'],
  emits: ['update:title'],
  created() {
    console.log(this.titleModifiers) // { capitalize: true }
  }
}
</script>

<template>
    <div class="exercise">
        <input type="text" :value="modelValue" @input="emitValue" />
    </div>
</template>
