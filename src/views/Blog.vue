<template>
  <div class="blog">
    <h1 class="text-primary">{{ pageName }}</h1>
    <p class="text-primary">{{ pageDesc }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <blog-posts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :autherName="post.auther"
              :category="post.category"
            />
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
import Posts from "../json/Blogs.json";

export default {
  name: "PortfolioPage",
  data: function () {
    return {
      pageName: "Blog",
      pageDesc: "This is blog page",
      posts: Posts,
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
  padding-top: 40px;
  h1 {
    margin: 0 0 10px;
  }
}
</style>
