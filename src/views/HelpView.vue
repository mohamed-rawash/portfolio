<template>
  <div class="help">
    <coming-soon />
  </div>
</template>

<script>
import ComingSoon from "@/components/global/ComingSoon";
export default {
  name: `help`,
  data: function () {
    return {
      pageName: "Help",
      pageDesc: "This is help page",
    };
  },
  components: {
    ComingSoon,
  },
};
</script>
<style lang="scss" scoped>
.help {
  min-height: calc(100vh - 60px);
}
</style>
