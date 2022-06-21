<template>
  <div class="about">
    <coming-soon />
  </div>
</template>

<script>
import ComingSoon from "@/components/global/ComingSoon";
export default {
  name: "AboutPage",
  components: {
    ComingSoon,
  },
};
</script>
<style lang="scss" scoped>
.about {
  min-height: calc(100vh - 60px);
}
</style>
