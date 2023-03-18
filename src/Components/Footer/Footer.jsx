import React from 'react'
import './footer.css'
import video1 from '../../Assets/video.mp4'
import {FiChevronsRight, FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from 'react-icons/ai'
import {FaTripadvisor} from'react-icons/fa'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted 
                type="video/mp4"></video>
            </div>


            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className='btn flex' type='submit'>
                            SEND<FiSend className="icon"/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdOutlineTravelExplore className="icon"/> Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                        A paragraph is defined as “a group of sentences or a single sentence 
                        that forms a unit” (Lunsford and Connors 116). Length and appearance 
                        do not determine whether a section in a paper is a paragraph. For instance, 
                        in some styles of writing, particularly journalistic styles, 
                        a paragraph can be just one sentence long.
                        </div>

                        <div className="footerSocials flex">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/*Group-one*/}
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronsRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronsRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronsRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronsRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronsRight className="icon"/>
                                Payment
                            </li>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer