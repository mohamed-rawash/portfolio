<template>
  <div class="col-md-4">
    <div class="project-box">
      <img :src="image" alt="This Is Project photo for preview" />
      <span class="overlay"></span>
      <div class="links text-center">
        <a download :href="repo" target="_blank" class="visit-repo"
          >Check Github</a
        >
        <a :href="preview" target="_blank" class="preview" v-if="preview"
          >Preview</a
        >
      </div>
      <span class="project-name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBox",
  props: ["image", "name", "repo", "preview"],
};
</script>

<style lang="scss" scoped>
.project-box {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  perspective: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  img {
    width: 100%;
    height: 400px;
    z-index: -1;
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
  .project-name {
    display: block;
    position: absolute;
    top: 0;
    left: -100%;
    height: fit-content;
    width: 0;
    padding: 8px 0;
    background: #0dcaf0;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    z-index: 10;
    transition: 0.4s;
  }
  &:hover .project-name {
    left: 0;
    width: 100%;
  }
}
</style>
