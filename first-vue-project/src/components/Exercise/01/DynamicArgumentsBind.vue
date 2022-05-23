<script>
export default {
    data() {
        return {
            url: 'https://galaxyuliana.tistory.com',
            attributeName: 'href'
        }
    }
}
</script>

<template>
  <div class="exercise">
    <a v-bind:[attributeName]="url">https://galaxyuliana.tistory.com</a>
    <br/>
    <!-- shorthand -->
    <a :[attributeName]="url">https://galaxyuliana.tistory.com</a>
  </div>
</template>
