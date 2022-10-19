import React from 'react'

const Content = (props) => {
    return (
    <div className={`content ${props.content} `}>
        <h1 className={`${props.Title} ${props.h1}`} style={props.fontStyleInc}>Title 1</h1>
        <h3 className={` ${props.Title} ${props.h1}`} style={props.scalingStyleInc}>H3 Font</h3>
        <a href='#' className={` ${props.Link} ${props.h1}`}>W3 Schools</a>
        <p className={props.h1} style={{...props.spacingStyleInc,...props.heightStyleInc}}>lorem We've cooked up some examples of how you could use the “circle-half-stroke” icon in your projects, whether they're apps, interfaces, or print designs.</p>
        <p className={props.h1} style={{...props.spacingStyleInc,...props.heightStyleInc}}>lorem We've cooked up some examples of how you could use the “circle-half-stroke” icon in your projects, whether they're apps, interfaces, or print designs.</p>
        <a href='#' className={` ${props.Link} ${props.h1}`}>W3 Schools</a>
        <h4 className={` ${props.Title} ${props.h1}`}>hello</h4>
        <h2 className={` ${props.Title} ${props.h1}`}>Hello</h2>
        <p className={props.h1} style={{...props.heightStyleInc,...props.spacingStyleInc}}>lorem We've cooked up some examples of how you could use the “circle-half-stroke” icon in your projects, whether they're apps, interfaces, or print designs.</p>
    </div>
    )
}

export default Content