<script setup>
import DirectiveVFor from './DirectiveVFor.vue'
import DirectiveVForParentScope from './DirectiveVForParentScope.vue'
import DirectiveVForIndex from './DirectiveVForIndex.vue'
import DirectiveVForNested from './DirectiveVForNested.vue'
import DirectiveVForOf from './DirectiveVForOf.vue'
</script>

<template>
    <div>
        <h2>Exercise 06</h2>
        <h4>Directive v-for</h4>
        <DirectiveVFor />
        <h4>Directive v-for access to all parent scope properties</h4>
        <DirectiveVForParentScope />
        <h4>Directive v-for with index</h4>
        <DirectiveVForIndex />
        <h4>Directive v-for - nested</h4>
        <DirectiveVForNested />
        <h4>Directive v-for using of</h4>
        <DirectiveVForOf />
    </div>
</template>
