<template>
  <div>
    <main class="main">
      <h1 class="post-title">{{ article.title }}</h1>
      <nuxt-content :document="article"></nuxt-content>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("posts", params.slug).fetch();

    return {
      article
    };
  }
};
</script>

<style>
.main {
  width: 80vw;
  margin: 0 auto;
}

.post-title {
  text-align: center;
  font-size: 45px;
  line-height: 1.4em;
  font-family: "Stylish";
}

.nuxt-content {
  font-size: 20px;
}

.nuxt-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
