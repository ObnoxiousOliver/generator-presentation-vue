<template>
  <div>
    <!-- <img src="../assets/gen_inside_render4.png" /> -->
    <video loop autoplay src="../assets/gen_title_idle0001-0060.mp4"></video>
    <div class="glow">
      <h1>Generator</h1>
      <h2>Oliver & Mohamed</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  color: #fff;
  font-family: 'Raleway', sans-serif;
}

img, video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.slide {
  &-enter-active {
    transition: 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    transition-delay: .5s;

    h1 {
      transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
      transition-delay: .6s;
      clip-path: inset(0);
    }
    h2 {
      transition: 1s cubic-bezier(0.19, 1, 0.22, 1);
      transition-delay: .8s;
      clip-path: inset(0);
    }
  }
  &-enter-from {
    opacity: 0;
    transform: scale(1.2);

    h1 {
      transform: translateY(100%);
      clip-path: inset(0 0 100% 0);
    }
    h2 {
      transform: translateY(-100%);
      clip-path: inset(100% 0 0 0);
    }
  }
  &-leave-active {
    transition: .2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }
  &-leave-to {
    transform: scale(1.2);
    opacity: 0;
  }
}

h1 {
  position: absolute;
  left: 49px;
  top: 518px;
  font-size: 125px;
  font-weight: 200;
  font-size: 117px;
  line-height: 137px;
  letter-spacing: 0.215em;
  text-transform: uppercase;
}
h2 {
  position: absolute;
  left: 57px;
  top: 649px;

  font-weight: normal;
  letter-spacing: 0.545em;
  text-transform: uppercase;
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}
</style>
