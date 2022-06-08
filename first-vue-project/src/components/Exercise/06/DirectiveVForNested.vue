<script>
export default {
  data() {
    return {
        items: [{ message: 'Foo', children: 'Vue' }, { message: 'Bar', children: 'Js' }]
    }
  }
}
</script>

<template>
    <div class="exercise">
        <li v-for="item in items">
            <span v-for="childItem in item.children">
                {{ item.message }} {{ childItem }}
            </span>
        </li>
    </div>
</template>
