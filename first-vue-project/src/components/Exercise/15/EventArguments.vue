<script>
import MyButton from './MyButton.vue'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      count: 3
    }
  },
  methods: {
    increaseCount(n) {
        this.count += n
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div :style="{ fontSize: count + 'em' }">
          Test
        </div>
        <MyButton @increase-by="(n) => count += n" />
        <MyButton @increase-by="increaseCount" />
    </div>
</template>
