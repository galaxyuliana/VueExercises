<script>
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  },
  methods: {
    callback() {
        alert("You just clicked the button!");
    }
  }
}
</script>

<template>
    <div class="exercise">
        <MyComponent @submit-event="callback" />
    </div>
</template>
