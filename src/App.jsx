import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SoundSection from "./components/SoundSection";
import WebGiViewer from "./components/WebGiViewer";

function App() {

  const WebGiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    WebGiViewerRef.current.triggerPreview();
  }

  return (
    <div>
      <div ref={contentRef} id="content">
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection triggerPreview = {handlePreview}/>
    </div>
      <WebGiViewer contentRef = {contentRef} ref={WebGiViewerRef} />
    </div>
  );
}

export default App;
