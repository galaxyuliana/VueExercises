<script>
export default {
  methods: {
    submit() {
      this.$emit('submitEvent')
    }
  }
}
</script>

<template>
    <div class="exercise">
        <button @click="$emit('submitEvent')">click me</button>
        <button @click="submit">click me</button>
    </div>
</template>
