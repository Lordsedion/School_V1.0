import React from 'react'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import './faq.css'

window.onload = function () {
    const Faqs = document.getElementsByClassName('f-qs')
    for (let i=0; i<Faqs.length; i++) {
        Faqs[i].addEventListener('click', () => {
            if (document.getElementsByClassName('faq-answer')[i].style.display == 'block') {
                document.getElementsByClassName('faq-answer')[i].style.display = 'none'
                document.getElementsByClassName('faq-icon')[i].innerHTML = '+'
            }
            else {
                for (let i=0; i<Faqs.length; i++) {
                    document.getElementsByClassName('faq-answer')[i].style.display = 'none'
                    document.getElementsByClassName('faq-icon')[i].innerHTML = '+'
                }
                document.getElementsByClassName('faq-answer')[i].style.display = 'block'
                document.getElementsByClassName('faq-icon')[i].innerHTML = '-'
            }
        })
    }
}
const Faq = () => {
    return (
        <section id="faq">
            <div className="faq-container container">
                <div className="faq-left">
                    <h1>Frequently Asked Questions</h1>
                    <div className="faq-items">
                        <div className="faq-item">
                            <div className="f-qs" >
                                <p className='faq-icon' >+</p> <p className="faq-question">Why is LordSeidon school any different?</p>
                            </div>
                            <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo est eius molestias, doloremque eaque in quos necessitatibus illum dolores rerum fugit aliquam ratione!</p>
                        </div>
                        <div className="faq-item">
                            <div className="f-qs" >
                                <p className='faq-icon' >+</p> <p className="faq-question">Why is LordSeidon school any different?</p>
                            </div>
                            <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo est eius molestias, doloremque eaque in quos necessitatibus illum dolores rerum fugit aliquam ratione!</p>
                        </div>
                        <div className="faq-item">
                            <div className="f-qs" >
                                <p className='faq-icon' >+</p> <p className="faq-question">Why is LordSeidon school any different?</p>
                            </div>
                            <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo est eius molestias, doloremque eaque in quos necessitatibus illum dolores rerum fugit aliquam ratione!</p>
                        </div>
                        <div className="faq-item">
                            <div className="f-qs" >                        <p className='faq-icon' >+</p> <p className="faq-question">Why is LordSeidon school any different?</p>
                            </div>
                            <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo est eius molestias, doloremque eaque in quos necessitatibus illum dolores rerum fugit aliquam ratione!</p>
                        </div>
                        <div className="faq-item">
                            <div className="f-qs" >                        <p className='faq-icon' >+</p> <p className="faq-question">Why is LordSeidon school any different?</p>
                            </div>
                            <p className="faq-answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, illo est eius molestias, doloremque eaque in quos necessitatibus illum dolores rerum fugit aliquam ratione!</p>
                        </div>
                    </div>
                </div>
                <div className="faq-right">
                    <h1>Contact us</h1>
                    <form action="post" method="post">
                        <div className="con-left">
                           <input type="text" name="name" id="name-con" placeholder='Your Name'/>
                        <input type="email" name="email" id="email-con" placeholder='Your Email'/>
                        <button type="submit" className='con-big-but'>Submit</button> 
                        </div>
                        <textarea name="con-con" id="con-content" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button type="submit" className='con-small-but'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Faq