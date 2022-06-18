<template>
  <div class="post-box mb-5">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="row">
      <div class="col-sm-6 d-flex justify-content-start align-items-center">
        <span class="auther-name">{{ autherName }}</span>
      </div>
      <div class="col-sm-6 d-flex justify-content-end align-items-center">
        <span class="post-category">{{ category | uppercase }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCompon",
  props: ["views", "title", "date", "content", "autherName", "category"],
};
</script>

<style lang="scss" scoped>
.post-box {
  position: relative;
  padding: 20px;
  background-color: #9e1eee10;
  backdrop-filter: blur(3px);
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 0 10px #ddd;
  overflow: hidden;
  .post-views {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #0dcaf0;
    padding: 2px 8px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-title {
    color: #fff;
  }
  .post-date {
    display: block;
    margin-top: -10px;
    padding: 0 0 8px;
    color: #ccc;
    font-size: 14px;
  }
  .post-content {
    color: #fff;
    line-height: 1.5;
  }
  .auther-name,
  .post-category {
    padding: 6px 10px;
    background-color: #0dcaf0;
    color: #fff;
    border-radius: 4px;
  }
}
</style>
