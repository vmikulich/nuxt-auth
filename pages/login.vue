<template>
  <div>
    <h1 class="title">Login in</h1>
    <el-form
      label-position="top"
      :model="user"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Email">
        <el-input
          type="email" 
          v-model="$v.user.email.$model"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="$v.user.password.$model"
        >
        </el-input>
      </el-form-item>
      <p>
        If you do not have an account, go to 
        <NuxtLink
          to="/signup"
          tag="span"
          no-prefetch
        >
          <el-link type="primary">Sign up</el-link>
        </NuxtLink>
        page.
      </p>
     <el-form-item class="btn-form-container">
        <el-button
          type="primary"
          native-type="submit"
          :disabled="$v.$invalid"
        >
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

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
    ...mapActions({
      login: 'login'
    }),
    onSubmit () {
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      this.login(user).then(() => {
        this.$router.push('/')
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
.btn-form-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>