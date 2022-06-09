<script>
export default {
    data() {
        return {
            todos: [{ name: '123' }, { name: 'Bar' }, { name: '456' }, { name: 'Foo' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <template v-for="todo in todos">
            <li v-if="!todo.isComplete">
                {{ todo.name }}
            </li>
        </template>
    </div>
</template>
