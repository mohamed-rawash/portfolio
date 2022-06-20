<template>
  <div class="home">
    <landing />
    <div class="resume-section">
      <div class="container">
        <main-title :title="resumesTitle" />
        <div class="row">
          <resume-component />
          <resume-component />
          <resume-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Landing from "@/components/home/Landing";
import MainTitle from "@/components/global/MainTitle";
import ResumeComponent from "@/components/home/ResumeComponent";
export default {
  name: "HomePage",
  data: function () {
    return {
      pageName: "Home",
      pageDesc: "This is home page",
      resumesTitle: "Check Resumes",
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
