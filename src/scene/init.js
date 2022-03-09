import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
// import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js'

export default function () {
  const canvas = document.querySelector('#three')
  const loader = new GLTFLoader()

  // #region Camera
  const camera = new THREE.PerspectiveCamera(10, 16 / 9, 0.01, 1000)
  camera.rotation.set(0.07682367320510353, 0.495689, -0.000007)
  camera.rotation.order = 'ZYX'

  camera.position.set(5.21941, 0.222014, 10.7092)
  // #endregion

  const controls = new OrbitControls(camera, canvas)

  // #region Scene
  const scene = new THREE.Scene()
  // #endregion

  // #region Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
  })
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setAnimationLoop(animation)

  window.addEventListener('resize', updateRendererSize)
  function updateRendererSize () {
    const aspect = 16 / 9
    const w = window.innerWidth
    const h = window.innerHeight

    const wide = w / 16 > h / 9

    renderer.setSize(
      wide ? h * aspect : w,
      wide ? h : w / aspect
    )
  }
  updateRendererSize()

  // const composer = new EffectComposer(renderer)
  // #endregion

  // Generator Model
  loader.load('/models/generator.glb', function (gltf) {
    gltf.scene.children.forEach(child => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
      child.material = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.5
      })
    })
    gltf.scene.remove(gltf.scene.getObjectByName('ChasisCutout'))
    scene.add(gltf.scene)
  }, undefined, function (error) {
    console.error(error)
  })

  const plane = new THREE.PlaneGeometry(100, 100)
  plane.rotateX(Math.PI * -0.5)
  const planeMat = new THREE.MeshStandardMaterial({
    color: 0x111111
  })
  const ground = new THREE.Mesh(plane, planeMat)
  ground.receiveShadow = true
  scene.add(ground)

  const pointLightGreen = new THREE.PointLight(0x00FF9A, 1)
  pointLightGreen.castShadow = true
  pointLightGreen.position.set(-0.81818, 2.78905, -2.65104)
  scene.add(pointLightGreen)

  const pointLightPink = new THREE.PointLight(0xFF67E5, 2)
  pointLightPink.castShadow = true
  pointLightPink.position.set(2.77286, 7.02249, 9.39795)
  scene.add(pointLightPink)

  const pointLightWhite = new THREE.PointLight(0xffffff, 2)
  pointLightWhite.castShadow = true
  pointLightWhite.position.set(0, 10, 0)
  scene.add(pointLightWhite)

  // Animation Loop
  function animation (time) {
    // const renderPass = new RenderPass(scene, camera)
    // composer.addPass(renderPass)
    // const ssaoPass = new SSAOPass(scene, camera)
    // composer.addPass(ssaoPass)

    // composer.render()
    renderer.render(scene, camera)

    controls.update()
  }
}
