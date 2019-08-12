import React, { useEffect } from 'react'
import { getData, getMainCat } from '../actions/example.actions'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

export default props => {

  let num = 1
  useEffect(() => {
    getMainCat()
  }, [])
  
  const categories = useSelector(appState => appState.categories)

  console.log('first ', categories)

  return (

    <div className="container" > 

    <div className="left">
      <p className="ryans">Ryans List</p>
      <p className="account">account</p>
      <input className="search" type="text" placeholder="search craigslist"></input>

      <div>event calender</div>

      <div className="calender">
        <div className="days">M</div>
        <div className="days">T</div>
        <div className="days">W</div>
        <div className="days">T</div>
        <div className="days">F</div>
        <div className="days">S</div>
        <div className="days">S</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
        <div className="day">1</div>
      </div>

      <div className="section1">
      <p>help, faq, abuse, legal</p>
      <p>avoid scams & fraud</p>
      <p>personal safety tips</p>
      <p>terms of use</p>
      <p>privacy policy</p>
      <p>system status</p>
      </div>

      <div className="section2">
        <p>about craigslist</p>
        <p>craigslist is hiring in sf</p>
        <p>craigslist open source</p>
        <p>craigslist blog</p>
        <p>best-of-craigslist</p>
        <p>craigslist TV</p>
        <p>"craigslist joe"</p>
        <p>craig connects</p>
      </div>
      

    </div>
  

  <div className="middle">
        {categories.map((item, i) => (
          <div key={'item' + i} className="section">
          <h2 className="title">{item.name}</h2>
          {item.child_categories.map(cat => (
            <Link to={"/home/" + cat.slug} style={{textDecoration: 'none'}}><p className="subcats">{cat.name}</p></Link>
          )) }
          </div>
        ))}
        <div className="vegas">las vegas</div>
    </div>

    <div className="right">
      <select className="language">
      <option>english</option>
      <option>dansk</option>
      <option>duetsh</option>
      <option>espańol</option>
      <option>français</option>
      <option>italiano</option>
      <option>português</option>
      <option>suomi</option>
      <option>svenska</option>
      <option>tiêng viêt</option>
      <option>türkçe</option>
      <option>pyccknn</option>
      </select>     

      <div className="nearby">nearby cl</div>

      <div className="cities">
        <p>bakersfield</p>
        <p>elko</p>
        <p>flasgstaff</p>
        <p>fresno</p>
        <p>gold country</p>
        <p>hanford</p>
        <p>imperial co</p>
        <p>inland impire</p>
        <p>los angeles</p>
        <p>merced</p>
        <p>modesto</p>
        <p>mohave co</p>
        <p>orange co</p>
        <p>palm springs</p>
        <p>phoenix</p>
        <p>prescott</p>
        <p>provo</p>
        <p>reno</p>
        <p>salt lake</p>
        <p>san diego</p>
        <p>san luis obispo</p>
        <p>santa barbara</p>
        <p>santa maria</p>
        <p>show low</p>
        <p>st george</p>
        <p>stockton</p>
        <p>tucson</p>
        <p>ventura</p>
        <p>visalia-tulare</p>
        <p>yuma</p>
      </div>

    </div>

    </div>
  
  )
}