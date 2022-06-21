<template>
  <div class="home">
    <landing />
    <div class="resume-section">
      <div class="container">
        <main-title :title="resumesTitle" />
        <div class="row">
          <resume-component
            v-for="resume in resumes"
            :key="resume.id"
            :image="resume.image"
            :desc="resume.description"
            :link="resume.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Landing from "@/components/home/Landing";
import MainTitle from "@/components/global/MainTitle";
import ResumeComponent from "@/components/home/ResumeComponent";
import Resumes from "../json/resume.json";
export default {
  name: "HomePage",
  data: function () {
    console.log(Resumes[0].image);
    return {
      pageName: "Home",
      pageDesc: "This is home page",
      resumesTitle: "Check Resumes",
      resumes: Resumes,
    };
  },
  components: {
    Landing,
    MainTitle,
    ResumeComponent,
  },
};
</script>
<style lang="scss" scoped>
.resume-section {
  padding: 80px 0;
  .container {
  }
}
</style>
