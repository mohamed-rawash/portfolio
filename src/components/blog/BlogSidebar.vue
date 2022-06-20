<template>
  <div class="aside">
    <p>Testing Blog Sidebar</p>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
};
</script>

<style lang="scss" scoped>
.aside {
  display: block;
  position: fixed;
  min-height: 80%;
  width: 350px;
  right: 80px;
  top: 126px;
  background-color: aquamarine;
}
@media (max-width: 1200px) {
  .aside {
    display: none;
  }
}
</style>
