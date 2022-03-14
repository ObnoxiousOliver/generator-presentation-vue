<template>
  <div class="root">
    <img src="../assets/turb_open.png">
    <div class="glow">
      <h1>
        DIE TURBINE<br>
      </h1>
      <transition name="steamturbine">
        <h2 v-show="state === 1">
          DAMPFTURBINE
        </h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: Number
  }
}
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.slide {
  &-enter-active {
    transition: 2s,
      opacity 1s .2s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1s .2s cubic-bezier(0.19, 1, 0.22, 1);;

    h1 {
      transition: 1.2s .2s cubic-bezier(0.23, 1, 0.320, 1);
      clip-path: inset(0);
    }
  }
  &-enter-from {
    transform: scale(0.9);
    opacity: 0;

    h1 {
      transform:
        rotateX(90deg - 73.6028deg)rotateY(52.4025deg - 90deg)
        scale(1.3)
        translateY(100%) !important;
      clip-path: inset(0 0 100%);
    }
  }

  &-leave-active {
    transition: 1s;
  }
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}

h1 {
  position: absolute;
  left: 50px;
  top: 100px;

  font-family: Raleway;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;

  line-height: 1;

  font-size: 70px;
  letter-spacing: 0.05em;

  transform: rotateX(90deg - 73.6028deg)rotateY(52.4025deg - 90deg)scale(1.3);
}
h2 {
  position: absolute;
  left: 50px;
  top: 190px;

  display: block;
  font-family: Raleway;
  color: #fff;
  text-transform: uppercase;

  font-weight: 600;
  letter-spacing: 0.1em;
  font-size: 40px;

  transform: rotateX(90deg - 73.6028deg)rotateY(52.4025deg - 90deg)scale(1.3);

  &.steamturbine {
    &-enter-active {
      transition: .8s cubic-bezier(0.23, 1, 0.320, 1);
      clip-path: inset(0);
    }
    &-enter-from {
      transform: rotateX(90deg - 73.6028deg)rotateY(52.4025deg - 90deg)scale(1.3)translateY(-100%);
      clip-path: inset(100% 0 0);
    }
  }
}
</style>
