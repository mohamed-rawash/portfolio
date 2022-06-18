<template>
  <div class="home">
    <landing />
  </div>
</template>

<script>
import Landing from "@/components/home/Landing";
export default {
  name: "HomePage",
  data: function () {
    return {
      pageName: "Home",
      pageDesc: "This is home page",
    };
  },
  components: {
    Landing,
  },
};
</script>
<style lang="scss" scoped></style>
