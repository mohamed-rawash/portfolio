<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="my-logo">
        <i class="fa-solid fa-meteor fa-2x"></i>
        <h1 class="navbar-brandlogo">Rawash</h1>
      </div>
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main"
        aria-controls="main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <label for="checkbox" class="burger">
          <input type="checkbox" id="checkbox" />
          <span class="line line-main"></span>
          <span class="line line-split"></span>
        </label>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <router-link to="/" tag="li" class="nav-item" exact>
            <a href="" class="nav-link p-2 p-lg-3">
              <div>
                <i class="fa-solid fa-house-crack"></i>
                <span class="d-sm-inline-block ms-1">Home</span>
              </div>
            </a>
          </router-link>
          <router-link to="/portfolio" class="nav-item" tag="li">
            <a href="" class="nav-link p-2 p-lg-3">
              <div>
                <i class="fa-solid fa-briefcase"></i>
                <span class="d-sm-inline-block ms-1">Portfolio</span>
              </div>
            </a>
          </router-link>
          <router-link to="/blog" class="nav-item" tag="li">
            <a href="" class="nav-link p-2 p-lg-3">
              <div>
                <i class="fa-solid fa-blog"></i>
                <span class="d-sm-inline-block ms-1">Blogs</span>
              </div>
            </a>
          </router-link>
          <router-link to="/about" class="nav-item" tag="li">
            <a href="" class="nav-link p-2 p-lg-3">
              <div>
                <i class="fa-solid fa-address-card"></i>
                <span class="d-sm-inline-block ms-1">About</span>
              </div>
            </a>
          </router-link>
          <router-link to="/help" class="nav-item" tag="li" replace>
            <a href="" class="nav-link p-2 p-lg-3">
              <div>
                <i class="fa-solid fa-hands-holding-child"></i>
                <span class="d-sm-inline-block ms-1">Help</span>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: `AppHeader`,
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #1a1a1a;
  border-bottom: 1px solid #0dcaf0;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 56px;
  .my-logo {
    height: 100%;
    color: #0dcaf0;
    i {
      color: #0dcaf0;
    }
    h1 {
      display: inline;
      font-size: 2rem;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
  }
  a {
    color: white;
    cursor: pointer;
  }
  a:hover,
  li.router-link-active a {
    color: #0dcaf0;
  }
  button {
    all: unset;
  }
  #checkbox {
    display: none;
  }
  .burger {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    cursor: pointer;
    .line {
      position: absolute;
      width: 20px;
    }
    .line-main::before,
    .line-main::after,
    .line-split::before,
    .line-split::after {
      content: "";
      position: absolute;
      width: inherit;
      height: 2px;
      background-color: #0dcaf0;
      transition: transform 0.5s;
    }
    .line-main::before {
      transform: translateY(-7px);
    }
    .line-main::after {
      transform: translateY(7px);
    }
    .line-split::before,
    .line-split::after {
      width: 10px;
      transition: transform 0.5s, opacity 0.5s;
    }
    .line-split::after {
      transform: translateX(10px);
    }
    #checkbox:checked ~ .line-main::before {
      transform: rotate(45deg);
    }
    #checkbox:checked ~ .line-main::after {
      transform: rotate(-45deg);
    }
    #checkbox:checked ~ .line-split::before {
      transform: translateX(-10px);
      opacity: 0;
    }
    #checkbox:checked ~ .line-split::after {
      transform: translateX(20px);
      opacity: 0;
    }
  }
  @media (min-width: 991px) {
    .burger {
      display: none;
    }
  }
}
</style>
