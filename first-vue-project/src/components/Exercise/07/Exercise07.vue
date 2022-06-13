<script setup>
import DirectiveVOn from './DirectiveVOn.vue'
import DirectiveVOnMethodHandlers from './DirectiveVOnMethodHandlers.vue'
import DirectiveVOnCallMethodInline from './DirectiveVOnCallMethodInline.vue'
</script>

<template>
    <div>
        <h2>Exercise 07</h2>
        <h4>Directive v-on</h4>
        <DirectiveVOn />
        <h4>Directive v-on with method handlers</h4>
        <DirectiveVOnMethodHandlers />
        <h4>Calling Methods in Inline Handlers</h4>
        <DirectiveVOnCallMethodInline />
    </div>
</template>
