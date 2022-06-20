<template>
  <div class="project-box mb-4">
    <img
      src="../../assets/ml-photo.png"
      alt="This Is Project photo for preview"
      class="col-sm-4"
    />
    <span class="overlay"></span>
    <div class="links text-center">
      <a href="#" class="visit-repo">Check Github</a>
      <a href="#" class="preview">Preview</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBox",
};
</script>

<style lang="scss" scoped>
.project-box {
  position: relative;
  width: 100%;
  cursor: pointer;
  perspective: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  img {
    width: 100%;
    border: 4px solid #fff;
  }
  &::before,
  &::after {
    position: absolute;
    content: "";
    background-color: #fff;
    z-index: 2;
  }
  &::before {
    width: 4px;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -2px;
  }
  &::after {
    width: 100%;
    height: 4px;
    left: 0;
    top: 50%;
    margin-top: -2px;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.53);
    z-index: 4;
  }
  &:hover .overlay {
    height: 100%;
  }
  .links {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 6;
    .visit-repo,
    .preview {
      display: inline-block;
      width: fit-content;
      padding: 6px 12px;
      margin: 0 8px;
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #fff;
      border: 2px solid #fff;
      background-color: #0dcaf0;
      border-radius: 8px;
      cursor: pointer;
      perspective: 1500px;
      transform: scale(0);
      transform-origin: center;
      transition: 0.3s ease-in;
      &:hover {
        box-shadow: 0 0 5px #0dcaf0, 0 0 25px #0dcaf0, 0 0 50px #0dcaf0,
          0 0 200px #0dcaf0;
      }
    }
  }
  &:hover .visit-repo,
  &:hover .preview {
    transform: scale(1);
    transform-origin: center;
  }
}
</style>
