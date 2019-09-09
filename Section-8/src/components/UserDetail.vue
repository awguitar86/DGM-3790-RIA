<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <button @click="resetName">Reset</button>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true, //component will only work if this is type string
                // default: 'Max'
            }
        },
        methods: {
            // switchName(){
            //     return this.name.split("").reverse().join("");
            // },
            resetName() {
                this.name = 'Max';
                this.$emit('nameWasReset', this.name);
            }
        }
    }
</script>

<style scoped>
    .component {
        background-color: lightcoral;
    }
</style>
