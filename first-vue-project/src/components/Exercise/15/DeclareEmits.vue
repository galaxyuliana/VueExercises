<script>
export default {
  emits: ['submitEvent']
}
</script>

<template>
    <div class="exercise">
        <button @click="$emit('submitEvent')">click me</button>
    </div>
</template>
