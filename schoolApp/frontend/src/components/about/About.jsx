import React from 'react'
import casual1 from '../../../static/Images/casual1.bg.png'
import casual2 from '../../../static/Images/casual2.bg.png'
import casual3 from '../../../static/Images/casual3.bg.png'
import './about.css'



class About extends React.Component {
    index = 0
    timer = 0
    constructor(props) {
        super(props);
        this.state = { timerr: 0 }
    }
    componentDidMount() {
        this.timer_id = setInterval(() => this.updateTime(), 7000)
    }
    componentWillUnmount() {
        clearInterval(this.timer_id);
    }
    updateTime() {
        let sliderContainer = document.getElementById('slideshow-container-about')
        if (this.index < sliderContainer.children.length - 1) {
            this.nextSlide()
        }
        else {
            let sliderNo = sliderContainer.children[this.index]
            let sliderNow = sliderContainer.children[0]
            sliderNo.classList.add('none')
            sliderNow.classList.remove('none')
            this.index = 0
        }
    }
    nextSlide() {
        let sliderContainer = document.getElementById('slideshow-container-about')
        let sliderNo = sliderContainer.children[this.index]
        if (this.index < sliderContainer.children.length - 1) {
            this.index += 1
            let sliderNow = sliderContainer.children[this.index]
            sliderNo.classList.add('none')
            sliderNow.classList.remove('none')
        }

    }
    lastSlide() {
        let sliderContainer = document.getElementById('slideshow-container-about')
        let sliderNo = sliderContainer.children[this.index]
        if (this.index > 0) {
            this.index -= 1
            let sliderNow = sliderContainer.children[this.index]
            sliderNo.classList.add('none')
            sliderNow.classList.remove('none')
        }
    }
    render() {
        return (
            <section id="about">
                <h1 className="ab-t">About us</h1>
                <div className="bn-itms out-mb">
                            <img src={casual1} alt="Icon"/>
                                <div className="bn-title">Our Mission</div>
                                <div className="bn-text">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</div>
                        </div>
                <div className="bn-itms out-mb">
                            <img src={casual2} alt="Icon"/>
                                <div className="bn-title">Our Aim</div>
                                <div className="bn-text">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</div>
                        </div>
                <div className="bn-itms out-mb">
                            <img src={casual3} alt="Icon"/>
                                <div className="bn-title">Our Vision</div>
                                <div className="bn-text">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</div>
                        </div>
                <div className="r-ab-con container">
                    <div className="bn-cnt">
                        <div className="bn-itms">
                            <img src={casual1} alt="Icon"/>
                                <div className="bn-title">Our Mission</div>
                                <div className="bn-text">Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.</div>
                        </div>
                        <div className="bn-itms">
                            <img src={casual2} alt="Icon" />
                                <div className="bn-title">Our Aim</div>
                            <div className="bn-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus vitae ipsam ab earum dolorem dolorum impedit, perferendis consectetur rerum!</div>
                        </div>
                        <div className="bn-itms b-r">
                            <img src={casual3} alt="Icon" />
                                 <div className="bn-title">Our Vision</div>
                            <div className="bn-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita accusamus vitae ipsam ab earum dolorem dolorum impedit, perferendis consectetur rerum!</div>
                        </div>
                    </div>
                </div>
                <div id="about-container">
                    <h1 className="sl-ttl">Gallery</h1>
                    <div id="slideshow-container-about">
                        <div className="slide1-about fade slide-style-about">
                            <div className="about-im-t">
                                <h1 className="about-thick">LordSeidon Dragon</h1>
                                <div className="slide-text">I Came, I Saw, I Conquered</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>

                        </div>
                        <div className="slide2-about none fade slide-style-about" >
                            <div className="about-im-t">
                                <h1 className="about-thick">Zeus Donkey</h1>
                                <div className="slide-text">I Went, I Laughed, Boo Boo</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>

                        </div>
                        <div className="slide3-about none fade slide-style-about">
                            <div className="about-im-t">
                                <h1 className="about-thick">LordSeidon Dragon</h1>
                                <div className="slide-text">For What? Is it For Eba? Is it for garri? Is it for beans and dodo</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>
                        </div>
                        <div className="slide4-about none fade slide-style-about">
                            <div className="about-im-t">
                                <h1 className="about-thick">LordSeidon Dragon</h1>
                                <div className="slide-text">For What? Is it For Eba? Is it for garri? Is it for beans and dodo</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>
                        </div>
                        <div className="slide5-about none fade slide-style-about">
                            <div className="about-im-t">
                                <h1 className="about-thick">LordSeidon Dragon</h1>
                                <div className="slide-text">For What? Is it For Eba? Is it for garri? Is it for beans and dodo</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>
                        </div>
                        <div className="slide6-about none fade slide-style-about">
                            <div className="about-im-t">
                                <h1 className="about-thick">LordSeidon Dragon</h1>
                                <div className="slide-text">For What? Is it For Eba? Is it for garri? Is it for beans and dodo</div>
                                <div className="lrn-mr">Learn More</div>
                            </div>
                        </div>
                    </div>
                    <div id="slide-left" onClick={() => this.lastSlide()}>❮</div>
                    <div id="slide-right" onClick={() => this.nextSlide()}>❯</div>
                </div>
            </section>

        )
    }
}

export default About