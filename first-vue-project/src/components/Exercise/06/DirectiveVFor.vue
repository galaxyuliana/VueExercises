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
        <li v-for="item in items">
            {{ item.message }}
        </li>
    </div>
</template>
