<script setup>
import FormInputBindings from './FormInputBindings.vue'
import Text from './Text.vue'
import MultilineText from './MultilineText.vue'
import SingleCheckBox from './SingleCheckBox.vue'
import MultipleCheckboxes from './MultipleCheckboxes.vue'
import RadioButton from './RadioButton.vue'
</script>

<template>
    <div>
        <h2>Exercise 08</h2>
        <h4>Form Input Bindings</h4>
        <FormInputBindings />
        <h4>Text</h4>
        <Text />
        <h4>Multiline text</h4>
        <MultilineText />
        <h4>Checkbox</h4>
        <SingleCheckBox />
        <h4>Multiple Checkbox</h4>
        <MultipleCheckboxes />
        <h4>Radio button</h4>
        <RadioButton />
    </div>
</template>