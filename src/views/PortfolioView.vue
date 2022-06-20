<template>
  <div class="portfolio">
    <div class="container">
      <main-title :title="flutter" />
      <div class="flutter-pro mb-5">
        <div class="row">
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
        </div>
      </div>
      <main-title :title="flutter" />
      <div class="flutter-pro">
        <div class="row">
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
          <div class="col-md-4">
            <project-box />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/global/MainTitle";
import ProjectBox from "@/components/portfolio/ProjectBox";
export default {
  name: "PortfolioPage",
  data: function () {
    return {
      flutter: "Flutter Projects",
    };
  },
  components: {
    MainTitle,
    ProjectBox,
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 80px 0;
  .flutter-pro {
    background-color: #eee;
    padding: 40px;
    border-radius: 40px;
  }
}
</style>
