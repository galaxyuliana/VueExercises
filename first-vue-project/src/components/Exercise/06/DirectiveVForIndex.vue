<script>
export default {
  data() {
    return {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <li v-for="{ message } in items">
            {{ message }}
        </li>

        <!-- with index alias -->
        <li v-for="({ message }, index) in items">
            {{ message }} {{ index }}
        </li>
    </div>
</template>
