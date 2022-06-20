<template lang="html">
  <div class="blog">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-8 col-xxl-8">
          <main-title :title="mainTitle" />
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
        <div class="col-md-0 col-lg-0 col-xl-4">
          <div class="sidebar">
            <blog-sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/global/MainTitle";
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
      mainTitle: "Blogs",
    };
  },
  components: {
    BlogPosts,
    BlogSidebar,
    MainTitle,
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
