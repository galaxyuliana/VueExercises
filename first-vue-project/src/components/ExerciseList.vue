<script setup>
import Exercise01 from './Exercise/01/Exercise01.vue'
import Exercise02 from './Exercise/02/Exercise02.vue'
import Exercise03 from './Exercise/03/Exercise03.vue'
import Exercise04 from './Exercise/04/Exercise04.vue'
import Exercise05 from './Exercise/05/Exercise05.vue'
</script>

<template>
    <div>
        <router-link class="nav-link" to="/01">Exercies 01</router-link>
        <router-link class="nav-link" to="/02">Exercies 02</router-link>
        <router-link class="nav-link" to="/03">Exercies 03</router-link>
        <router-link class="nav-link" to="/04">Exercies 04</router-link>
        <router-link class="nav-link" to="/05">Exercies 05</router-link>
    </div>
</template>

<style>
main a {
    display: block;
    margin-bottom: 10px;
    font-size: 20px;
}
</style>