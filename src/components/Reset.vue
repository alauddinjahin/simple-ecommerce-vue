<template>

<div class="auth-wrapper">
  <div class="auth-inner">
  <form @submit.prevent="handleSubmit">
        <h3>Reset Password</h3>
        <div class="form-group">
            <label for="password">Password<span class="text-danger ml-1">*</span></label>
            <input type="password" v-model="password" name="password" id="password" class="form-control" placeholder="Enter your Name" />
        </div>

        <div class="form-group">
            <label for="confirmpassword">Confirm Password<span class="text-danger ml-1">*</span></label>
            <input type="password" v-model="confirmpassword" name="confirmpassword" id="confirmpassword" class="form-control" placeholder="Enter your Name"/>
        </div>

        <button class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</div>
</template>


<script>
import axios from 'axios';

export default {

  name: 'Reset',
  data(){
    return{
      password: "",
      confirmpassword: "",
    }
  },
  created(){
    console.log(this.$route.params.token); // for getting route params just use route not router
  },
  methods:{

    async handleSubmit()
    {

      try 
      {
        if(this.confirmpassword !== this.password)
        {
          alert('Password doesn\'t match with Confirm Password');
          return false;
        }

        const response = await axios.post('/reset',{
          password: this.password,
          token: this.$route.params.token,
        });

        console.log(response)
        this.$router.push('/login');

      } catch (error) 
      {
        console.log(error)
      }
    }
  }


}
</script>
