<template>
  <div>
    <h1 class="title">Sign up</h1>
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
      <el-form-item label="Password">
        <el-input
          type="password"
          v-model="$v.user.acceptPassword.$model"
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
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

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
    ...mapActions({
      signup: 'signup'
    }),
    onSubmit () {
      const user = {
        email: this.user.email,
        password: this.user.password
      }
      this.signup(user)
        .then(() => this.$router.push('/'))
        .catch(e => {
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