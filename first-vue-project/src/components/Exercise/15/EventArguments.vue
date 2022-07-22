<script>
import MyButton from './MyButton.vue'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      count: 0
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
        {{ count }}
        <MyButton @increase-by="(n) => count += n" />
        <MyButton @increase-by="increaseCount" />
    </div>
</template>
