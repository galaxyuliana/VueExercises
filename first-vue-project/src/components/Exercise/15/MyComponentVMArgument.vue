<script>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>

<template>
    <div class="exercise">
        <input
            type="text"
            :value="title"
            @input="$emit('update:title', $event.target.value)"
        />
    </div>
</template>
