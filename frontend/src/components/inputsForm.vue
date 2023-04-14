<template>
    <div class="form-inputs">
        <label>{{ label }}</label>
        <input :type="type"  @input="$emit('input', $event.target.value)" >
    </div>

</template>

<script>

    export default{
        name: 'inputsForm',
        props: {
            type: String,
            modelValue: [String, Number],
            label: String,
        },
        methods: {
            updateValue(event){
                this.$emit("update:modelValue", event.target.value)
            }
        }
    };

</script>

<style>

</style>