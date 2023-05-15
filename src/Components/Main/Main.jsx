import React,{useEffect} from 'react'
import './main.css'

//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaLink,FaMapMarkedAlt} from 'react-icons/fa'
import {TiWeatherPartlySunny} from 'react-icons/ti'
// import {BsFillPinMapFill} from 'react-icons/bs'

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
description: 'A hill station and former resort for the British Raj elite, it is surrounded by rolling hills dotted with tea plantations established in the late 19th century.',
link: 'https://en.wikipedia.org/wiki/Munnar',
maplink: 'https://goo.gl/maps/yFLaBAgn4iakEebU7?coh=178573&entry=tt',
weather: 'https://www.google.com/search?sxsrf=APwXEddjVuTjUDkt0PnweNdjkflCoWEqKA:1684127952138&q=Munnar&si=AMnBZoHuAvtgZKI-Th0f1LhDXstZff2ue30_LFYK9KhwWFyRukOb-_lpkQ0iUl-RdImJeJTkbKKUSm__jBotw-2lCA0V1e-yfQ%3D%3D&sa=X&ved=2ahUKEwjCnt_Cyfb-AhU9SmwGHSUADGMQ4rsJegQIIRAA&biw=1536&bih=750&dpr=1.25'
},


{
id:2,
imgSrc: img2,
destTitle: 'Ooty',
location: 'Nilgiris District, TamilNadu',
grade: 'HILL STATION',
fees: '₹3000',
description: 'Panoramic views of the blue hills and lush greenery, the landscape of Ooty promises a great number of beautiful memories for the tourists.',
link: 'https://en.wikipedia.org/wiki/Ooty',
weather: 'https://www.google.com/search?q=ooty+weather&oq=ooty+weather&aqs=chrome..69i57.10162j0j1&sourceid=chrome&ie=UTF-8'
},


{
id:3,
imgSrc: img3,
destTitle: 'Taj Mahal',
location: 'Agra, Uttar Pradesh',
grade: 'MONUMENT',
fees: '₹6000',
description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna.Also one of the world’s most iconic monuments.',
link: 'https://en.wikipedia.org/wiki/Taj_Mahal',
weather :'https://www.google.com/search?q=taj+mahal+weather&sxsrf=APwXEdch0CKNwPd05ny3E6NOqd55Ik65nA%3A1684142532812&ei=xPlhZM2WMcWhseMP5ZS-6AU&oq=Taj+Magweather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIABCiBDIFCAAQogQyBQgAEKIEMgUIABCiBDoHCCMQsQIQJzoGCAAQBxAeOgQIIxAnOg0IABCKBRCxAxCDARBDOgcIABCKBRBDOggIABAHEB4QCjoICAAQCBAHEB5KBAhBGABQAFjNHWD6LWgAcAF4AIABlwGIAeYHkgEDMy42mAEAoAEBwAEB&sclient=gws-wiz-serp'
},


{
id:4,
imgSrc: img4,
destTitle: 'Alappuzha',
location: 'Alappuzha district, Kerala',
grade: 'BOAT HOUSE',
fees: '₹2000',
description: 'It is best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons,site of the 19th-century Alappuzha Lighthouse.',
link: 'https://en.wikipedia.org/wiki/Taj_Mahal',
weather: 'https://www.google.com/search?q=alappuzha+weather&sxsrf=APwXEdf61Lwdc49oxyxaQcqwEAiL0XbOkQ%3A1684142582657&ei=9vlhZO_eJ-qfseMPm8qqwA0&oq=alapu+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMggIABAHEB4QCjIGCAAQBxAeMg8IABAIEAcQHhAPEPEEEAoyCggAEAgQBxAeEA8yCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgM6DQgAEIoFELEDEIMBEEM6BwgAEIoFEEM6BQgAEIAESgQIQRgAUABY_gtgkBloAHABeACAAX-IAcUEkgEDMS40mAEAoAEBwAEB&sclient=gws-wiz-serp'
},


{
id:5,
imgSrc: img5,
destTitle: 'Wayanad',
location: 'North-east of Kerala',
grade: 'FOREST TYPE',
fees: '₹2500',
description: 'One of the best things to do in Wayanad is to visit the famous Wildlife Sanctuary, which is one of the top Wayanad tourist attractions. Spread over an area of 344 sq kms.',
link: 'https://en.wikipedia.org/wiki/Wayanad_district',
weather: 'https://www.google.com/search?q=wayanad+weather&sxsrf=APwXEdcc_Viyjgfzkn8wpf_PnH5OqBkGBw%3A1684142607683&ei=D_phZLWpKb3WseMPmZGk0A4&oq=waya+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeMgYIABAHEB46BwgAEIoFEENKBAhBGABQAFi3BGD2E2gAcAF4AIABfogBuAOSAQMwLjSYAQCgAQHAAQE&sclient=gws-wiz-serp'
},


{
id:6,
imgSrc: img6,
destTitle: 'Kodaikanal',
location: 'Dindigul district, TamilNadu',
grade: 'HILL STATION',
fees: '₹1200',
description: 'Kodaikanal is one of the very popular holiday destination hill resorts in South India. Kodaikanal is also popularly known as the princes of Hill Stations,known for its rich flora.',
link: 'https://en.wikipedia.org/wiki/Kodaikanal',
weather: 'https://www.google.com/search?q=kodaikanal+weather&sxsrf=APwXEdftHwta4tTN7LfAdiNdpGYNhStw8w%3A1684142638120&ei=LvphZP_zBvPNseMP45Wa4Ac&oq=kodaika+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgoIABANEIAEELEDMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEMgcIABANEIAEOgoIABBHENYEELADOgoIABCKBRCwAxBDOgYIABAHEB46CwgAEIAEELEDEIMBOgUIABCABDoHCAAQigUQQ0oECEEYAFCzBljADmCTGGgCcAF4AIABpwGIAZ8HkgEDMC43mAEAoAEByAEKwAEB&sclient=gws-wiz-serp'
},


{
id:7,
imgSrc: img7,
destTitle: 'Mysore Palace',
location: 'Mysore, Karnataka',
grade: 'HISTORICAL PALACE ',
fees: '₹4300',
description: 'One of the most visited monuments in India. And is one of the largest palaces in the country, it is also known as Amba Vilas Palace, which was the residence of the Wodeyar Maharajas of the Mysore state.',
link: 'https://en.wikipedia.org/wiki/Mysore_Palace',
weather: 'https://www.google.com/search?q=mysore+palace+weather&sxsrf=APwXEdf6dlZtMopBCix4DM0FFHlhMWZt4w%3A1684142665914&ei=SfphZMeaN-DOseMPiamw0Ag&oq=mysore+pa+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgYIABAHEB4yCAgAEIoFEIYDMggIABCKBRCGAzIICAAQigUQhgMyCAgAEIoFEIYDOgoIABBHENYEELADOgoIABCKBRCwAxBDOg0IABCKBRCxAxCDARBDOgcIABCKBRBDOg0IABANEIAEELEDEIMBOgcIABANEIAEOhIIABCKBRCxAxCDARBDEEYQgAI6BQgAEIAEOggIABAIEAcQHkoECEEYAFCXBliwHmDKJ2gCcAF4AIABlQGIAZkIkgEDMC45mAEAoAEByAEKwAEB&sclient=gws-wiz-serp'
},


{
id:8,
imgSrc: img8,
destTitle: 'Manali',
location: 'Kullu district, Himachal Pradesh',
grade: 'HILL STATION',
fees: '₹6500',
description: 'A gift of the himalayas to the world, a rustic enclave known for its cool climate and snow-capped mountains.The tourism industry in Manali started booming because of its natural bounties & salubrious climate.',
link: 'https://en.wikipedia.org/wiki/Manali,_Himachal_Pradesh',
weather: 'https://www.google.com/search?q=manali+weather&sxsrf=APwXEdf6TQA_LUW6YTvznSHCZBYdKzooRg%3A1684142689814&ei=YfphZNGZMcuTseMP2eKrwA0&ved=0ahUKEwiRzpu2gPf-AhXLSWwGHVnxCtgQ4dUDCA8&uact=5&oq=manali+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCAAQigUQsQMQgwEQkQIyDggAEIoFELEDEIMBEJECMggIABCKBRCRAjIICAAQigUQkQIyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BggAEAcQHjoHCAAQigUQQzoKCAAQgAQQFBCHAkoECEEYAFAAWNQGYJ0KaABwAXgAgAF0iAGOBZIBAzEuNZgBAKABAcABAQ&sclient=gws-wiz-serp'
},


{
id:9,
imgSrc: img9,
destTitle: 'Coorg',
location: 'Kodagu district, Karnataka',
grade: 'HILL STATION',
fees: '₹4000',
description: 'Surrounded by majestic mountain ranges and boasting a lush green landscape, Coorg or Kodagu is yet another cliched holiday destination that is worth the hype. A popular weekend getaway for nature lovers and solace seekers.',
link: 'https://en.wikipedia.org/wiki/Kodagu_district',
weather: 'https://www.google.com/search?q=coorg+weather&sxsrf=APwXEdcO5X54o_O6TVL6rY4d8kxDpnLxag%3A1684142706839&ei=cvphZJjdMpWcseMP8NWtgAI&ved=0ahUKEwiY3qq-gPf-AhUVTmwGHfBqCyAQ4dUDCA8&uact=5&oq=coorg+weather&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCAAQigUQsQMQgwEQkQIyDggAEIoFELEDEIMBEJECMgUIABCABDIFCAAQgAQyCAgAEIoFEJECMggIABCKBRCRAjIFCAAQgAQyCAgAEIoFEJECMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6BggAEAcQHkoECEEYAFC7BljvDGD9D2gCcAF4AIABlwGIAboEkgEDMC41mAEAoAEByAEKwAEB&sclient=gws-wiz-serp'
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
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description,link,weather,maplink})=>{
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
                                            <h6>{fees}</h6>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <a href={link}>
                                        <button className='btn flex'>
                                            DETAILS<FaLink className="icon"/>
                                        </button>
                                    </a> &nbsp;
                                    <div className='desc flex'>
                                        <a href={weather}>    
                                            <button  className='map flex'> 
                                                <TiWeatherPartlySunny className="icon"/> 
                                            </button>
                                        </a>&nbsp;&nbsp;
                                        <a href={maplink}>
                                            <button  className='map flex' >
                                             <FaMapMarkedAlt className="icon"/>
                                            </button>
                                        </a>
                                        
                                    </div>    
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