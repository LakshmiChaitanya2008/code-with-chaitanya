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
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        },
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description
        }
      ]
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
