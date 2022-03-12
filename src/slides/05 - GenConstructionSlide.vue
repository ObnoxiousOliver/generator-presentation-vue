<template>
  <div class="root">
    <video @play="started = true" v-if="enter" autoplay src="../assets/gen_open_transition0118-0142.mp4"></video>
    <transition name="started">
      <div v-if="started" class="labels">
        <span>Rotor</span>
        <span>Stator</span>
        <span class="right">Induktionsspulen</span>
        <span>Elektromagnete</span>
        <span class="right">Lüfter</span>
        <span class="right">Antriebswelle</span>
      </div>
    </transition>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
export default {
  setup () {
    const enter = ref(false)

    onMounted(() => {
      setTimeout(() => {
        enter.value = true
      }, 100)
    })

    return {
      enter,
      started: ref(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  color: white;
}

video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.started {
  &-enter-active {
    transition: 2s;

    span {
      transition: .5s 1s;
    }
  }
  &-enter-from {
    span {
      opacity: 0;
    }
  }
}

.slide {
  &-leave-active {
      transition: 1s;

    .labels {
      z-index: 1;
      transition: .2s;
    }
  }
  &-leave-to {
    .labels {
      opacity: 0;
    }
  }
}

.labels {
  position: relative;
  filter: drop-shadow(#fff6 0 0 20px);

  span {
    position: absolute;
    font-size: 2rem;
    font-family: Raleway;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-shadow: black 0 0 30px;

    &::before {
      content: '';
      position: absolute;
      inset: -5px -10px;
      border-bottom: white solid 3px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: -9px;
      height: 3px;
      width: 100px;
      background: white;

      transform-origin: 0 50%;
    }

    &.right::after {
      right: -9px;
      left: auto;
      transform-origin: 100% 50%;
    }

    &:nth-child(1) {
      top: 290px;
      left: 914px;

      &::after {
        width: 170px;
        transform: rotate(174deg);
      }
    }
    &:nth-child(2) {
      top: 419px;
      left: 955px;

      &::after {
        width: 50px;
        transform: rotate(220deg);
      }
    }
    &:nth-child(3) {
      top: 126px;
      left: 235px;

      &::after {
        width: 110px;
        transform: rotate(200deg);
      }
    }
    &:nth-child(4) {
      top: 171px;
      left: 846px;

      &::after {
        width: 132px;
        transform: rotate(155deg);
      }
    }
    &:nth-child(5) {
      top: 573px;
      left: 349px;

      &::after {
        width: 132px;
        transform: rotate(155deg);
      }
    }
    &:nth-child(6) {
      top: 262px;
      left: 149px;

      &::after {
        width: 130px;
        transform: rotate(255deg);
      }
    }
  }
}
</style>
