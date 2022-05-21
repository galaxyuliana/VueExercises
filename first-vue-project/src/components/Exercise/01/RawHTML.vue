<script>
export default {
    data() {
        return {
            rawHTML: '<span style="color: red">This should be red.</span>'
        }
    }
}
</script>

<template>
  <div class="exercise">
    <p>Using text interpolation: {{ rawHTML }}</p>
    <p>Using v-html directive: <span v-html="rawHTML"></span></p>
  </div>
</template>
