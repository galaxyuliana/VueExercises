<script>
import MyComponentCapitalize from './MyComponentCapitalize.vue'
import MyComponentCapitalizeArgMod from './MyComponentCapitalizeArgMod.vue'

export default {
  components: {
    MyComponentCapitalize,
    MyComponentCapitalizeArgMod
  },
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
        <MyComponentCapitalizeArgMod v-model:title.capitalize="myText" />
    </div>
</template>
