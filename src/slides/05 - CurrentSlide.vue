<template>
  <div class="root">
    <video autoplay src="../assets/gen_what_current_transition0061-0088.mp4"></video>
    <h1>Wechsel-<br>Strom</h1>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';

video, img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.slide {
  &-enter-active {
    transition: 1.1s;

    h1 {
      z-index: 1;
      transition: 1.05s .05s cubic-bezier(0.46, 0, 0.03, 1);
    }
  }

  &-enter-from {
    h1 {
      transform:
        translate(-50%, -50%)
        rotateX(-16.3972deg)rotateY(37.5975deg - 90deg)
        translate(268.263px, 115.834px)translateZ(-213.612px)scale(math.div(5.5, 8.2))
        translate(-50px, -180px)translateZ(-600px);
    }
  }
}

h1 {
  position: absolute;
  left: 50%;
  top: 50%;

  font-family: Raleway;
  font-style: normal;
  font-weight: 200;
  font-size: 86px;
  line-height: 84.9%;

  text-align: right;
  letter-spacing: -0.05em;
  text-transform: uppercase;

  transform:
    translate(-50%, -50%)
    rotateX(-2.3969deg)rotateY(69.3234deg - 90deg)
    translate(130.788px, 26.6831px)translateZ(-330.393px)
    translate(-50px, -180px)translateZ(-600px);

  color: #FFFFFF;
}
</style>
