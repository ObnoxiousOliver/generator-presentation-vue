<template>
  <div class="root">
    <video autoplay @play="started = true" src="../assets/turb_closeup_transition0300-0324.mp4" />
    <video autoplay v-if="state === 1" loop src="../assets/turb_idle0324-0369.mp4"></video>

    <div class="glow">
      <transition name="started">
        <div v-if="started">
          <i class="steam-enter bi-arrow-down" />
          <div class="labels">
            <span class="right">Leitschaufeln</span>
            <span>Laufschaufeln</span>
            <span class="right">Turbinenwelle</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: {
    state: Number
  },

  setup () {
    const started = ref(false)

    return {
      started
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  color: #fff;
}

video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}

.steam-enter {
  position: absolute;
  left: 660px;
  top: -40px;

  font-size: 7rem;

  animation: arrowWiggle 1s linear infinite;

  @keyframes arrowWiggle {
    0% {
      opacity: 0;
      transform: translateY(0);
    }
    20%, 80% {
      opacity: 1;
    }
    90%, 100% {
      opacity: 0;
      transform: translateY(200px);
    }
  }
}

.slide {
  &-enter-active {
    transition: .3s;
  }
  &-enter-from {
    opacity: 0;
  }
  &-leave-active {
    transition: 1s;
  }
}

.started {
  &-enter-active {
    transition: .5s .7s;
  }
  &-enter-from {
    opacity: 0;
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
      top: 67px;
      left: 104px;

      &::after {
        width: 80px;
        transform: rotate(240deg);
      }
    }
    &:nth-child(2) {
      top: 557px;
      left: 440px;

      &::after {
        width: 50px;
        transform: rotate(220deg);
      }
    }
    &:nth-child(3) {
      top: 297px;
      left: 27px;

      &::after {
        width: 170px;
        transform: rotate(284deg);
      }
    }
  }
}
</style>
