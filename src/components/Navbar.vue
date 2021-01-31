<template>
  <nav class="navbar navbar-expand navbar-light bg-primary fixed-top">
      <div class="container">
          <router-link to="/" class="navbar-brand text-light">Home</router-link>
          <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item">
                        <router-link  class="nav-link text-light" to="/login" >Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link  class="nav-link text-light" to="/register" >Sign Up</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link  class="nav-link text-light" to="/shop" >Shop <i class="badge badge-danger bag">0</i></router-link>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto" v-if="user">
                    <li class="nav-item">
                        <router-link  class="nav-link text-light" to="/shop" >Shop</router-link>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link text-light" href="javascript:void(0)" @click="handleLogout" >Logout</a>
                    </li>
                </ul>
          </div>
          <div class="logo float-right px-4" v-if="user">
              <router-link  class="nav-link text-light" to="/profile" >
                <img src="../assets/user.jpg" type="button" class="rounded-circle" style="width:40px;" alt="Profile">
              </router-link>
          </div>
      </div>
  </nav>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: 'Navbar',
//   props:['user'], // for getting component directive
  methods:{
    handleLogout()
    {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_ref');
        this.$store.dispatch('user',null);
        this.$router.push('/login');
    }
  },
  computed:{
      ...mapGetters(['user']) // if you use vuex you don't need to handle props
  }
}
</script>
