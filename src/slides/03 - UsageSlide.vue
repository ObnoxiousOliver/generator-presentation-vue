<template>
  <div class="root">
    <h1>
      <transition name="header">
        <span v-if="state === 0">Fahrrad Dynamo</span>
        <span v-else-if="state === 1">Wasserkraftwerk</span>
        <span v-else-if="state === 2">Kohlekraftwerk</span>
        <span v-else-if="state === 3">Windkraftwerk</span>
        <span v-else-if="state === 4">Kernkraftwerk</span>
      </transition>
    </h1>
    <div class="container bg">
      <img src="../assets/fahrraddynamo-an-bereifung.jpg">
      <img src="../assets/wasserkraftwerk.jpg">
      <img src="../assets/kohlekraftwerk.jpg">
      <img src="../assets/turbines.jpg">
      <img src="../assets/kernkraftwerk.jpg">
    </div>
    <div class="container">
      <img :class="[state === 0 ? 'active' : '']" src="../assets/fahrraddynamo-an-bereifung.jpg">
      <img :class="[state === 1 ? 'active' : '']" src="../assets/wasserkraftwerk.jpg">
      <img :class="[state === 2 ? 'active' : '']" src="../assets/kohlekraftwerk.jpg">
      <img :class="[state === 3 ? 'active' : '']" src="../assets/turbines.jpg">
      <img :class="[state === 4 ? 'active' : '']" src="../assets/kernkraftwerk.jpg">
    </div>
    <div class="container">
      <div :class="['selection', 'state-' + state]"></div>
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
.root {
  background: black;
  color: white;
}

.slide {
  &-enter-active {
    transition:
      1.2s,
      opacity 1s .2s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1s .2s cubic-bezier(0.19, 1, 0.22, 1);

    h1 {
      transition: 1s .3s cubic-bezier(0.19, 1, 0.22, 1);
      clip-path: inset(0);
    }

    img, .active {
      @for $i from 0 through 5 {
        &:nth-child(#{$i}) {
          transition: 1s #{$i * 0.1 + 0.2}s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
    }
  }
  &-enter-from {
    transform: scale(0.9);
    opacity: 0;

    h1 {
      transform: translateY(-60px);
      clip-path: inset(100% 0 0 0);
      opacity: 0;
    }

    img, .active {
      transform: translateY(100%);
      opacity: 0;
    }

    .selection {
      opacity: 0;
    }
  }
  &-leave-active {
    z-index: 1;
    transition: .3s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    overflow: hidden;
  }
  &-leave-to {
    transform: translateX(100%);
  }
}

.container {
  position: absolute;
  inset: 150px 50px;

  display: flex;
  gap: 30px;

  &.bg {
    gap: 0;
    inset: 0;
    opacity: 0.3;
    filter: blur(40px);

    img {
      &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        flex: 0 0 auto; width: 243px;
      }
    }
  }
  &:not(.bg) {
    transform: translateY(30px);

    img {
      filter: brightness(0.5);
    }
  }
}

img {
  flex: 1 1 auto;
  width: 0;
  object-fit: cover;

  &:nth-child(1) { object-position: 5%; }
  &:nth-child(2) { object-position: 20%; }
  &:nth-child(3) { object-position: 50%; }
  &:nth-child(4) { object-position: 69%; }
  &:nth-child(5) { object-position: 55%; }

  transition: .2s cubic-bezier(0.19, 1, 0.22, 1);

  box-shadow:
    #50FFAB00 0 0 50px,
    #0000 0 0 50px 50px;

  &.active {
    transition: .7s cubic-bezier(0.19, 1, 0.22, 1);

    transform: scale(1.25);

    box-shadow: #50FFAB88 0 0 50px -10px;
    filter: none !important;
  }
}

.selection {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: calc(percentage(1 / 5) - 15px);
  outline: #50FFAB solid 3px;
  margin: -5px;

  transition: .5s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s .5s;

  @for $i from 0 through 4 {
    &.state-#{$i} {
      transform: translate(calc(($i * 100%) + ($i* 21px)))scale(1.25);
    }
  }
}

h1 {
  position: absolute;
  inset: 30px 0 auto;
  height: 60px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  span {
    display: block;
    position: absolute;
    inset: 0;
    text-align: center;

    &.header {
      &-enter-active, &-leave-active {
        transition: .5s cubic-bezier(0.19, 1, 0.22, 1);
        clip-path: inset(0);
      }

      &-enter-from {
        transform: translateY(60px);
        clip-path: inset(0 0 100% 0);
      }
      &-leave-to {
        transform: translateY(-60px);
        clip-path: inset(100% 0 0 0);
      }
    }
  }
}
</style>
