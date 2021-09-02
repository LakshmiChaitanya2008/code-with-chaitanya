<template>
  <section>
    <div class="home">
      <h1><nuxt-link to="/">Learn with Chaitanya</nuxt-link></h1>
    </div>
    <Nuxt />
  </section>
</template>

<style scoped>
.home h1 {
  text-align: center;
  font-family: "Stylish", cursive;
  font-size: 40px;
}

.home h1 a:hover {
  color: var(--primary-color);
}
</style>
