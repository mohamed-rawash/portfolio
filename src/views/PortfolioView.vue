<template>
  <div class="portfolio">
    <div class="container">
      <main-title :title="flutter" />
      <div class="flutter-pro">
        <div class="row justify-content-center">
          <project-box
            v-for="project in flutterProjects"
            :key="project.id"
            :image="project.image"
            :name="project.name"
            :repo="project.repo"
            :preview="project.preview"
          />
        </div>
      </div>
      <main-title :title="front" />
      <div class="front-end-pro">
        <div class="row justify-content-center">
          <project-box
            v-for="project in frontProjects"
            :key="project.id"
            :image="project.image"
            :name="project.name"
            :repo="project.repo"
            :preview="project.preview"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/components/global/MainTitle";
import ProjectBox from "@/components/portfolio/ProjectBox";
import FlutterProjects from "../json/flutter_projects.json";
import FrontEndProjects from "../json/FrontEndProjects.json";
export default {
  name: "PortfolioPage",
  data: function () {
    return {
      flutter: "Flutter Projects",
      flutterProjects: FlutterProjects,
      front: "Front-End Projects",
      frontProjects: FrontEndProjects,
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
    margin-bottom: 100px;
    padding: 40px 40px 20px;
  }
}
</style>
