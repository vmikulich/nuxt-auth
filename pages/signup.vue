<template>
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
    <el-form-item label="Password">
      <el-input
        type="password"
        v-model="user.acceptPassword"
      >
      </el-input>
    </el-form-item>
    <p>
      Go to 
      <NuxtLink
        to="/login"
        tag="span"
        no-prefetch
      >
        <el-link type="primary">Log in</el-link>
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
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
// import isEmpty from 'lodash/isEmpty'

export default {
  layout: 'empty',
  data () {
    return {
      user: {
        email: '',
        password: '',
        acceptPassword: ''
      }
    }
  },
  validations: {
    user: {
      password: {
        required,
        minLength: minLength(6),
        // passwordValidation: (value) => !isEmpty((value || '').match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/))
      },
      email: {
        required,
        email
      },
      acceptPassword: {
        acceptPassword: sameAs('password')
      }
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('signup', user)
        .then(() => this.$router.push('/'))
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

