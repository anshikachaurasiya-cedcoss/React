import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attendance from './Components/Attendance';
import Employee from './Components/Employee';
import Home from './Components/Home';
import HrSoftware from './Components/HrSoftware';
import LeaveManagement from './Components/LeaveManagement';
import Customers from './Components/Customers'
import Payroll from './Components/Payroll';
import Pricing from './Components/Pricing';
import { ResourceLibrary } from './Components/ResourceLibrary';
import Blogs from './Components/Blogs';
import Guides from './Components/Guides';

function App() {
  const arr =[
    {label1:'PAYROLL PROCESSING + STATUTORY COMPLIANCE',
    p1:'Process Payroll accurately',
    p2:'disburse payslips with one click',
    p3:'100% stauatory compliance with PF/ESI/PT/TDS etc.',
    img:'https://www.greythr.com/home/ghr_payroll.svg'},

    {label1:'LEAVE MANAGEMENT',
     p1:'Define Your Company Leave your Policy',
     p2:'Leave Tracking and Complete Leave accounting',
     p3:'Access Accurate Leave balance and transactions, anytime',
      img:'https://www.greythr.com/home/ghr_leave_management.svg'},

     {label1:'ATTENDANCE MANAGEMENT',
      p1:'Capture real-time attendance from Access control / biometric machines',
      p2:'Define your company attendance policy',
      p3:'Daily accurate attendance status with email and SMS alerts',
    img:'https://www.greythr.com/home/ghr_attendance_management.svg'},

    {label1:'EMPLOYEE LIFECYCLE MANAGEMENT',
    p1:'Manage employee records digitally',
    p2:'Generate HR letters',
    p3:'Track all company assets given to employees',
    img:'https://www.greythr.com/home/ghr_employee_management.svg'},

    {label1:'MOBILE APP FOR EMPLOYEES',
    p1:'Access payslips, reimbursements and tax info - anytime, anywhere',
    p2:'Raise trouble tickets via mobile Help Desk',
    p3:'Apply for Leave and get approvals online',
    img:'https://www.greythr.com/home/ghr_mobile.svg'}
  ]

  const arr2=[
    {img:'https://www.greythr.com/home/ghr_implementation.svg',
    heading:'PROFESSIONAL IMPLEMENTATION',
    content:'Expert implementation engineers drive your complete end-to-end account setup along with two-month on-boarding support.'},

    {img:'https://www.greythr.com/home/ghr_customer-care.svg',
    heading:'COMPLETE CUSTOMER CARE',
    content:'With a first response time lesser than 2 hours and a resolution time lesser than 6 hours for 85% of customer queries, you’ll love our Customer Care.'},

    {img:'https://www.greythr.com/home/ghr_guidance.svg',
    heading:'GUIDANCE FOR HR AND PAYROLL EXECS',
    content:'Join our growing list of 3000+ webinar participants to learn the latest HR and payroll best practices. Our free Expert Series Webinars host industry experts, wholl guide you on the latest learning requirements.'}
  ]
  const arr3=[
    {img:'https://www.datocms-assets.com/40521/1660214320-greythr_meets-2_300x175-v1.jpg?auto=format&dpr=0.84&w=300',
     heading:'Digitisation. The Path to HR',
     date:'August 11, 2022'},

     {img:'https://www.datocms-assets.com/40521/1660194234-hrms_blog-5-post_300x175-v1.jpg?auto=format&dpr=0.84&w=300',
      heading:'How Much Does an HRMS Cost?',
      date:'August 10,2022'},

    {img:'https://www.datocms-assets.com/40521/1655811284-featured-image-parichay-20-300x175-v1.jpg?auto=format&dpr=0.84&w=300',
    heading:'How does Employee Wellbeing Impact Business Productivity',
    date:'June 21,2022'}
  ]
  const arr4=[
    {heading:'HR & Payroll Administration',
    q1:'What is Payroll?',
    q2:'What is HRMS?',
    q3:'What is Statuatory Compliance',
    q4:'Guide to Leave management',
    q5:'Guide to Attendance Managaement',
    q6:'Holiday Lists 2021'},

    {heading:'Product',
    q1:'Payroll Software',
    q2:'HR Software',
    q3:'Leave Management System',
    q4:'Attendance Management System',
    q5:'Employee Self service',
    q6:'Mobile App for Employees'},

    {heading:'Knowledge Center',
    q1:'Help Documentation',
    q2:'Blog',
    q3:'Podcasts',
    q4:'Community Forums',
    q5:'Online Training',
    q6:'Statuatory Wiki'},

    {heading:'Company',
    q1:'About Us',
    q2:'Carriers',
    q3:'Media Kit',
    q4:'Plans and Pricing',
    q5:'Customers',
    q6:'Partners'}
  ]
  const arr5=[
    {img:'https://www.datocms-assets.com/40521/1662703425-parichay-28-featured-image-300x175-v1.jpg?auto=format&dpr=0.94&w=300',
     heading:'Digitisation. The Path to HR',
     date:'August 11, 2022'},

     {img:'https://www.datocms-assets.com/40521/1662703417-hrms-featured-image-9-300x175-v1.jpg?auto=format&dpr=0.94&w=300',
      heading:'How Much Does an HRMS Cost?',
      date:'August 10,2022'},

    {img:'https://www.datocms-assets.com/40521/1662023282-parichay-24-featured-image-300x175.jpg?auto=format&dpr=0.94&w=300',
    heading:'How does Employee Wellbeing Impact Business Productivity',
    date:'June 21,2022'}
  ]
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home array={arr} array2={arr2} array3={arr3} array4={arr4}/>}/>
        <Route path='/hrsoftware' element={<HrSoftware/>}/>
        <Route path='/payroll' element={<Payroll/>}/>
        <Route path='/leavemanagement' element={<LeaveManagement/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/employeeSelf' element={<Employee/>}/>
        <Route path='/customers' element={<Customers/>}/>
        <Route path='/pricing' element={<Pricing/>}/> 
        <Route path='/resourcelibrary' element={<ResourceLibrary array3={arr3}/>}/>
        <Route path='/blog' element={<Blogs array3={arr5}/>}/>
        <Route path='/guide' element={<Guides array3={arr5}/>} />
      </Routes>      
    </div>
  );
}

export default App;
