<template>
  <div class="landing d-flex justify-content-center align-items-center">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8 info">
          <p>
            Hello everyone, I have a Bachelor's degree in Computer Science and
            have skills in many technologies such as mobile application
            development, machine learning and web design.
          </p>
          <h2 class="text-uppercase mb-0 fw-light">Mohamed Rawash</h2>
          <p class="text-white-50">I'm developer, i grow to learn</p>
          <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="social linked-in me-3 p-2" data-tooltip="Linkedin">
              <a
                href="https://www.linkedin.com/in/mohamed-rawash-61b30a217/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </div>
            <div class="social twitter me-3" data-tooltip="Twitter">
              <a href="https://twitter.com/rawashmohamed1" target="_blank">
                <i class="fa-brands fa-twitter fa-2x"></i>
              </a>
            </div>
            <div class="social github me-3 p-2" data-tooltip="Github">
              <a href="https://github.com/mohamed-rawash" target="_blank">
                <i class="fa-brands fa-github-square fa-2x"></i>
              </a>
            </div>
            <div class="social codepen me-3" data-tooltip="Codepen">
              <a href="https://codepen.io/mohamed-rawash" target="_blank">
                <i class="fa-brands fa-codepen fa-2x"></i>
              </a>
            </div>
            <div class="social instagram me-3" data-tooltip="Instagram">
              <a
                href="https://www.instagram.com/_mohamed_rawash/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-none d-lg-block">
          <div class="image">
            <img
              src="../../assets/my_photo.jpg"
              alt="This is the app owner photo"
            />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
};
</script>
<style lang="scss" scoped>
.landing {
  position: relative;
  min-height: calc(100vh - 59px);
  background-color: azure;
  color: #fff;
  background-image: url("../../assets/landing.jpg");
  background-size: cover;
  .container {
    padding: 60px 20px;
    background-color: #ffffff10;
    backdrop-filter: blur(3px);
    border-radius: 16px;
    .info {
      p:first-of-type {
        font-size: 22px;
        color: #fff;
        line-height: 2;
        letter-spacing: 1px;
        text-align: start;
      }
      @media (max-width: 678px) {
        p:first-of-type {
          text-align: center;
        }
      }
      h2 {
        font-size: 1rem;
        color: #0dcaf0;
        letter-spacing: 2px;
        text-align: start;
      }
      p:last-of-type {
        text-align: start;
        font-size: 12px;
      }
      .social {
        position: relative;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #fff;
        color: #037d93;
        transition: 0.3s;
        cursor: pointer;
        &::before,
        &::after {
          display: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: 0.3s;
        }
        &::after {
          content: "";
          bottom: -20px;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #000 transparent;
          z-index: 5;
        }
        &::before {
          content: attr(data-tooltip);
          bottom: -47px;
          background-color: #000;
          padding: 2px 8px;
          border-radius: 6px;
          color: #000;
        }
        a {
          all: unset;
        }
      }
      .social:hover {
        color: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        transform: scale(1.2);
        &::before,
        &::after {
          display: inline;
          opacity: 1;
          color: #fff;
        }
      }
      .linked-in:hover {
        background-color: #0077b5;
        &::before {
          background-color: #0077b5;
        }
        &::after {
          border-bottom-color: #0077b5;
        }
      }
      .twitter:hover {
        background-color: #1da1f2;
        &::before {
          background-color: #1da1f2;
        }
        &::after {
          border-bottom-color: #1da1f2;
        }
      }
      .github:hover {
        background-color: #131417;
        &::before {
          background-color: #131417;
        }
        &::after {
          border-bottom-color: #131417;
        }
      }
      .codepen:hover {
        background-color: #131417;
        &::before {
          background-color: #131417;
        }
        &::after {
          border-bottom-color: #131417;
        }
      }
      .instagram:hover {
        background: linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
        &::before {
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
        }
        &::after {
          border-bottom-color: #dc2743;
        }
      }
    }
    .image {
      position: relative;
      width: fit-content;
      height: fit-content;
      margin: auto;
      border-radius: 8px;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 50%;
        background-color: #0dcaf0;
        backdrop-filter: blur(30px);
        z-index: -1;
      }
      &::before {
        top: -10px;
        left: -10px;
      }
      &::after {
        bottom: -10px;
        right: -10px;
      }
      img {
        width: 300px;
        transition: transform 0.3s;
      }
      &:hover span {
        animation: flashing 0.7s;
      }
      &::before {
        animation: moving-top 2s ease-in-out;
      }
      &::after {
        animation: moving-bottom 2s ease-in-out;
      }
    }
  }
}
span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(13, 202, 240, 0.3);
  width: 0;
  height: 0;
  opacity: 0;
  z-index: 16;
}
@keyframes flashing {
  0%,
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
}
@keyframes moving-top {
  from {
    top: 50%;
    left: 50%;
  }
  to {
    top: -10px;
    left: -10px;
  }
}
@keyframes moving-bottom {
  from {
    bottom: 50%;
    right: 50%;
  }
  to {
    bottom: -10px;
    right: -10px;
  }
}
</style>
