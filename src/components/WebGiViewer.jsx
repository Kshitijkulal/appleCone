import React, {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
  CanvasSnipperPlugin,
  AssetManagerBasicPopupPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";


gsap.registerPlugin(ScrollTrigger);

const WebGiViewer = forwardRef((props,ref) => {
  const canvasRef = useRef(null);
  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const canvasContainerRef = useRef(null)
  const [previewMode, setPreviewMode] = useState(false);
  
  useImperativeHandle(ref, () => ({
    triggerPreview(){
      setPreviewMode(true)
      // props.canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = "0";
      gsap.to( positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration:2,
        onUpdate:() => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true)

        }
      });
      gsap.to(targetRef, {x:0.11 , y:0.0, z: 0.0, duration: 2})
      viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled: true})
    }
  }))

const memoizedScrollAnimaton = useCallback(
  (postition, target , onUpdate) => {
    if (postition && target && onUpdate){
      scrollAnimation(postition, target, onUpdate);
    }
  }, []
)

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: document.getElementById("webgi-canvas"),
    });

    setViewerRef(viewer);

    const camera = viewer.scene.activeCamera;
    const postition = camera.position;
    const target = camera.target;

    setCameraRef(camera);
    setPositionRef(postition);
    setTargetRef(target);


    // or use this to add all main ones at once.
    await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.
    await viewer.addPlugin(AssetManagerBasicPopupPlugin)


    await viewer.load("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    }

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimaton(postition , target, onUpdate);

  }, []);

  useEffect(() => {
    setupViewer();
  }, [setupViewer]);

  const handleExit = useCallback(() => {
    // props.canvasContainerRef.current.style.pointerEvents = "all";
    props.contentRef.current.style.opacity = "1";
    viewerRef.scene.activeCamera.setCameraOptions({controlsEnabled:false});
    setPreviewMode(false);
    gsap.to(positionRef, {
      x: 1.56,
      y: 5.0,
      z: 0.01,
      scrollTrigger: {
          trigger: '.display-section',
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
      },
      onUpdate: () => {
        viewerRef.setDirty();
        cameraRef.positionTargetUpdated(true)
      }
  });

  gsap.to(targetRef, {
      x: -0.55,
      y: 0.32,
      z: 0.0,
      scrollTrigger: {
          trigger: '.display-section',
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
      },
  })
  },[canvasContainerRef,viewerRef,positionRef,cameraRef,targetRef]);
  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
      {
        previewMode && (
          <button className="button" onClick={handleExit}>Exit</button>
        )
      } 
    </div>
  );
}
) 

export default WebGiViewer;
