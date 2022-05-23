<script>
export default {
    data() {
        return {
            url: 'https://galaxyuliana.tistory.com'
        }
    }
}
</script>

<template>
  <div class="exercise">
    <a v-bind:href="url">https://galaxyuliana.tistory.com</a>
    <br/>
    <!-- shorthand -->
    <a :href="url">https://galaxyuliana.tistory.com</a>
  </div>
</template>
