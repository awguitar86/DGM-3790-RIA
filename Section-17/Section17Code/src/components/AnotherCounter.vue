<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button> <!--pass by argument here-->
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: types.COUNTER_DECREMENT_ASYNC
            })
            // increment(by) { // mapActions is just doing this.
            //     this.$store.dispatch('increment', by); // could use a parameter to tell it how much to increment by.
            // }
        }
    }
</script>