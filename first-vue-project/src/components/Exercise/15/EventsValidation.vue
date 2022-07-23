<script>
import MyForm from './MyForm.vue'
export default {
  components: {
    MyForm
  },
  methods: {
    callback(e) {
        alert("You just clicked the button!");
    }
  }
}
</script>

<template>
    <div class="exercise">
        <MyForm @submit="callback" />
    </div>
</template>
