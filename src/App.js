import { useState } from 'react';
import './App.css';
import Main from './Components/Main';

function App() {
  var[content,setContent]=useState('')
  var[Title,setTitle]=useState('')
  var[Link,setLink]=useState('')
  var[h1,setH1]=useState('')
  var[space,setSpaceInc]=useState(0)
  var[height,setHeight]=useState(15)
  var[font,setFont]=useState(30)
  var[scaling,setScaling]=useState(1)
  const left=()=>{
    setContent('left')
  }
  const right=()=>{
    setContent('right')
  }
  const center=()=>{
    setContent('center')
  }
  const magnify=()=>{
    setContent('magnify')
  }
  const title=()=>{
    setTitle('markTitle')
  }
  const link=()=>{
    setLink('markLinks')
  }
  const readable=()=>{
    setH1('h1 h2 h3 p a')
  }
  var spacingStyleInc={letterSpacing: space+'px'};
  const spacingInc=()=>{
    setSpaceInc(space+1)
  }
  const spacingDec=()=>{
    setSpaceInc(space-1)
  }
  var heightStyleInc={lineHeight: height+'px'}
  const heightInc=()=>{
    setHeight(height+1)
  }
  const heightDec=()=>{
    setHeight(height-1)
  }
  var fontStyleInc={fontSize:font+'px'}
  const fontInc=()=>{
    setFont(font+1)
  }
  const fontDec=()=>{
    setFont(font-1)
  }
  var scalingStyleInc={transform:'scale('+scaling+')'}
  const scalingInc=()=>{
    setScaling(scaling+0.1)
  }
  const scalingDec=()=>{
    setScaling(scaling-0.1)
  }
  return (
    <>
    <Main scalingInc={scalingInc} scalingDec={scalingDec} scalingStyleInc={scalingStyleInc} fontInc={fontInc} fontDec={fontDec} fontStyleInc={fontStyleInc} heightDec={heightDec} heightInc={heightInc} heightStyleInc={heightStyleInc} spacingStyleInc={spacingStyleInc} spacingDec={spacingDec} spacingInc={spacingInc} readable={readable} h1={h1} link={link} Link={Link} left={left} right={right} content={content} center={center} magnify={magnify} title={title} Title={Title}/>
    </>
  );
}

export default App;
