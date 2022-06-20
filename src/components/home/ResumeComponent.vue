<template>
  <div class="col-sm-4">
    <div
      class="resume"
      data-info="tap to download resume"
      data-resumeName="Flutter Resume"
    >
      <img src="../../assets/front-end.png" alt="Flutter Resume" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeComponent",
};
</script>

<style lang="scss" scoped>
.resume {
  position: relative;
  margin: 0 auto 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  overflow: hidden;
  img {
    width: 100%;
    padding: 5px;
  }
  &::before,
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
  &::before {
    content: attr(data-info);
    top: -50px;
    width: calc(100% - 10px);
    background-color: #1da1f255;
    color: #fff;
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
    border-radius-topleft: 4px;
    border-radius-topright: 4px;
    z-index: 8;
    transition: 0.3s ease-in 0.3s;
  }
  &:hover::before {
    top: 5px;
    height: calc(100% - 10px);
  }
  &:hover::after {
    bottom: 0;
    height: 40px;
  }
}
</style>
