<script>
import MyComponent from './MyComponent.vue'

export default {
    components: { MyComponent },
    data() {
        return {
            items: [{ id: 1, name: '123' }, { id: 2, name: 'Bar' }, { id: 3, name: '456' }, { id: 4, name: 'Foo' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <my-component
            v-for="(item, index) in items"
            :item="item"
            :index="index"
            :key="item.id"
        ></my-component>
    </div>
</template>
