<script>
export default {
  data() {
    return {
        emailAddress: '',
        pwd: ''
    }
  },
  emits: {
    // No validation
    click: null,
    // Validate submit event
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
}
</script>

<template>
    <div class="exercise">
        <form>
            <input v-model="emailAddress" placeholder="email@example.com" />
            <input v-model="pwd" type="password" />
            <button @click="submitForm(emailAddress, pwd)">click me</button>
        </form>
    </div>
</template>
