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
      .sortBy("createdAt", "desc")
      .only(["title", "description", "slug", "createdAt"])
      .fetch();

    return { articles };
  }
};
</script>

<style></style>
