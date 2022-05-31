<script>
export default {
    data() {
        return {
            activeClass: 'active',
            errorClass: 'text-danger',
            isActive: false,
        }
    }
}
</script>

<template>
    <div class="exercise">
        <div :class="[isActive ? activeClass : '', errorClass]"></div>
    </div>
</template>
