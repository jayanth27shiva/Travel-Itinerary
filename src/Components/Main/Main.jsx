import React from 'react'
import './main.css'


import img from '../../Assests/img.jpg'


const Data = [
{
id:1,
imgsrc: img,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '$700',
description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
},


// {
// id:2,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:3,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:4,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:5,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:6,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:7,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:8,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },


// {
// id:9,
// imgsrc: img,
// destTitle: 'Bora Bora',
// location: 'New Zealand',
// grade: 'CULTURAL RELAX',
// fees: '$700',
// description: 'The epitone of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous actvities.'
// },
]

const Main = () => {
    return (
        <section className='main container section'>

            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=>{
                        return(
                            <div key={id} className="singleDestination">
                                { }
                            </div>
                        )
                    })
                }
            </div>
        </section>
        
    )
}

export default Main