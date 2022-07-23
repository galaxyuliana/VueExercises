<script>
import DeclareEmits from './DeclareEmits.vue'
export default {
  components: {
    DeclareEmits
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
        <DeclareEmits @submit-event="callback" />
    </div>
</template>
