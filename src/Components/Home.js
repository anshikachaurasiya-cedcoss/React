import Body from "./Body"
import Body2 from "./Body2"
import Body3 from "./Body3"
import Body4 from "./Body4"
import Body5 from "./Body5"
import Body6 from "./Body6"
import Body7 from "./Body7"
import Body8 from "./Body8"
import Navbar from "./Navbar"

const Home = (props) => {
  return (
    <>
    <Navbar array={props.array} array2={props.array2} array3={props.array3} array4={props.array4}/>
    <Body/>
    <Body2/>
    <Body3 array={props.array}/>
    <Body4 array2={props.array2}/>
    <Body5/>
    <Body6/>
    <Body7 array3={props.array3}/>
    <Body8 array4={props.array4}/>
    </>
  )
}

export default Home