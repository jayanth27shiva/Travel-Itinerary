import React,{useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import img from '../../Assets/img(1).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
{
id:1,
imgsrc: img,
destTitle: 'Munnar',
location: 'Kerala',
grade: 'Hill Station',
fees: '₹700',
description: 'Virgin forests, savannah, rolling hills, scenic valleys, numerous streams, huge splashy waterfalls, sprawling tea plantations and winding walkways are all part of the great holiday experience on offer for a traveler to Munnar.Munnar is also known for Neelakurinji, a rare plant which flowers only once in twele years.'
},


{
id:2,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'Virgin forests, savannah, rolling hills, scenic valleys, numerous streams, huge splashy waterfalls, sprawling tea plantations and winding walkways are all part of the great holiday experience on offer for a traveler to Munnar.'
},


{
id:3,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:4,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:5,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:6,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:7,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:8,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


{
id:9,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '₹700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},
]

const Main = () => {

    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])


    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} 
                            data-aos="fade-up"
                            className="singleDestination">
                                { }

                                 <div className="imageDiv">
                                    <img src={img} alt={destTitle}/>
                                 </div>

                                 <div className="cardInfo">
                                    <h4 className="destTitle">
                                    {destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                         <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <h4>{grade}</h4>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                 </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        
    )
}

export default Main