<script setup>
import ReactivityFundamentals from './ReactivityFundamentals.vue'
import ReactiveProxyVsOriginal from './ReactiveProxyVsOriginal.vue'
import DeclaringMethods from './DeclaringMethods.vue'
import DOMUpdateTiming from './DOMUpdateTiming.vue'
import DeepReactivity from './DeepReactivity.vue'
</script>

<template>
    <div>
        <h2>Exercise 02</h2>
        <h4>Reactivity Fundamentals</h4>
        <ReactivityFundamentals />
        <h4>Reactive Proxy Vs. Original</h4>
        <ReactiveProxyVsOriginal />
        <h4>Declaring Methods</h4>
        <DeclaringMethods />
        <h4>DOM Update Timing</h4>
        <DOMUpdateTiming />
        <h4>Deep Reactivity</h4>
        <DeepReactivity />
    </div>
</template>
