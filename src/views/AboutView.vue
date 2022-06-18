<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data: function () {
    return {
      pageName: "About",
      pageDesc: "This is about page",
    };
  },
};
</script>
<style lang="scss" scoped>
.about {
  min-height: calc(100vh - 82px);
}
</style>
