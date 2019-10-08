<template>
    <div class="alert alert-success text-center" key="answer">
        <h1>That's Correct!</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
    </div>
</template>
<style>

</style>
<script>

    export default{
        methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            }
        }
    }
</script>
