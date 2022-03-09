<template>
  <div :class="['root', 'state-' + state, started && 'started']">
    <img src="../assets/gen_closed.png">
    <video
      v-if="state === 1"
      autoplay
      src="../assets/gen_what_current_transition0061-0088.mp4"
      @play="started = true"
    ></video>
    <div class="glow">
      <h1 class="what">Was ist ein<br><span>Generator?</span></h1>
      <h1 class="current">Wechsel-<br><span>strom</span></h1>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
  props: {
    state: Number
  },

  setup (props) {
    const started = ref(false)

    watch(() => props.state, val => {
      if (val === 0) started.value = false
    })

    return {
      started
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:math';

.slide {
  &-enter-active {
    transition: opacity 1.3s, transform 1s;

    .what {
      transition: 1s .3s cubic-bezier(0.19, 1, 0.22, 1);
      clip-path: inset(0);
    }
  }
  &-enter-from {
    transform: scale(1.2);
    opacity: 0;

    .what {
      transform:
        translate(-50%, -50%)
        rotateX(-16.3972deg)rotateY(37.5975deg)
        translate3d(268.263px, 115.834px, -213.612px)
        translate3d(-450px, -260px, -100px)
        translateX(-100%);

      clip-path: inset(0 0 0 100%);
    }
  }
}

.what {
  transform:
    translate(-50%, -50%)
    rotateX(-16.3972deg)rotateY(37.5975deg)
    translate3d(268.263px, 115.834px, -213.612px)
    translate3d(-450px, -260px, -100px);
}

.current {
  transform:
    translate(-50%, -50%)
    rotateX(-16.3972deg)rotateY(35.5975deg)
    translate3d(268.263px, 115.834px, -213.612px)
    rotateY(-90deg)
    translate3d(290px, -140px, -600px);
}

.started {
  h1 {
    z-index: 1;
    transition: #{math.div(27, 24)}s cubic-bezier(0.5, 0, 0.1, 1);
  }

  .what {
    transform:
      translate(-50%, -50%)
      rotateX(-2.3969deg)rotateY(69.3234deg)
      translate3d(130.788px, 26.6831px, -330.393px)
      scale(math.div(8.2, 5.5))
      translate3d(-450px, -260px, -100px);

    opacity: 0.1;
  }

  .current {
    transform:
      translate(-50%, -50%)
      rotateX(-2.3969deg)rotateY(69.3234deg)
      translate3d(130.788px, 26.6831px, -330.393px)
      rotateY(-90deg)
      scale(math.div(8.2, 5.5))
      translate3d(290px, -140px, -600px);
  }
}

video, img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

h1 {
  font-family: Raleway;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  span {
    font-weight: 200;
    letter-spacing: -0.05em;
  }
}

.what {
  position: absolute;
  left: 50%;
  top: 50%;

  font-size: 100px;
  line-height: 84.9%;
}

.current {
  position: absolute;
  left: 50%;
  top: 50%;

  font-size: 66px;
  line-height: 84.9%;

  text-align: right;
}

.glow {
  position: absolute;
  inset: 0;
  filter: drop-shadow(#fff6 0 0 20px);
}
</style>
