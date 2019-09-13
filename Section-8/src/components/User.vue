<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{name}}</p>
        <p>Age is {{age}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <appUserDetail
                    :name="name"
                    @nameWasReset="name = $event"
                    :userAge="age"
                >
                </appUserDetail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <appUserEdit
                    :userAge="age"
                    @ageWasEdited="age = $event"
                >
                </appUserEdit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Max',
                age: 27
            }
        },
        methods: {
            changeName(){
                this.name = 'Anna'
            },
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
