import React,{useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'

import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
{
id:1,
imgSrc: img,
destTitle: 'Munnar',
location: 'Idukki District, Kerala',
grade: 'HILL STATION',
fees: '₹4200',
description: 'A hill station and former resort for the British Raj elite, it is surrounded by rolling hills dotted with tea plantations established in the late 19th century.'
},


{
id:2,
imgSrc: img2,
destTitle: 'Ooty',
location: 'Nilgiris District, TamilNadu',
grade: 'HILL STATION',
fees: '₹3000',
description: 'Panoramic views of the blue hills and lush greenery, the landscape of Ooty promises a great number of beautiful memories for the tourists.'
},


{
id:3,
imgSrc: img3,
destTitle: 'Taj Mahal',
location: 'Agra, Uttar Pradesh',
grade: 'MONUMENT',
fees: '₹6000',
description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna.Also one of the world’s most iconic monuments.'
},


{
id:4,
imgSrc: img4,
destTitle: 'Alappuzha',
location: 'Alappuzha district, Kerala',
grade: 'BOAT HOUSE',
fees: '₹2000',
description: 'It is best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons,site of the 19th-century Alappuzha Lighthouse.'
},


{
id:5,
imgSrc: img5,
destTitle: 'Wayanad',
location: 'North-east of Kerala',
grade: 'FOREST TYPE',
fees: '₹2500',
description: 'One of the best things to do in Wayanad is to visit the famous Wildlife Sanctuary, which is one of the top Wayanad tourist attractions. Spread over an area of 344 sq kms'
},


{
id:6,
imgSrc: img6,
destTitle: 'Kodaikanal',
location: 'Dindigul district, TamilNadu',
grade: 'HILL STATION',
fees: '₹1200',
description: 'Kodaikanal is one of the very popular holiday destination hill resorts in South India. Kodaikanal is also popularly known as the princes of Hill Stations,known for its rich flora.'
},


{
id:7,
imgSrc: img7,
destTitle: 'Mysore Palace',
location: 'Mysore, Karnataka',
grade: 'HISTORICAL PALACE ',
fees: '₹4300',
description: 'One of the most visited monuments in India. And is one of the largest palaces in the country, it is also known as Amba Vilas Palace, which was the residence of the Wodeyar Maharajas of the Mysore state.'
},


{
id:8,
imgSrc: img8,
destTitle: 'Manali',
location: 'Kullu district, Himachal Pradesh',
grade: 'HILL STATION',
fees: '₹6500',
description: 'A gift of the himalayas to the world, a rustic enclave known for its cool climate and snow-capped mountains.The tourism industry in Manali started booming because of its natural bounties & salubrious climate.'
},


{
id:9,
imgSrc: img9,
destTitle: 'Coorg',
location: 'Kodagu district, Karnataka',
grade: 'HILL STATION',
fees: '₹4000',
description: 'Surrounded by majestic mountain ranges and boasting a lush green landscape, Coorg or Kodagu is yet another cliched holiday destination that is worth the hype. A popular weekend getaway for nature lovers and solace seekers.'
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
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} 
                            data-aos="fade-up"
                            className="singleDestination">
                                { }

                                 <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
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