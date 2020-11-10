<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nuxt project</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NuxtLink
            to="/"
            active-class="active"
            class="nav-link"
            no-prefetch
            exact
          >
            Home
          </NuxtLink>
        </li>
        <li v-if="!hasToken" class="nav-item">
          <NuxtLink
            to="/login"
            active-class="active"
            class="nav-link"
            no-prefetch
          >
            Login
          </NuxtLink>
        </li>
        <li v-else class="nav-item">
          <a
            href="#"
            class="nav-link"
            @click.prevent="logout"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    hasToken () {
      return this.$store.getters.hasToken
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => this.$router.push('/login'))
    }
  }
}
</script>