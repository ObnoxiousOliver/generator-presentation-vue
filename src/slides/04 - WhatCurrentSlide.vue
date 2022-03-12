<template>
  <div :class="['root', 'state-' + state, started1 && 'started-1', started2 && 'started-2']">
    <img src="../assets/gen_closed.png">
    <video
      v-if="state === 1 || state === 2"
      autoplay
      src="../assets/gen_what_current_transition0061-0088.mp4"
      @play="started1 = true"
    ></video>
    <video
      v-if="state === 2"
      autoplay
      src="../assets/gen_current_diagram_transition0088-0118.mp4"
      @play="started2 = true"
    ></video>
    <div class="glow">
      <h1 class="what">Was ist ein<br><span>Generator?</span></h1>
      <h1 class="current">Wechsel-<br><span>strom</span></h1>
      <div class="diagram">
        <div class="visual">
          <div class="arrow">
            <i class="bi-arrow-right" />
          </div>
          <div class="cabel">
            <div class="electrons">
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
        </div>
        <img src="../assets/sine_wave.svg">
        <span class="y">Spannung</span>
        <span class="x">Zeit</span>
        <div class="phase">
          <div class="point"></div>
        </div>
      </div>
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
    const started1 = ref(false)
    const started2 = ref(false)

    watch(() => props.state, val => {
      if (val === 0) {
        started1.value = false
        started2.value = false
      }
      if (val === 1) {
        started2.value = false
      }
    })

    return {
      started1,
      started2
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
  &-leave-active {
    transition: .5s;

    .glow {
      z-index: 1;
      transition: .3s cubic-bezier(0.895, 0.03, 0.685, 0.22) !important;
    }
  }
  &-leave-to {
    .glow {
      opacity: 0;
      transform: translate(-650px)translateX(100px) !important;
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

.diagram {
  position: absolute;
  inset: 100px -580px auto auto;
  width: 400px;
  height: 420px;
  opacity: 0;

  transform:
    rotateX(-2.3969deg)rotateY(69.3234deg - 90deg)
    translate3d(-50%, 110px, -330.393px)
    scale(math.div(8.2, 5.5));

  color: #fff;
  font-family: Raleway;
  text-transform: uppercase;
  font-size: 12px;

  .x {
    position: absolute;
    inset: 195px 10px auto auto;
  }
  .y {
    position: absolute;
    transform: rotate(-90deg);
    inset: 110px auto auto -25px;
  }

  .phase {
    position: absolute;
    left: 16px;
    top: 70px;
    height: 280px;
    border-left: #fff6 dashed 2px;

    animation: phaseIndicator 2s linear infinite;

    @keyframes phaseIndicator {
      to {
    transform: translateX(368px);
      }
    }

    .point {
      position: absolute;
      background: #ffaaaa;
      box-shadow:
        #f00 0 0 10px 2px,
        #f00 0 0 50px,
        #f00 0 0 100px,
      ;
      border-radius: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      transform: translate(calc(-50% - 1px), calc(-50% + 1px));

      animation: pointWiggle 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;

      @keyframes pointWiggle {
        0%, 100% {
          transform: translate(calc(-50% - 1px), calc(-50% + 1px))translateY(0);
          animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
        }
        25% {
          transform: translate(calc(-50% - 1px), calc(-50% + 1px))translateY(-130px);
          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        }
        50% {
          transform: translate(calc(-50% - 1px), calc(-50% + 1px))translateY(0);
          animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
        }
        75% {
          transform: translate(calc(-50% - 1px), calc(-50% + 1px))translateY(130px);
          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        }
      }
    }
  }

  .visual {
    .arrow {
      position: absolute;
      left: 50%;
      top: 15px;
      transform: scaleX(0);
      transform-origin: 0 0;
      font-size: 2rem;

      animation: arrowWiggle 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;

      @keyframes arrowWiggle {
        0%, 100% {
          transform: scaleX(0);
          animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
        }
        25% {
          transform: scaleX(1);
          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        }
        50% {
          transform: scaleX(0);
          animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
        }
        75% {
          transform: scaleX(-1);
          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
        }
      }
    }

    .cabel {
      border-top: #fff solid .1rem;
      border-bottom: #fff solid .1rem;
      height: .8rem;

      .electrons {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        animation: electronsWiggle 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;

        @keyframes electronsWiggle {
          0%, 100% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
          }
          25% {
            transform: translateX(20px);
            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
          }
          50% {
            transform: translateX(0);
            animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
          }
          75% {
            transform: translateX(-20px);
            animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
          }
        }

        div {
          position: relative;
          background: #fff;
          width: .5rem;
          height: .5rem;
          border-radius: 50%;

          &::before {
            content: '-';
            color: black;
            position: absolute;
            inset: 50% auto auto 50%;
            transform: translate(-50%, -50%)translateY(-0.5px);
          }
        }
      }
    }
  }
}

.started-1, .started-2  {
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
.started-2 {
  .glow {
    transition: #{math.div(12, 24)}s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform: translate(-650px);
  }

  .diagram {
    opacity: 1;
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
