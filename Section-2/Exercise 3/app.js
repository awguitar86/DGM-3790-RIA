new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function() {
                return this.value == 37 ? 'done' : 'not there yet';
            }
        },
        watch: {
            result: function() {
                let vin = this;
                setTimeout( function() {
                    vin.value = 0;
                    console.log('reset');
                }, 5000)
            }
        }
    });