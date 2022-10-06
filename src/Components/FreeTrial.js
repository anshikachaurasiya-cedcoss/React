import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import ReCAPTCHA from 'react-google-recaptcha'


const FreeTrial = (props) => {
  return (
    <React.Fragment>
        <AppBar>
            <img onClick={props.home} style={{marginRight:'80%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5NS42NyAzOS42NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTUuNjcgMzkuNjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDA5MEJCO30KCS5zdDF7ZmlsbDojMzgzODM4O30KCS5zdDJ7ZmlsbDojRUU3OTI4O30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNS43MywzMS42Yy0zLjM0LTEuNy01LjQxLTUuMDktNS40MS04Ljg0YzAtNS40Nyw0LjQ1LTkuOTEsOS45MS05LjkxYzAuNzYsMCwxLjUsMC4wOSwyLjI0LDAuMjUKCQljMS4yMi02LjkyLDcuMzItMTIuMTUsMTQuNDgtMTIuMTVjNi45OSwwLDEyLjk0LDQuOTUsMTQuMzgsMTEuNmMxLjM5LTAuODcsMi45OS0xLjMzLDQuNjctMS4zM2M0Ljg5LDAsOC44OCwzLjk4LDguODgsOC44OGgtMi4zMwoJCWMwLTMuNjEtMi45NC02LjU0LTYuNTQtNi41NGMtMS43OSwwLTMuNDYsMC43MS00LjcsMmwtMS44MywxLjg5bC0wLjE3LTIuNjJDMzguODYsOC4zNiwzMy40NCwzLjI5LDI2Ljk0LDMuMjkKCQljLTYuNDMsMC0xMS44NSw1LjAyLTEyLjM0LDExLjQzbC0wLjEyLDEuNThsLTEuNDctMC41OGMtMC44OS0wLjM1LTEuODMtMC41My0yLjc5LTAuNTNjLTQuMTgsMC03LjU4LDMuNC03LjU4LDcuNTgKCQljMCwyLjg3LDEuNTksNS40NSw0LjE0LDYuNzZMNS43MywzMS42eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTExLjE2LDM2LjU2YzAuMjcsMC4xNiwwLjU2LDAuMjksMC44OSwwLjRjMC41NiwwLjIsMS4zMiwwLjM4LDIuMTUsMC4zOGMyLjIxLDAsMy45My0xLjAzLDMuOTMtMy41NXYtMS4xMgoJCWMwLTAuMjUsMC4wMi0wLjQsMC4wNC0wLjU2YzAuMDItMC4wOSwwLjAyLTAuMTgsMC4wMi0wLjI1aC0wLjA0Yy0wLjY5LDEuMjUtMS44MSwyLjA2LTMuNTgsMi4wNmMtMy4wMiwwLTUuMDEtMi4zOS01LjAxLTUuNzcKCQljMC0zLjM3LDEuODUtNS42OCw0Ljg3LTUuNjhjMS42MSwwLDMuMTcsMC42LDMuNzgsMS45OWgwLjA0YzAtMC4wMiwwLTAuMDQtMC4wMi0wLjExYy0wLjAyLTAuMDctMC4wMi0wLjE4LTAuMDItMC4zOAoJCWMwLTAuODMsMC4zMy0xLjIzLDEuMy0xLjIzaDIuMDFWMjRoLTEuMzljLTAuMzQsMC0wLjQ5LDAuMTYtMC40OSwwLjQ3djkuMjVjMCwzLjU3LTIuNjQsNC45Ni01LjQxLDQuOTYKCQljLTEuMjcsMC0yLjU3LTAuMzMtMy42Ni0wLjg5TDExLjE2LDM2LjU2eiBNMTguMTYsMjguMTZjMC0zLjI5LTEuNTktNC4zMS0zLjU1LTQuMzFjLTIuMjEsMC0zLjQ2LDEuNTktMy40Niw0LjI5CgkJYzAsMi43LDEuNDMsNC40MiwzLjY3LDQuNDJDMTYuNTksMzIuNTYsMTguMTYsMzEuNDcsMTguMTYsMjguMTYiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMy4zLDMyLjc0aDEuNzRWMjQuNWMwLTAuMzQtMC4xNi0wLjQ5LTAuNDktMC40OWgtMS41MnYtMS4yNWgyLjEyYzAuOTYsMCwxLjM2LDAuMzgsMS4zNiwxLjI3djAuNzYKCQljMCwwLjI1LDAsMC40NS0wLjAyLDAuNmMtMC4wMiwwLjA5LTAuMDIsMC4xOC0wLjAyLDAuMjVoMC4wNGMwLjU2LTEuNywxLjc5LTIuOTksMy41NS0yLjk5YzAuMTYsMCwwLjMxLDAsMC40MiwwLjAybDAuMiwwLjA0djEuNQoJCWMtMC4wNywwLTAuMTEsMC0wLjE4LTAuMDJjLTAuMDctMC4wMi0wLjItMC4wMi0wLjQtMC4wMmMtMi41MywwLTMuNTUsMi44NC0zLjU1LDUuMDd2My41MWgxLjc0djEuMjVIMjMuM1YzMi43NHoiLz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zNy41MywyMi40OGMzLjExLDAsNC43MiwyLjM5LDQuNzIsNS4xOGMwLDAuMTYsMCwwLjI5LTAuMDIsMC40NWwtMC4wNCwwLjI3aC04LjYzCgkJYzAuMDcsMi44OCwyLjAzLDQuNTEsNC4zNiw0LjUxYzEuMDUsMCwxLjg4LTAuMzQsMi40OC0wLjY3YzAuMzYtMC4yLDAuNjctMC40MiwwLjk0LTAuNjdsMC42OSwxLjE0CgkJYy0wLjM0LDAuMjktMC42OSwwLjU0LTEuMTIsMC43OGMtMC43MiwwLjQyLTEuNzcsMC43OC0zLjA0LDAuNzhjLTMuMzMsMC01Ljg4LTIuNDEtNS44OC01Ljg4QzMxLjk5LDI0LjcsMzQuNDksMjIuNDgsMzcuNTMsMjIuNDgKCQkgTTQwLjY2LDI3LjI3Yy0wLjA3LTIuMzktMS41Mi0zLjUxLTMuMTctMy41MWMtMS44OCwwLTMuNTEsMS4yMy0zLjg3LDMuNTFINDAuNjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDQuNjgsMzYuODFjMC4xMSwwLjExLDAuMjcsMC4yLDAuNDMsMC4yN2MwLjI3LDAuMTYsMC42NSwwLjI3LDEuMDcsMC4yN2MxLjAxLDAsMS43Mi0wLjgsMi4xNS0xLjc5bDAuNjMtMS41CgkJTDQ0LjkzLDI0aC0xLjQ3di0xLjI1aDQuNzJWMjRoLTEuNjNsMi45NSw3LjY2YzAuMDcsMC4yLDAuMTEsMC4zOCwwLjEzLDAuNTZsMC4wNCwwLjI1aDAuMDdjMC0wLjA3LDAuMDItMC4xNiwwLjA0LTAuMjUKCQljMC4wNy0wLjE2LDAuMTEtMC4zNiwwLjE4LTAuNTZMNTIuOSwyNGgtMS42M3YtMS4yNWg0LjY1VjI0aC0xLjQ4bC00Ljc4LDEyLjA3Yy0wLjY1LDEuNjEtMS44NSwyLjYxLTMuNDQsMi42MQoJCWMtMC42MywwLTEuMTYtMC4xNi0xLjU0LTAuMzNjLTAuMjItMC4xMS0wLjQyLTAuMjItMC41OC0wLjM0TDQ0LjY4LDM2LjgxeiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU4LjUxLDI0SDU2LjV2LTEuMjVoMi4wM3YtMy4xMWgxLjV2My4xMWgyLjg0VjI0aC0yLjg0djUuNzdjMCwyLjYxLDEuNjgsMi45OSwyLjU1LDIuOTkKCQljMC4yLDAsMC4zMSwwLDAuMzgtMC4wMmMwLjA3LTAuMDIsMC4xMS0wLjAyLDAuMTMtMC4wMnYxLjMyYy0wLjA3LDAtMC4xMSwwLTAuMTgsMC4wMmMtMC4wNywwLjAyLTAuMjIsMC4wMi0wLjQ3LDAuMDIKCQljLTEuMywwLTMuOTMtMC40Mi0zLjkzLTQuMThWMjR6Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjY0LjcsMzEuOTcgNjYuNDUsMzEuOTcgNjYuNDUsMjEuNCA2NC43LDIxLjQgNjQuNywxOS4zNyA3MC45MiwxOS4zNyA3MC45MiwyMS40IDY5LjE1LDIxLjQgCgkJNjkuMTUsMjUuNjMgNzUuODEsMjUuNjMgNzUuODEsMjEuNCA3NC4wMywyMS40IDc0LjAzLDE5LjM3IDgwLjI2LDE5LjM3IDgwLjI2LDIxLjQgNzguNTEsMjEuNCA3OC41MSwzMS45NyA4MC4yNiwzMS45NyAKCQk4MC4yNiwzMy45OSA3NC4wMywzMy45OSA3NC4wMywzMS45NyA3NS44MSwzMS45NyA3NS44MSwyNy43OSA2OS4xNSwyNy43OSA2OS4xNSwzMS45NyA3MC45MiwzMS45NyA3MC45MiwzMy45OSA2NC43LDMzLjk5IAkiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik04Mi4zMiwzMS45N2gxLjc1VjIxLjRoLTEuNzV2LTIuMDRoNi40NWMxLjA3LDAsMS45NiwwLjA2LDIuNzgsMC4zMWMxLjY1LDAuNTYsMi43LDEuODUsMi43LDMuOTEKCQljMCwyLjA2LTEuMDUsMy40OC0yLjc2LDQuMDZ2MC4wNGwwLjI1LDAuMTljMC4xNCwwLjE0LDAuMzMsMC4zMSwwLjQ3LDAuNThsMS42OSwzLjA1YzAuMjMsMC4zOSwwLjQ5LDAuNDcsMC45OSwwLjQ3aDAuNDd2Mi4wMgoJCWgtMS43MWMtMS4xOSwwLTEuNTktMC4yNS0yLjA0LTEuMDlsLTIuMDgtMy43N2MtMC4zMS0wLjU2LTAuNTgtMC43NC0xLjQyLTAuNzRoLTEuMzR2My41OGgxLjY5djIuMDJoLTYuMTRWMzEuOTd6IE04OS4yLDI2LjIzCgkJYzEuNDIsMCwyLjM1LTAuODQsMi4zNS0yLjQxYzAtMC45Ny0wLjM1LTEuNjktMS4xNS0yLjAyYy0wLjM5LTAuMTktMC45NS0wLjI3LTEuNjUtMC4yN2gtMS45OHY0LjdIODkuMnoiLz4KPC9nPgo8L3N2Zz4K" alt=""/>
        </AppBar>
        <Box sx={{marginTop:'4.5%',backgroundColor: "rgb(57, 190, 250)",height:'120vh',width:'100%'}}>
            <Box sx={{height:'10%',color:'white',width:'70%',margin:'auto',paddingTop:'20px',paddingBottom:'30px',textAlign:'center'}}>
                <Typography variant="h4" sx={{margin:'2%'}}>Try greytHR free for 7 days</Typography>
                <Typography sx={{fontSize:'1.6rem'}}>Simplify your everyday HR tasks and increase productivity.</Typography>
            </Box>
            <Box sx={{width:'65%',margin:'auto',height:'400px',marginTop:'2%'}}>
                <Toolbar>
                    <Box sx={{height:'350px',margin:'2%',backgroundColor:'white',width:'50%',borderRadius:'2px',color:'grey',textAlign:'center'}}>
                        <form style={{textAlign:'center'}}>
                        <input ref={props.inpval} type='text' placeholder="Enter Your work Email" style={{border:'1px solid rgb(179, 169, 169)',borderRadius:'2px',marginTop:'10%',width:'80%',height:'30px'}}/>
                        <ReCAPTCHA ref={props.check} sx={{paddingBottom:'12px'}} sitekey=' 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                 secretkey=' 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'/>
                        <Button variant="contained" sx={{width:'80%',backgroundColor:'rgb(57, 190, 250)',marginTop:'5%'}} onClick={props.freeBtn}>CREATE FREE TRIAL ACCOUNT</Button>
                        <Typography>(No credit card details required at sign up)</Typography>
                        </form>
                    </Box>
                    <Box sx={{height:'350px',width:'50%',color:'white'}}>
                        <Toolbar>
                            <img src="https://www.datocms-assets.com/40521/1614675502-sunil-stellar-innovations.png?auto=format&w=74" alt=""/>
                            <Typography>"Payroll processing has never been so easy. greytHR’s employee self service module truly empowers all our employees."</Typography>
                        </Toolbar>
                        <Typography sx={{margin:'5%',fontStyle:'italic'}}>Mr. Sunil Kumar, Assistant Vice President Stellar Innovations</Typography>
                        <Toolbar sx={{marginTop:'5%'}}>
                            <img src="https://www.datocms-assets.com/40521/1614675506-tausif-cp-seeds.png?auto=format&w=74" alt=""/>
                            <Typography >"Our HR operations have become so much easier, accurate & simple after using greytHR."</Typography>
                        </Toolbar>
                        <Typography sx={{margin:'5%',fontStyle:'italic'}}>Mr. Tausif, HR Manager CP Seeds</Typography>
                    </Box>
                </Toolbar>
            </Box>
            <Box sx={{textAlign:'center',color:'white'}}>
                <Typography variant="h5">India’s No 1 payroll & HR software | Trusted by companies like</Typography>
                <img src="https://www.greythr.com/static/5c75d58a3d9acf96b217c927b8c97dad/51e99/signup-customer-logo-lg.webp" alt=""/>
            </Box>
        </Box>
    </React.Fragment>
  )
}

export default FreeTrial