<script>
import CustomInput from './CustomInput.vue'
import CustomInputComputed from './CustomInputComputed.vue'

export default {
  components: {
    CustomInput,
    CustomInputComputed
  },
  data() {
    return {
      message: 'hello',
      messageComputed: 'hello'
    }
  }
}
</script>

<template>
    <div class="exercise">
        <CustomInput v-model="message" /> {{ message }}
        <br/>
        <CustomInputComputed v-model="messageComputed" /> {{ messageComputed }}
    </div>
</template>
