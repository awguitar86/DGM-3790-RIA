new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("DANGER! DANGER!");
            },
            storeValue: function(e) {
                this.value = e.target.value;
            }
        }
    });