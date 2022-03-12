<template>
  <div :class="{
    'root': true,
    ['state-' + state]: true
  }">
    <img class="img2" src="../assets/Antoine-Hippolyte_Pixii.jpg">
    <h3>Antoine-Hippolyte Pixii</h3>

    <div class="glow">
      <transition name="state-0">
        <span v-if="state === 0">
          <h1>Antoine-<br>Hippolyte Pixii</h1>
          <h2>*1808 &nbsp; †1835</h2>
        </span>
      </transition>
    </div>

      <transition name="state-1">
        <span v-if="state === 1">
          <img class="img3" src="..\assets\erste-magnetoelectric-motor-gebaut-von-hippolyte-pixii-c-1832-c-1890-artist-unbekannt-aja0g5.jpg.png">
          <div class="glow">
            <span class="first-gen">
              Der Erste<br>
              <span class="gen">Generator</span>
            </span>
          </div>
        </span>
      </transition>

    <div class="img1">
      <img src="../assets/Antoine-Hippolyte_Pixii.jpg">
      <div class="deco1"></div>
      <div class="deco2"></div>
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
  background: #000205;
  color: #fff;
}

.glow {
  filter: drop-shadow(#fff6 0 0 20px);
}

.slide {
  &-enter-active {
    transition: 2.6s,
      opacity 1s .2s cubic-bezier(0.19, 1, 0.22, 1),
      transform 1s .2s cubic-bezier(0.19, 1, 0.22, 1);

    h1 {
      transition: 1.2s .2s cubic-bezier(0.23, 1, 0.320, 1);
      clip-path: inset(0);
    }
    h2 {
      transition: 1.2s .4s cubic-bezier(0.23, 1, 0.320, 1);
      clip-path: inset(0);
    }
    h3 {
      transition: 1.2s .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .deco1, .deco2 {
      transition: 1s .2s;
    }

    .img1 img {
      transition: 1.2s .3s cubic-bezier(0.23, 1, 0.320, 1);
      clip-path: inset(0);
    }
  }
  &-enter-from {
    transform: scale(0.9);
    opacity: 0;

    h1 {
      clip-path: inset(0 0 100% 0);
      transform: translateY(100%);
    }
    h2 {
      clip-path: inset(100% 0 0 0);
      transform: translateY(-100%);
    }
    h3 {
      transform: translateX(-50px);
      opacity: 0;
    }
    .deco1, .deco2 {
      opacity: 0;
    }

    .img1 img {
      clip-path: inset(50% 0);
      transform: scale(0.9);
      // opacity: 0;
    }
  }

  &-leave-active {
    transition: .2s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }
  &-leave-to {
    transform: scale(1.2);
    opacity: 0;
  }
}

h1 {
  position: absolute;
  left: 71px;
  top: 192px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 87px;
  line-height: 75px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #FFFFFF;
}
h2 {
  position: absolute;
  left: 122px;
  top: 357px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 300;
  font-size: 35px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #FFFFFF;
}
h3 {
  position: absolute;
  left: -1354px;
  top: 398px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 242px;
  letter-spacing: -0.1em;
  text-transform: uppercase;

  color: #060606;
  filter: opacity(0.36);
}
.img1 {
  position: absolute;
  width: 295px;
  height: 439px;
  left: 915px;
  top: 130px;

  filter: drop-shadow(-67px 73px 80px #50ffab4f);

  img {
    filter: saturate(0)contrast(1.2);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img2 {
  position: absolute;
  width: 1814px;
  height: 2699px;
  left: -536px;
  top: -415px;

  opacity: 0.1;

  filter: saturate(0)contrast(1.2)blur(20px);
  transform: scaleX(-1);
}
.img3 {
  position: absolute;
  width: 367px;
  height: 567px;
  left: 390px;
  top: 76px;
  object-fit: cover;
}

.deco1 {
  position: absolute;
  height: 3px;
  width: 147px;
  left: 155px;
  top: -15px;

  background: #fff8;
  animation: deco1 10s infinite alternate-reverse cubic-bezier(0.445, 0.05, 0.55, 0.95);

  @keyframes deco1 {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}
.deco2 {
  position: absolute;
  width: 3px;
  height: 160px;
  left: -15px;
  top: 305px;

  background: #fff8;
  animation: deco2 10s -5s infinite alternate-reverse cubic-bezier(0.445, 0.05, 0.55, 0.95);

  @keyframes deco2 {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
}

.first-gen {
  position: absolute;
  left: 770px;
  top: 182px;

  font-family: Raleway;
  font-weight: 300;
  font-size: 83px;
  line-height: 69px;

  text-align: right;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  .gen {
    font-weight: 600;
    font-size: 77px;
    line-height: 89.4%;
    letter-spacing: -0.03em;
  }
}

.state-0 {
  &-leave-active {
    display: block;
    transition: transform .2s cubic-bezier(0.95, 0.05, 0.795, 0.035), opacity .2s;
  }
  &-leave-to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
.state-1 {
  &-enter-active {
    display: block;
    transition: 1s .1s cubic-bezier(0.19, 1, 0.22, 1);

    .first-gen {
      clip-path: inset(0);
      transition: 1s .3s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  &-enter-from {
    transform: translateX(200px);
    opacity: 0;

    .first-gen {
      clip-path: inset(0 100% 0 0);
      transform: translateX(10%);
    }
  }

  .img1 {
    transition: 0.8s cubic-bezier(0.23, 1, 0.320, 1);
    transform: translate(-980px, 300px)scaleX(-1)rotate(-15deg);
    filter: drop-shadow(-67px -73px 80px #FF50A44f);
  }
}
</style>
