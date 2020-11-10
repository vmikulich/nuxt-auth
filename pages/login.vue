<template>
  <!-- <div class="form-container">
    <div v-if="$route.query.message" class="alert alert-danger mb-3">
      Need login first
    </div>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        >
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> -->
  <el-form
    label-position="top"
    :model="user"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Email">
      <el-input
        type="email" 
        v-model="user.email"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input
        type="password"
        v-model="user.password"
      >
      </el-input>
    </el-form-item>
    <p>
      If you do not an account, go to 
      <NuxtLink
        to="/signup"
        tag="span"
        no-prefetch
      >
        <el-link type="primary">Sign up</el-link>
      </NuxtLink>
      page.
    </p>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
      >
      Submit
    </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  layout: 'empty',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('login', user).then(() => {
        this.$router.push('/')
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>