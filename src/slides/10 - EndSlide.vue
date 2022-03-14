<template>
  <div class="root">
    <video autoplay src="../assets/gen_turb_end_transition0370-0400.mp4"></video>
    <div class="glow">
      <h1>
        <i>Menschen schießen, nicht weil sie es wollen. Sie schießen, weil sie es müssen.</i> - Aminollah Haidari
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.slide {
  &-enter-active {
    transition: 2s, opacity .3s;

    h1 {
      transition: 1s 1s;
    }
  }
  &-enter-from {
    opacity: 0;

    h1 {
      opacity: 0;
    }
  }
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}

h1 {
  position: absolute;
  left: 456px;
  top: 620px;
  width: 800px;

  font-family: Raleway;
  font-weight: 500;
  color: #ffffff13;

  font-size: 25px;
  letter-spacing: 0.05em;

  // transform: rotateX(90deg - 82.4033deg)rotateY(45.6103deg - 90deg);
}
</style>
