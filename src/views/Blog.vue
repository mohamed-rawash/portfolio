<template>
  <div class="blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <blog-posts />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <blog-sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/blog/PostsComponents.vue";
import BlogSidebar from "@/components/blog/BlogSidebar";
export default {
  name: "PortfolioPage",
  data: function () {
    return {
      pageName: "Blog",
      pageDesc: "This is blog page",
    };
  },
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
<style lang="scss" scoped>
.blog {
  min-height: calc(100vh - 64px);
  background-color: #1c1c1c;
}
</style>
