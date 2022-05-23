<script setup>
import TextInterpolation from './TextInterpolation.vue'
import RawHTML from './RawHTML.vue'
import AttributeBindings from './AttributeBindings.vue'
import BooleanAttributes from './BooleanAttributes.vue'
import DynamicallyBindingMultipleAttributes from './DynamicallyBindingMultipleAttributes.vue'
import CallingFunctions from './CallingFunctions.vue'
import Directives from './Directives.vue'
import ArgumentsBind from './ArgumentsBind.vue'
import ArgumentsOn from './ArgumentsOn.vue'
import DynamicArgumentsBind from './DynamicArgumentsBind.vue'
import DynamicArgumentsOn from './DynamicArgumentsOn.vue'
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
        <h4>Boolean Attributes</h4>
        <BooleanAttributes />
        <h4>Dynamically Binding Multiple Attributes</h4>
        <DynamicallyBindingMultipleAttributes />
        <h4>Calling Functions</h4>
        <CallingFunctions />
        <h4>Directives</h4>
        <Directives />
        <h4>Arguments v-bind</h4>
        <ArgumentsBind />
        <h4>Arguments v-on</h4>
        <ArgumentsOn />
        <h4>Dynamic Arguments v-bind</h4>
        <DynamicArgumentsBind />
        <h4>Dynamic Arguments v-on</h4>
        <DynamicArgumentsOn />
    </div>
</template>
