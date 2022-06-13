<script setup>
import DirectiveVOn from './DirectiveVOn.vue'
import DirectiveVOnMethodHandlers from './DirectiveVOnMethodHandlers.vue'
import DirectiveVOnCallMethodInline from './DirectiveVOnCallMethodInline.vue'
import DirectiveVOnEventArgument from './DirectiveVOnEventArgument.vue'
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
        <h4>Accessing Event Argument in Inline Handlers</h4>
        <DirectiveVOnEventArgument />
    </div>
</template>
