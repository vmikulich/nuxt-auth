<template>
  <div class="navbar-container">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <NuxtLink
          to="/"
          active-class="active"
          class="nav-link"
          no-prefetch
          exact
        >
          Home
        </NuxtLink>
      </el-menu-item>
      <el-menu-item index="2">
        <NuxtLink
          to="/about"
          active-class="active"
          class="nav-link"
          no-prefetch
        >
          About
        </NuxtLink>
      </el-menu-item>
    </el-menu>
    <el-button
      type="primary"
      @click.prevent="onLogout"
    >
      Logout
    </el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      hasToken: 'hasToken'
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    onLogout () {
      this.logout().then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EBEEF5;
  a {
    text-decoration: none;
  }
  .logout {
    color: #000;
    transition: hover .3s;
    &:hover {
      background-color: #DCDFE6;
    }
  }
}

</style>