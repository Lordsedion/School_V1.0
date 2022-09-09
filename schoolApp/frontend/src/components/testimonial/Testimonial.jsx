import React from 'react'
import './testimonial.css'
import slide1 from '../../../static/Images/slide1.bg.jpg'
import slide3 from '../../../static/Images/slide7.bg.jfif'
import slide5 from '../../../static/Images/slide5.bg.jpg'
import slide6 from '../../../static/Images/slide6.bg.jfif'

class Testimonial extends React.Component {
    index = 0
    constructor(props) {
        super(props);
        this.state = { timer: 0 }
    }
    componentDidMount() {
        this.timer_id = setInterval(() => this.updateTime(), 7000)
    }
    componentWillUnmount() {
        clearInterval(this.timer_id);
    }
    updateTime() {
        let slideCon = document.getElementsByClassName('testimonial')
        
        if ((this.index) < slideCon.length -1) {
            document.getElementsByClassName('testimonial')[this.index].classList.add('none')
            this.index += 1
            document.getElementsByClassName('testimonial')[this.index].classList.remove('none')
        }
        else {
            document.getElementsByClassName('testimonial')[this.index].classList.add('none')
            this.index = 0
            document.getElementsByClassName('testimonial')[this.index].classList.remove('none')
        }
    }
    render() {
    return (
        <section id="testimonial">
            <h1>What Students Say About Us</h1>
            <div className="container testimonial-container">
                <div className="testimonials" id='test-slider'>
                    <div className="testimonial fade-left">
                        <img src={slide1} alt="Student" />
                        <div className="testi-right">
                            <h1 className="test-s-name">Bobby Fischer</h1>
                            <p className="stu-t">Education here is as good as it can get. With our fully equpped laboratories I learn things practically and theoretically. Success at Lordseidon High School is as easy as taking a candy from a baby.</p>
                        </div>
                    </div>
                    <div className="testimonial fade-left none">
                        <img src={slide3} alt="Student" />
                        <div className="testi-right">
                            <h1 className="test-s-name">Danny Okey</h1>
                            <p className="stu-t">Education here is as good as it can get. With our fully equpped laboratories I learn things practically and theoretically. Success at Lordseidon High School is as easy as taking a candy from a baby.</p>
                        </div>
                    </div>
                    <div className="testimonial fade-left none">
                        <img src={slide6} alt="Student" />
                        <div className="testi-right">
                            <h1 className="test-s-name">Sarah Anthony</h1>
                            <p className="stu-t">Education here is as good as it can get. With our fully equpped laboratories I learn things practically and theoretically. Success at Lordseidon High School is as easy as taking a candy from a baby.</p>
                        </div>
                    </div>
                    <div className="testimonial fade-left none">
                        <img src={slide5} alt="Student" />
                        <div className="testi-right">
                            <h1 className="test-s-name">Judit Misha</h1>
                            <p className="stu-t">Education here is as good as it can get. With our fully equpped laboratories I learn things practically and theoretically. Success at Lordseidon High School is as easy as taking a candy from a baby.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}}

export default Testimonial