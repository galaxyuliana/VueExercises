<script>
import MyComponentCapitalize from './MyComponentCapitalize.vue'

export default {
  components: { MyComponentCapitalize },
  data() {
    return {
      myText: ''
    }
  }
}
</script>

<template>
    <div class="exercise">
        This input capitalizes everything you enter:
        <MyComponentCapitalize v-model.capitalize="myText" />
    </div>
</template>
