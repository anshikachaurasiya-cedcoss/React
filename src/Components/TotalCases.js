import React from 'react'

const TotalCases = (props) => {
  return(
  <div className='mainTableDiv'>
    <table>
        <tr>
            <th onClick={props.click} value='Continent'>Continent</th>
            <th onClick={props.click} value='Country/Region'>Country</th>
            <th onClick={props.click} value='Total Cases'>Total Cases</th>
            <th onClick={props.click} value='Total Deaths'>Total Deaths</th>
            <th onClick={props.click} value='Total Recoveries'>Total Recoveries</th>
        </tr>
        {props.arr.map((item,i)=>{
            return(
                <tr>
                    <td>{item.Continent}</td>
                    <td>{item.Country}</td>
                    <td>{item.TotalCases}</td>
                    <td>{item.TotalDeaths}</td>
                    <td>{item.TotalRecovered}</td>
                </tr>
            )
        })}
    </table>
    </div>
  )
}

export default TotalCases