<script>
export default {
    data() {
        return {
            items: [{ id: 1, name: '123' }, { id: 2, name: 'Bar' }, { id: 3, name: '456' }, { id: 4, name: 'Foo' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div v-for="item in items" :key="item.id">
            {{ item.name }}
        </div>
    </div>
</template>
