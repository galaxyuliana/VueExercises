<script setup>
import Exercise01 from './Exercise/01/Exercise01.vue'
import Exercise02 from './Exercise/02/Exercise02.vue'
</script>

<template>
    <router-link class="nav-link" to="/01">Exercies 01</router-link>
    <router-link class="nav-link" to="/02">Exercies 02</router-link>
</template>

<style>
main a {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
}
</style>