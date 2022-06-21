<template>
  <div class="col-sm-4">
    <div class="resume" :data-resumeName="desc">
      <img :src="image" alt="Flutter Resume" />
      <a download :href="link" target="_blank">tap to download</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeComponent",
  props: ["image", "desc", "link"],
};
</script>

<style lang="scss" scoped>
.resume {
  position: relative;
  margin: 0 auto 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 300px;
    padding: 5px;
  }
  a,
  &::after {
    position: absolute;
    left: 5px;
    height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  a {
    top: -50px;
    width: calc(100% - 10px);
    background-color: #1da1f255;
    color: #fff;
    text-decoration: none;
    z-index: 6;
    transition: 0.3s ease-in;
  }
  &::after {
    content: attr(data-resumeName);
    bottom: -60px;
    width: 100%;
    height: 0;
    background-color: #fff;
    color: #0dcaf0;
    z-index: 8;
    transition: 0.3s ease-in 0.3s;
  }
  &:hover a {
    top: 5px;
    height: calc(100% - 10px);
  }
  &:hover::after {
    bottom: 0;
    height: 40px;
  }
}
</style>
