<template>
  <div class="post-box">
    <span class="post-views">12</span>
    <h3 class="post-title">Post Title</h3>
    <span class="post-date">25-10-2022</span>
    <p class="post-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident
      explicabo a nemo veniam
    </p>
    <div class="row">
      <div class="col-sm-6 d-flex justify-content-start align-items-center">
        <span class="auther-name">Mohamed Rawash</span>
      </div>
      <div class="col-sm-6 d-flex justify-content-end align-items-center">
        <span class="post-category">Categories</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCompon",
};
</script>

<style lang="scss" scoped>
.post-box {
  position: relative;
  padding: 20px;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 0 10px #ddd;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #42b983;
    border-radius: 4px;
    padding: 1px 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }
  .post-title {
    color: #777;
  }
  .post-date {
    display: block;
    margin-top: -10px;
    padding: 0 0 8px;
    color: #ccc;
    font-size: 14px;
  }
  .post-content {
    color: #555;
    line-height: 1.5;
  }
  .auther-name,
  .post-category {
    padding: 6px 10px;
    background-color: #607d88;
    color: #42b983;
    border-radius: 4px;
  }
}
</style>
