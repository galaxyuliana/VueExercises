<script setup>
import TextInterpolation from './TextInterpolation.vue'
import RawHTML from './RawHTML.vue'
import AttributeBindings from './AttributeBindings.vue'
</script>

<template>
    <div>
        <h2>Exercise 01</h2>
        <h4>Text Interpolation</h4>
        <TextInterpolation msg="This is for test"/>
        <h4>Raw HTML</h4>
        <RawHTML />
        <h4>Attribute Bindings</h4>
        <AttributeBindings />
    </div>
</template>
