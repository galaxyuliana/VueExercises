<script>
export default {
  data() {
    return {
        isActive: true,
        hasError: false
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div
            class="static"
            :class="{ active: isActive, 'text-danger': hasError }"
        ></div>
    </div>
</template>
