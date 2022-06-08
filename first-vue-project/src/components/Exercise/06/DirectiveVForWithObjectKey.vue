<script>
export default {
    data() {
        return {
            myObject: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
            }
        }
    }
}
</script>

<template>
    <div class="exercise">
        <ul>
            <li v-for="(value, key) in myObject">
                {{ key }}: {{ value }}
            </li>
        </ul>
    </div>
</template>
