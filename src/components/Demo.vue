<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <h2 id="demo" @click="changeColor">Testing Jquery</h2>
                <Modal/>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import Modal from "./Modal"

export default {
    name:"Demo",
    components:{
        Modal
    },
    methods:{
        changeColor(){

            let selector = $('#demo');
            selector.toggleClass('text-danger');
            let text = selector.hasClass('text-danger') ? 'Hurrah! Jquery is Working ....' : "Testing Jquery";
            selector.text(text);

            $('#modalid').modal('show');

        }
    }
}
</script>