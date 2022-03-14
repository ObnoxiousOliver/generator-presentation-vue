<template>
  <div class="root">
    <video v-if="!ended" @ended="ended = true" autoplay src="../assets/gen_simple_alone_transition0188-0212.mp4"></video>
    <video id="player2" v-show="ended" @play="started = true" @ended="ended2 = true" :loop="state !== 4" src="../assets/gen_simple_alone_idle0213-0267.mp4"></video>
    <video v-if="state >= 3" :style="{ opacity: ended2 ? 1 : 0 }" id="player3" src="../assets/gen_normal_transition0267-0299.mp4"></video>

    <transition name="induction-vid">
      <video v-if="state === 2" autoplay loop src="../assets/electric_induction0267-0298.mp4"></video>
    </transition>

    <div class="glow">
      <transition name="induction">
        <h1 v-if="state === 1 || state === 2" class="induction">
          elektro-<br>
          magnetische<br>
          <span>Induktion</span>
        </h1>
      </transition>
      <div
        v-if="started"
        :style="{
          opacity: state === 3 ? 1 : 0
        }"
        class="gen"
      >
        <i class="arrow right bi-arrow-right"/>
        <i class="arrow left bi-arrow-left"/>
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
    const ended = ref(false)
    const ended2 = ref(false)
    const started = ref(false)

    watch(ended, val => {
      if (val) {
        document.getElementById('player2').play()
      }
    })
    watch(ended2, val => {
      if (val) {
        document.getElementById('player3').play()
      }
    })

    watch(() => props.state, (val, old) => {
      if (val < old) {
        switch (val) {
          case 0: case 1: case 2: case 3:
            ended.value = true
            ended2.value = false
            started.value = true
            break
          case 4:
            ended.value = true
            ended2.value = true
            started.value = true
        }
      }
    })

    return {
      ended,
      ended2,
      started
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:math';

video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}

.slide {
  &-leave-active {
    transition: .2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }
  &-leave-to {
    transform: scale(1.2);
    opacity: 0;
  }
}

.induction {
  position: absolute;
  top: 70px;
  right: 80px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 3.3rem;
  letter-spacing: -0.05em;
  line-height: .9;
  text-transform: uppercase;
  text-align: right;

  color: #FFFFFF;

  span {
    font-weight: 600;
    letter-spacing: 0em;
    font-size: 4.3rem;
  }

  &-enter-active, &-leave-active {
    transition: .7s cubic-bezier(0.77, 0, 0.175, 1);
    clip-path: inset(0);
  }

  &-enter-from, &-leave-to {
    clip-path: inset(0 100% 0 0);
    transform: translateX(100%);
  }
}

.induction-vid {
  &-enter-active, &-leave-active {
    transition: .3s;
  }

  &-enter-from, &-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}

.gen {
  transition: opacity .5s;
}

.arrow {
  color: white;
  font-size: 3rem;

  position: absolute;
  animation: arrowWiggle #{math.div(54, 24)}s #{math.div(54 * 0.28, 24 )}s infinite;

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

  &.right {
    top: 236px;
    left: 877px;
    transform-origin: 0 0;
  }
  &.left {
    top: 356px;
    left: 827px;
    transform-origin: 100% 0;
  }
}
</style>
