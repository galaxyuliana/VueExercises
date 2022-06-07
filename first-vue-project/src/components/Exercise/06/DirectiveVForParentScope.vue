<script>
export default {
    data() {
        return {
            parentMessage: 'Parent',
            items: [{ message: 'Foo' }, { message: 'Bar' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <li v-for="(item, index) in items">
            {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </div>
</template>
