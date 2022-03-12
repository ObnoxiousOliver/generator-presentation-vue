<template>
  <div class="root">
    <video v-if="!ended" @ended="ended = true" autoplay src="../assets/gen_simple_alone_transition0188-0212.mp4"></video>
    <video id="player2" v-show="ended" loop src="../assets/gen_simple_alone_idle0213-0267.mp4"></video>

    <div class="glow">
      <transition name="induction">
        <h1 v-if="state === 1" class="induction">
          elektro-<br>
          magnetische<br>
          <span>Induktion</span>
        </h1>
      </transition>
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

  setup () {
    const ended = ref(false)

    watch(ended, val => {
      if (val) {
        document.getElementById('player2').play()
      }
    })

    return {
      ended
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
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
</style>
