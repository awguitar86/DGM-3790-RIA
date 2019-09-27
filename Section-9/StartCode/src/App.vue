<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComp = 'Quote'">Quote</button>
                <button @click="selectedComp = 'Author'">Author</button>
                <button @click="selectedComp = 'New'">New</button>
                <hr>
                <p>{{selectedComp}}</p>
                <keep-alive>
                    <component :is="selectedComp">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
               <!-- <Quote>
                   <h2 slot="title">{{quoteTitle}}</h2>
                   <p>A Wonderful Quote</p>
               </Quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
    export default {
        data: function() {
            return {
                quoteTitle: 'The Quote',
                selectedComp: 'Quote'
            }
        },
        components: {
            Quote,
            Author,
            New
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
