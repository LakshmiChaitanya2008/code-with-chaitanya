<template>
  <main>
    <div class="blogs">
      <h2 class="recent-blogs-title">Recent Blog Posts</h2>

      <div class="blog" v-for="article in articles" :key="article.slug">
        <h2>{{ article.title }}</h2>
        <p>
          {{ article.description }}
        </p>
        <h4>
          <nuxt-link :to="`/blog/${article.slug}`"> Read More --></nuxt-link>
        </h4>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("posts", params.slug)
      .only(["title", "description", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");

:root {
  --primary-color: #00a672;
  --font-color: #cbd5c9;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: #1a202c;
  color: var(--font-color);
  border: 10px solid var(--primary-color);
  min-height: 100%;
  margin: 0;
  max-width: 100%;
  line-height: 1.5;
  box-sizing: border-box;
}

a {
  color: var(--font-color);
  text-decoration: none;
}

.blogs .recent-blogs-title {
  text-align: center;
  /* margin-top: 50px; */
}

.blog {
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
  margin: 0 auto;
  width: 75%;
  padding: 10px;
}
</style>
