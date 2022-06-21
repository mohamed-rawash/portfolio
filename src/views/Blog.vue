<template lang="html">
  <div class="blog">
    <coming-soon />
  </div>
</template>

<script>
import ComingSoon from "@/components/global/ComingSoon";
export default {
  name: "PortfolioPage",
  components: {
    ComingSoon,
  },
};
</script>
<style lang="scss" scoped>
.blog {
  min-height: calc(100vh - 60px);
}
</style>
