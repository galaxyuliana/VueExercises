<script setup>
import BindingToObjects from './BindingToObjects.vue'
import BindingToObjectNotInline from './BindingToObjectNotInline.vue'
import BindingToObjectComputed from './BindingToObjectComputed.vue'
import BindingToArrays from './BindingToArrays.vue'
import BindingToArraysWithTernaryExpressions from './BindingToArraysWithTernaryExpressions.vue'
import BindingToArraysObjectSyntax from './BindingToArraysObjectSyntax.vue'
import WithComponentsBasic from './WithComponentsBasic.vue'
import WithComponentsClassBindings from './WithComponentsClassBindings.vue'
import WithComponentsMultipleRoots from './WithComponentsMultipleRoots.vue'
import InlineStylesBindingToObj from './InlineStylesBindingToObj.vue'
import InlineStylesBindingToObjAdvanced from './InlineStylesBindingToObjAdvanced.vue'
import InlineStylesBindingToArr from './InlineStylesBindingToArr.vue'
import InlineStylesMultipleValues from './InlineStylesMultipleValues.vue'
</script>

<template>
    <div>
        <h2>Exercise 04</h2>
        <h4>Binding to Objects</h4>
        <BindingToObjects />
        <h4>Binding to Objects2</h4>
        <BindingToObjectNotInline />
        <h4>Binding to Objects using computed</h4>
        <BindingToObjectComputed />
        <h4>Binding to Arrays</h4>
        <BindingToArrays />
        <h4>Binding to Arrays With Ternary Expressions</h4>
        <BindingToArraysWithTernaryExpressions />
        <h4>Binding to Arrays using Object Syntax</h4>
        <BindingToArraysObjectSyntax />
        <h4>With Components</h4>
        <WithComponentsBasic />
        <h4>With Components using Class bindings</h4>
        <WithComponentsClassBindings />
        <h4>With Components with mutiple roots</h4>
        <WithComponentsMultipleRoots />
        <h4>Binding Inline Styles - Binding to Objects</h4>
        <InlineStylesBindingToObj />
        <h4>Binding Inline Styles - Binding to Objects advanced</h4>
        <InlineStylesBindingToObjAdvanced />
        <h4>Binding Inline Styles - Binding to Arrays</h4>
        <InlineStylesBindingToArr />
        <h4>Binding Inline Styles - Multiple Values</h4>
        <InlineStylesMultipleValues />
    </div>
</template>
