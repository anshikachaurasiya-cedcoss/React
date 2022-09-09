import React, { useState } from 'react'
var sel=['Groceries','Veggies','Travelling','Miscellaneous'],sel2=['Expense','Income'],grocery=[],veggies=[],travel=[],misc=[],optVal='',ind='',sum=0
const Expense = () => {
  const [Groceries,setGroceries]=useState(grocery)
  const [Veggies,setVeggies]=useState(veggies)
  const [Travelling,setTravelling]=useState(travel)
  const [Miscllaneous,setMiscllaneous]=useState(misc)
  const [btnVal,setBtnval]=useState('Add Transaction')
  
  // select function

  const opHandler=(event)=>{
    optVal = event.target.value 
  }
  // add & Update function
  const addHandler=(event)=>{
    event.preventDefault()
    let Obj={},sum=0;
    let select2 =document.getElementById('sel2').selectedIndex    
    let txt = document.getElementById('text').value
    let amt = document.getElementById('amount').value
    if(btnVal==='Add Transaction'){
      if(select2===1){
        if(txt!=='' && amt!==''){
          if(optVal==='Groceries'){
            Obj.text=txt
            Obj.money=amt
            grocery.push(Obj)
            setGroceries([...grocery])
            grocery.map((item)=>{
              sum+=parseInt(item.money)
            })
            document.getElementById('gSum').innerHTML=sum
          }
          if(optVal==='Veggies'){
            Obj.text=txt
            Obj.money=amt
            veggies.push(Obj)
            setVeggies([...veggies])
            veggies.map((item)=>{
              sum+=parseInt(item.money)
            })
            document.getElementById('vSum').innerHTML=sum
          }
          if(optVal==='Travelling'){
            Obj.text=txt
            Obj.money=amt
            travel.push(Obj)
            setTravelling([...travel])
            travel.map((item)=>{
              sum+=parseInt(item.money)
            })
            document.getElementById('tSum').innerHTML=sum
          }
          if(optVal==='Miscellaneous'){
            Obj.text=txt
            Obj.money=amt
            misc.push(Obj)
            setMiscllaneous([...misc]) 
            misc.map((item)=>{
              sum+=parseInt(item.money)
            })
            document.getElementById('mSum').innerHTML=sum 
          }
          var exp =document.getElementById('money-minus').innerHTML
          exp = parseInt(exp)-parseInt(amt)
          document.getElementById('money-minus').innerHTML=exp
        }
      }
      if(select2===2){
        if(amt!==''){
          var inc = document.getElementById('money-plus').innerHTML
        inc= parseInt(inc)+parseInt(amt)
        document.getElementById('money-plus').innerHTML=inc
        }
      }     
    }
    if(btnVal==='Update Transaction'){
      var sel = document.getElementById('sel').selectedIndex
      if(sel===1){
        grocery[ind].text=txt
        grocery[ind].money=amt
        grocery.map((item)=>{
          sum+=parseInt(item.money)
        })
        document.getElementById('gSum').innerHTML=sum
      }
      if(sel===2){
        veggies[ind].text=txt
        veggies[ind].money=amt
        veggies.map((item)=>{
          sum+=parseInt(item.money)
        })
        document.getElementById('vSum').innerHTML=sum
      }
      if(sel===3){
        travel[ind].text=txt
        travel[ind].money=amt
        travel.map((item)=>{
          sum+=parseInt(item.money)
        })
        document.getElementById('tSum').innerHTML=sum
      }
      if(sel===4){
        misc[ind].text=txt
        misc[ind].money=amt
        misc.map((item)=>{
          sum+=parseInt(item.money)
        })
        document.getElementById('mSum').innerHTML=sum
      }
      var exp =document.getElementById('money-minus').innerHTML
      exp = parseInt(exp)-parseInt(amt)
      document.getElementById('money-minus').innerHTML=exp
      setBtnval("Add Transaction")
    }  
    var tot = document.getElementById('money-plus').innerHTML
    var ex = document.getElementById('money-minus').innerHTML
    var total = parseInt(tot)+parseInt(ex)
    document.getElementById('balance').innerHTML=total
    document.getElementById('text').value=''
    document.getElementById('amount').value=''      
  }

// edit function

  const editHandler=(event)=>{
    document.getElementById('sel2').selectedIndex=1
    let stat = event.target.getAttribute('status')
    ind = event.target.parentElement.getAttribute('index')
    let val = event.target.parentElement.getAttribute('value')
    let amtVal = event.target.getAttribute('value')
    if(stat==='Groceries'){
      document.getElementById('text').value=val
      document.getElementById('amount').value=amtVal
      document.getElementById('sel').selectedIndex=1
    }
    if(stat==='Veggies'){
      document.getElementById('text').value=val
      document.getElementById('amount').value=amtVal
      document.getElementById('sel').selectedIndex=2
    }
    if(stat==='Travelling'){
      document.getElementById('text').value=val
      document.getElementById('amount').value=amtVal
      document.getElementById('sel').selectedIndex=3
    }
    if(stat==='Miscellaneous'){
      document.getElementById('text').value=val
      document.getElementById('amount').value=amtVal
      document.getElementById('sel').selectedIndex=4
    }
    setBtnval('Update Transaction')
    let Expe = document.getElementById('money-minus').innerHTML
    amtVal = parseInt(Expe)+parseInt(amtVal)
    document.getElementById('money-minus').innerHTML=amtVal
    var tot = document.getElementById('money-plus').innerHTML
    var ex = document.getElementById('money-minus').innerHTML
    var total = parseInt(tot)+parseInt(ex)
    document.getElementById('balance').innerHTML=total
  }

  // delete function
  const deleteHandler=(event)=>{
    let stat = event.target.getAttribute('status')
    let ind = event.target.parentElement.getAttribute('index')
    let s=0,x=0
    if(stat==='Groceries'){  
      s = document.getElementById('gSum').innerHTML  
      s = s-grocery[ind].money
      x = document.getElementById('money-minus').innerHTML
      x= parseInt(x)+parseInt(grocery[ind].money)
      grocery.splice(ind,1)
      setGroceries([...grocery])
      document.getElementById('gSum').innerHTML =s
      document.getElementById('money-minus').innerHTML=x
    }
    if(stat==='Veggies'){
      s = document.getElementById('vSum').innerHTML  
      s = s-veggies[ind].money
      x = document.getElementById('money-minus').innerHTML
      x= parseInt(x)+parseInt(veggies[ind].money)
      veggies.splice(ind,1)
      setVeggies([...veggies])
      document.getElementById('vSum').innerHTML =s
      document.getElementById('money-minus').innerHTML=x
    }
    if(stat==='Travelling'){
      s = document.getElementById('tSum').innerHTML  
      s = s-travel[ind].money
      x = document.getElementById('money-minus').innerHTML
      x= parseInt(x)+parseInt(travel[ind].money)
      travel.splice(ind,1)
      setTravelling([...travel])
      document.getElementById('tSum').innerHTML =s
      document.getElementById('money-minus').innerHTML=x
    }
    if(stat==='Miscellaneous'){
      s = document.getElementById('mSum').innerHTML  
      s = s-misc[ind].money
      x = document.getElementById('money-minus').innerHTML
      x= parseInt(x)+parseInt(misc[ind].money)
      misc.splice(ind,1)
      setMiscllaneous([...misc])
      document.getElementById('mSum').innerHTML =s
      document.getElementById('money-minus').innerHTML=x
    } 
    var tot = document.getElementById('money-plus').innerHTML
    var ex = document.getElementById('money-minus').innerHTML
    var total = parseInt(tot)+parseInt(ex)
    document.getElementById('balance').innerHTML=total    
  }
  return( 
    <div className="container">
    <h1 style={{color:'red'}}>Budget Planner</h1><br/>
    <h4>Your Balance</h4>
    <h1 id="balance">0.00</h1>
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">0.00</p>
        </div>
    </div>
    <h2>CATEGORIES</h2>
    <div className='total'><h4>Groceries</h4><h4 id='gSum'>Total=0</h4></div>
    
    <ul className='list'>
       {Groceries.map((object,i)=>  
       <li className='minus' index={i} value={object.text}>{object.text}<span>{object.money}</span>
       <button className="delete-btn" status='Groceries' onClick={deleteHandler}>x</button><button status='Groceries' className='edit-btn' onClick={editHandler} value={object.money}>Edit</button></li>)}
    </ul>
    <div className='total'><h4>Veggies</h4><h4 id='vSum'>Total=0</h4></div>
    <ul className='list'>
        {Veggies.map((object,i)=> 
        <li className='minus' index={i} value={object.text}>{object.text} <span>{object.money}</span>
        <button className='delete-btn' status='Veggies' onClick={deleteHandler}>X</button><button status='Veggies' className='edit-btn' value={object.money} onClick={editHandler}>Edit</button></li>)}
    </ul> 
    <div className='total'><h4>Travelling</h4><h4 id='tSum'>Total=0</h4></div>    
    <ul  className='list'>
    {Travelling.map((object,i)=> 
        <li className='minus' index={i} value={object.text}>{object.text} <span>{object.money}</span>
        <button className='delete-btn' status='Travelling' onClick={deleteHandler}>X</button><button status='Travelling' className='edit-btn' value={object.money} onClick={editHandler}>Edit</button></li>)}
    </ul>
    <div className='total'><h4>Miscellaneous</h4><h4 id='mSum'>Total=0</h4></div>
    <ul className='list'>
    {Miscllaneous.map((object,i)=> 
        <li className='minus' index={i} value={object.text}>{object.text} <span>{object.money}</span>
        <button className='delete-btn' status='Miscellaneous' onClick={deleteHandler}>X</button><button status='Miscellaneous' className='edit-btn' value={object.money} onClick={editHandler}>Edit</button></li>)}
    </ul>
    <h4>Add new transaction</h4><br/>
    <form>
        <div>
            <select id='sel'  onChange={opHandler}>
                <option>Select</option>
                {sel.map((item)=> <option value={item}>{item}</option>)}
            </select><br/>
            <label for="amount">Text</label>
            <input type="text" id="text" placeholder="Selected Categories Text..."/>
        </div>
        <div>
          <label for="amount">Amount</label>
          <input type="number" id="amount" placeholder="Enter amount..."/>
          <select id='sel2'>
            <option>Select</option>
            {sel2.map((item)=> <option>{item}</option>)}
          </select>
        </div>
        <button className="btn" onClick={addHandler}>{btnVal}</button>
    </form>
</div>
  )
}

export default Expense