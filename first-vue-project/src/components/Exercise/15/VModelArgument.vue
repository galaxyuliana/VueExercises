<script>
import MyComponentVMArgument from './MyComponentVMArgument.vue'

export default {
  components: {
    MyComponentVMArgument
  },
  data() {
    return {
      title: 'v-model argument example'
    }
  }
}
</script>

<template>
    <div class="exercise">
        <h1>{{ title }}</h1>
        <MyComponentVMArgument v-model:title="title" />
    </div>
</template>
