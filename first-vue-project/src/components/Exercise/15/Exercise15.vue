<script setup>
import EmitListenEvents from './EmitListenEvents.vue'
import EventArguments from './EventArguments.vue'
import DeclaringEmittedEvents from './DeclaringEmittedEvents.vue'
import EventsValidation from './EventsValidation.vue'
</script>

<template>
    <div>
        <h2>Exercise 15</h2>
        <h4>Emitting and Listening to Events</h4>
        <EmitListenEvents />
        <h4>Event Arguments</h4>
        <EventArguments />
        <h4>Declaring Emitted Events</h4>
        <DeclaringEmittedEvents />
        <h4>Events Validation</h4>
        <EventsValidation />
    </div>
</template>