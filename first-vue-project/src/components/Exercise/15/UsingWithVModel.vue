<script>
import CustomInput from './CustomInput.vue'

export default {
  components: { CustomInput },
  data() {
    return {
      message: 'hello'
    }
  }
}
</script>

<template>
    <div class="exercise">
        <CustomInput v-model="message" /> {{ message }}
    </div>
</template>
