
import './MyAdvertsComponents.css'
import React, {useState, useEffect} from 'react'
import Navbar from './NavbarComponent'
import WhitePhoto from '../images/white-photo.png'

import axios from 'axios'

import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import CardPhoto from '../images/cardPhoto.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AdvertCard from './AdvertCard'
import useForm from './useForm'
import ExampleJSON from '../example.json'
import { baseUrl } from '../API/baseUrl'




const MyAdvertsComponent = () => {

     
    const [advertArray, setAdvertArray] = useState([])

    const {advertValuesExample, handleAdvertValuesChange, advertTitle } = useForm();



    const [filterValues, setFilterValues] = useState({
      city: "",
      district:"",
      neighbourhood:"",
      rooms : "",
      minPrice: null,
      maxPrice: null,
      minFloorArea:null,
      maxFloorArea:null,
      Page:1,
      PageSize: 12,
      orderByWith : ""
    })

 
    useEffect(() => {

      axios.post(baseUrl + '/api/Advert/filter', filterValues).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )


   
  

  
      
   

    }, [])


    

    

    
  return (
    <div className='myAdvertsComponentContainer'>
      
      <Navbar />

        <header className='reviewAdsHeader'>


          

        <div className='myAdsContainer'>
            <h3>My ads</h3>
          </div>
          <h3 className='reviewAds'>Ilanları incele</h3>

        </header>


        <div className="container">
  <div className="row">
    <div className="col-sm-4 firstColumn">
    <div className='filterSection myAdvertPage'>


<DropdownButton id="dropdown-basic-button" title="İl">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="İlçe">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Mahalle">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Fiyat Aralığı">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="Oda sayısı">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>


<DropdownButton id="dropdown-basic-button" title="m2">
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

<div className='filterButtonField'>
<button className='filterButton'>Filtrele</button>
</div>
</div>
    </div>
    <div className="col-sm-16 secondColumn">


    
      
    <ul className='cards' onChange={handleAdvertValuesChange}>
  
     
      
       {advertArray.length != 0 && advertArray.map((obj) => {
        
        return <AdvertCard id={obj.advertId} price={obj.price} title={obj.title} city={obj.city} district={obj.district} neighbourhood={obj.neighbourhood} floorArea={obj.floorArea} rooms={obj.rooms}  />
       
     })}
     
    
    
   
     
    </ul>
    </div>
    
  </div>
</div>
      



    
        </div>
     

     
       
  
   
  )
}

export default MyAdvertsComponent