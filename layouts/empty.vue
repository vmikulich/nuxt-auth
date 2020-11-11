<template>
  <div class="empty-layout">
    <Nuxt />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.empty-layout {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    min-width: 330px;
  }
  p {
    margin-bottom: 22px;
    text-align: center;
  }
}
</style>
