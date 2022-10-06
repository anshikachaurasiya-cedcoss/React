import Navbar from './Navbar'

const LeaveManagement = (props) => {
  return (
    <>
    <Navbar login={props.login}/>
    <div className='main_hr_Div'>
    <div className='main_hr_div'>
        <img src='https://www.datocms-assets.com/40521/1634632462-leave.png?auto=format&dpr=0.09&w=5943' alt=''/>
    </div>
    <div className='main_hr_div_right'>
        <p style={{fontSize:'1.5rem',fontWeight:'500'}}>HRMS Software</p>
        <label style={{fontSize:'2.7rem',fontWeight:'400',color:'orange'}}>HR Made Simple</label>
        <p style={{lineHeight:'1.5em'}}>Bring simplicity, speed and efficiency to all repetitive HRMS functions.<br/>
         Deliver world-class employee experience. Get operational HR out of the way,<br/>
          and make time for high value work.</p>
    </div>
    </div>
    </>
  )
}

export default LeaveManagement