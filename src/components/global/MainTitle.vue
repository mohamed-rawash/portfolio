<template>
  <div class="main-title">{{ title }}</div>
</template>

<script>
export default {
  name: "MainTitle",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.main-title {
  position: relative;
  width: fit-content;
  margin: 0 auto 60px;
  padding: 6px 30px;
  border: 2px solid #0dcaf0;
  border-radius: 6px;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #0dcaf0;
  transition: 0.3s ease-in;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    color: #fff;
    border-color: #fff;
    background-color: #0dcaf0;
    box-shadow: 0 0 5px #0dcaf0, 0 0 25px #0dcaf0, 0 0 50px #0dcaf0,
      0 0 200px #0dcaf0;
  }
  &::before {
    content: "";
    position: absolute;
    height: calc(100% + 20px);
    width: 100%;
    top: 0;
    right: 0;
    background-color: #0dcaf0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.15s ease-in;
    z-index: -1;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
