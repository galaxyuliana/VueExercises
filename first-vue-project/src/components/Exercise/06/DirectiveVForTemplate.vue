<script>
export default {
    data() {
        return {
            items: [{ msg: 'Foo' }, { msg: 'Bar' }, { msg: 'Bar1' }, { msg: 'Bar2' }]
        }
    }
}
</script>

<template>
    <div class="exercise">
        <ul>
            <template v-for="item in items">
                <li>{{ item.msg }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>
    </div>
</template>
