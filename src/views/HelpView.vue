<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDesc }}</p>
  </div>
</template>

<script>
export default {
  name: `help`,
  data: function () {
    return {
      pageName: "Help",
      pageDesc: "This is help page",
    };
  },
};
</script>
<style lang="scss" scoped></style>
