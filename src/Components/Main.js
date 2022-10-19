import React from 'react'
import Content from './Content'

const Main = (props) => {
  return (
    <div className='main'>
        <div className='mainLeft'>
            <h2>Content Adjustment Tools</h2>
            <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
                <div className='scaling'>
                    <label><i class='fas fa-expand-arrows-alt'></i>Content scaling</label>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={props.scalingDec} style={{backgroundColor:'white'}}><i class='fas fa-angle-down'></i></button>
                        <div style={{backgroundColor:'white'}}>Default</div>
                        <button onClick={props.scalingInc} style={{backgroundColor:'white'}}><i class='fas fa-angle-up'></i></button>
                    </div>
                </div>
                <button onClick={props.readable}><i class="fa fa-font"></i><br/>Readable Font</button>
            </div>
            <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
            <button onClick={props.title}><i class="fa fa-header"></i><br/>Highlight Titles</button>
            <button onClick={props.link}><i class="fa fa-link"></i><br/>Highlight Links</button>
            <button onClick={props.magnify}><i class="fa fa-search"></i><br/>Text Magnifier</button>
            </div>
            <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
                <div className='scaling'>
                <label><i class="fa fa-font"></i><i class="fa fa-arrows-v"></i>Adjust Font Sizing</label>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={props.fontDec} style={{backgroundColor:'white'}}><i class='fas fa-angle-down'></i></button>
                        <div style={{backgroundColor:'white'}}>Default</div>
                        <button onClick={props.fontInc} style={{backgroundColor:'white'}}><i class='fas fa-angle-up'></i></button>
                    </div> 
                </div>
                <button onClick={props.center}><i class='fas fa-align-center'></i><br/>Align Center</button>
            </div>
            <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
                <div className='scaling'>
                <label><i class="fa fa-arrows-v"></i><i class='fas fa-align-justify'></i>Adjust Line Height</label>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={props.heightDec} style={{backgroundColor:'white'}}><i class='fas fa-angle-down'></i></button>
                        <div style={{backgroundColor:'white'}}>Default</div>
                        <button onClick={props.heightInc} style={{backgroundColor:'white'}}><i class='fas fa-angle-up'></i></button>
                    </div> 
                </div>
                <button onClick={props.left}><i class="fa fa-align-left"></i><br/>Align Left</button>
            </div>
            <div style={{display:'flex',flexDirection:'row',margin:'2%'}}>
                <div className='scaling'>
                <label><i class="fa fa-font"></i><i class="fa fa-arrows-v"></i>Adjust Letter spacing</label>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button onClick={props.spacingDec} style={{backgroundColor:'white'}}><i class='fas fa-angle-down'></i></button>
                        <div style={{backgroundColor:'white'}}>Default</div>
                        <button onClick={props.spacingInc} style={{backgroundColor:'white'}}><i class='fas fa-angle-up'></i></button>
                    </div> 
                </div>
                <button onClick={props.right}><i class='fas fa-align-right'></i><br/>Align Right</button>
            </div>
        </div>
        <Content scalingStyleInc={props.scalingStyleInc} fontStyleInc={props.fontStyleInc} heightStyleInc={props.heightStyleInc} spacingStyleInc={props.spacingStyleInc} content={props.content} h1={props.h1} Title={props.Title} Link={props.Link}/>
    </div>
  )
}

export default Main