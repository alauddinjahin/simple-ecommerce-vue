<template>
  <div id="app">

    <Navbar />
    <!-- <Navbar :user="user"/> -->
    <div>
          <router-view  />
      <!-- <router-view :user="user" /> -->
    </div>
    
  </div>

</template>



<script>

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/vue-toast-notification/dist/theme-sugar.css';
import "../node_modules/bootstrap/dist/js/bootstrap"
import "popper.js"
import Navbar from "./components/Navbar"
import axios from "axios"

export default {
  name: 'App',
  components:{
    Navbar,
  },
  async created(){

    const res = await axios.get('/api/user');
    this.user = res.data.user;
    this.$store.dispatch('user',this.user);

    let bag   = document.querySelector('.bag');
    let items = localStorage.getItem('products');
    items != undefined ? bag.innerText=items : 0;

    // console.log(res )
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

*{
  box-sizing: border-box;
}

body{
  /* background: #1C8EF9 !important; */
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira Sans','sans-serif';
}

h1,h2,h3,h4,h5,h6,label,span{
  font-weight: 500;
  font-family: 'Fira Sans','sans-serif';
}

body,html,.App, #app, .auth-wrapper{
  width: 100%;
  height: 100%;
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}


.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
  margin-top: 200px;
}


.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}


.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}


.custom-control-label{
  font-weight: 400;
}

.forget-password,
.forget-password a{
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}


.forget-password a{
  color: #167bff;
}







</style>
