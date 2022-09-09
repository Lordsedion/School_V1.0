import React from "react"
import './aboutpage.css'
import Footer from "../../components/footer/Footer.jsx"
import img from '../../../static/Images/slide20.bg.jpg'
import img4 from '../../../static/Images/slide22.bg.jpg'
import img1 from '../../../static/Images/slide19.bg.jpg'
import img3 from '../../../static/Images/slide18.bg.jpg'
import img2 from '../../../static/Images/slide15.bg.jpg'

export default class AboutPage extends React.Component {
    index1 = 0
    index2 = 0
    index3 = 0
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.timer_id = setInterval(() => this.updateTime1(), 12000)
        this.timer_id1 = setInterval(() => this.updateTime2(), 13000)
        this.timer_id2 = setInterval(() => this.updateTime3(), 17000)
    }
    componentWillUnmount() {
        clearInterval(this.timer_id);
        clearInterval(this.timer_id1);
        clearInterval(this.timer_id2);
    }
    nextslide(no) {
        if (no === 1) {
            let slide = document.getElementById('sw-facc-id1').children
            slide[this.index1].classList.add('none')

            if (this.index1 + 1 >= slide.length) { this.index1 = 0 }
            else { this.index1 += 1 }
            slide[this.index1].classList.remove('none')
            slide[this.index1].classList.add('fade-to-block')
        }
        else if (no === 2) {
            let slide1 = document.getElementById('sw-facc-id2').children
            slide1[this.index2].classList.add('none')

            if (this.index2 + 1 >= slide1.length) { this.index2 = 0 }
            else { this.index2 += 1 }
            slide1[this.index2].classList.remove('none')
            slide1[this.index2].classList.add('fade-to-block')
        }
        else if (no === 3) {
            let slide2 = document.getElementById('sw-facc-id3').children
            slide2[this.index3].classList.add('none')

            if (this.index3 + 1 >= slide2.length) { this.index3 = 0 }
            else { this.index3 += 1 }
            slide2[this.index3].classList.remove('none')
            slide2[this.index3].classList.add('fade-to-block')
        }
        else { return 0 }

    }
    lastslide(no) {
        if (no === 1) {
            let slide = document.getElementById('sw-facc-id1').children
            slide[this.index1].classList.add('none')

            if (this.index1 - 1 < 0) { this.index1 = slide.length - 1 }
            else { this.index1 -= 1 }
            slide[this.index1].classList.remove('none')
            slide[this.index1].classList.add('fade-to-block')
        }
        else if (no === 2) {
            let slide1 = document.getElementById('sw-facc-id2').children
            slide1[this.index2].classList.add('none')

            if (this.index2 - 1 < 0) { this.index2 = slide1.length - 1 }
            else { this.index2 -= 1 }
            slide1[this.index2].classList.remove('none')
            slide1[this.index2].classList.add('fade-to-block')
        }
        else if (no === 3) {
            let slide2 = document.getElementById('sw-facc-id3').children
            slide2[this.index3].classList.add('none')

            if (this.index3 - 1 < 0) { this.index3 = slide2.length - 1 }
            else { this.index3 -= 1 }
            slide2[this.index3].classList.remove('none')
            slide2[this.index3].classList.add('fade-to-block')
        }
        else { return 0 }

    }
    updateTime1() {
        let slide = document.getElementById('sw-facc-id1').children
        slide[this.index1].classList.add('none')

        if (this.index1 + 1 >= slide.length) { this.index1 = 0 }
        else { this.index1 += 1 }
        slide[this.index1].classList.remove('none')
        slide[this.index1].classList.add('fade-to-block')
    }
    updateTime2() {
        let slide1 = document.getElementById('sw-facc-id2').children
        slide1[this.index2].classList.add('none')

        if (this.index2 + 1 >= slide1.length) { this.index2 = 0 }
        else { this.index2 += 1 }
        slide1[this.index2].classList.remove('none')
        slide1[this.index2].classList.add('fade-to-block')
    }
    updateTime3() {
        let slide2 = document.getElementById('sw-facc-id3').children
        slide2[this.index3].classList.add('none')

        if (this.index3 + 1 >= slide2.length) { this.index3 = 0 }
        else { this.index3 += 1 }
        slide2[this.index3].classList.remove('none')
        slide2[this.index3].classList.add('fade-to-block')
    }

    render() {
        return (
            <section id="aboutPage">
                <div className="ab-section-lord">
                    <div className="abtttt">
                        <h1>About Us</h1>
                        <p className="about-us-rr-text">We are a community of learners and we believe that education empowers each student with the tools they need to achieve their dreams. The teachers here
                            at Lordseidon High School are passionate about teaching, and will go above and beyond to ensure your experience here is a happy one. We hope that you
                            will bring your knowledge and energy to class every day because there are so many good things waiting for you when you graduate from this school.
                            {/* Dear students, it is our honor to serve you. We are a school that values learning and we work hard to ensure that each of you gets the individualistic
                        attention you deserve. Our teachers are passionate about teaching and will do everything in their power to foster your academic growth. We hope that
                        you will carry this school with pride when you graduate from this institution*/}</p>
                    </div>
                    <div className="about-container">
                        <div className="blog-post-content">
                            <h2 className="h2-wlc-title">Welcome message from the principal</h2>
                            <div className="blog-about-p">
                                <p className="blog-post-content-text">
                                    <b>Dear Students,</b> We would first like to welcome you to Henry Ford Middle School. We are a community of learners who believe in the power of education to
                                    empower each student with the tools they need to achieve their dreams. Our teachers are passionate about teaching and will go above and beyond make sure
                                    your experience here is a happy one. We really hope that each of you will bring your knowledge and energy to class every day because there are so many
                                    good things waiting for you when you graduate from this school.
                                    We are a community of learners and we believe that education empowers each student with the tools they need to achieve their dreams.
                                    {/*The teachers here
                                at Henry Ford Middle School are passionate about teaching, and will go above and beyond to ensure your experience here is a happy one. We hope that you
                                will bring your knowledge and energy to class every day because there are so many good things waiting for you when you graduate from this school.
                                Dear students, it is our honor to serve you. We are a school that values learning and we work hard to ensure that each of you gets the individualistic
                                attention you deserve.  Our teachers are passionate about teaching and will do everything in their power to foster your academic growth. We hope that
                                you will carry this school with pride when you graduate from this institution
                                HPMS is a learning community which fosters intellectual growth and development. Teachers are expertly trained and they are dedicated to creating a positive
                                learning experience. As you enter the doors of Henry Ford Middle School, our staff will welcome you with open arms, encouraging you to work hard and do your
                                best. We hope that your relationship with Henry Ford Middle School will stay strong throughout the years, leading you to a future of success.
                                As a student of Henry Ford Middle School, we expect you to work hard and learn the essential material. There are many resources here to help you succeed." */}
                                </p>
                                <img src={img1} alt="img" className="blg-img" />
                            </div>
                        </div>
                        <div className="teachers-section-display">
                            <h2 className="meet-staffs">Meet Our Staffs</h2>
                            <div className="staffs-items">
                                <div className="teacher-item">
                                    <div className="staff-intro">
                                        <img src={img} alt="Staffs" className="teacher-img-abt-o" />
                                    </div>
                                    <div className="stcduif">
                                        <h3 className="staff-name">HOD Maths Department: Mavin James</h3>
                                        <p className="staff-tro-t"> As you enter the doors of Henry Ford Middle School, we encourage you to work hard and do your
                                            best. We hope that your relationship with Henry Ford Middle School will stay strong throughout the years, leading you to a future of success.</p>
                                    </div>

                                </div>
                                <div className="teacher-item">
                                    <div className="staff-intro">
                                        <img src={img} alt="Staffs" className="teacher-img-abt-o" />
                                        \                                    </div>
                                    <div className="stcduif">
                                        <h3 className="staff-name">HOD Science Department:Mavin James</h3>
                                        <p className="staff-tro-t"> As you enter the doors of Henry Ford Middle School, we encourage you to work hard and do your
                                            best. We hope that your relationship with Henry Ford Middle School will stay strong throughout the years, leading you to a future of success.</p>
                                    </div>

                                </div>
                                <div className="teacher-item">
                                    <div className="staff-intro">
                                        <img src={img4} alt="Staffs" className="teacher-img-abt-o" />
                                        \                                    </div>
                                    <div className="stcduif">
                                        <h3 className="staff-name">HOD Science Department:Mavin James</h3>
                                        <p className="staff-tro-t"> As you enter the doors of Henry Ford Middle School, we encourage you to work hard and do your
                                            best. We hope that your relationship with Henry Ford Middle School will stay strong throughout the years, leading you to a future of success.</p>
                                    </div>

                                </div>
                                <div className="teacher-item">
                                    <div className="staff-intro">
                                        <img src={img4} alt="Staffs" className="teacher-img-abt-o" />
                                        \                                    </div>
                                    <div className="stcduif">
                                        <h3 className="staff-name">HOD Science Department:Mavin James</h3>
                                        <p className="staff-tro-t"> As you enter the doors of Henry Ford Middle School, we encourage you to work hard and do your
                                            best. We hope that your relationship with Henry Ford Middle School will stay strong throughout the years, leading you to a future of success.</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="show-school-facilities">
                            <h2 className="meet-staffs">Conducive Learning Environments</h2>
                            <div className="section-sw-facc">
                                <div className="sw-facc-item">
                                    <div className="sw-facc-item-img-slide">
                                        <div id="sw-facc-id1">
                                            <img src={img1} alt="img" className="sw-facc-img" />
                                            <img src={img2} alt="img" className="sw-facc-img none" />
                                            <img src={img3} alt="img" className="sw-facc-img none" />
                                        </div>

                                        <span className="slide-left-arr-w" onClick={() => this.lastslide(1)}>❮</span>
                                        <span className="slide-right-arr-w" onClick={() => this.nextslide(1)}>❯</span>
                                    </div>
                                    <h2 className="sw-facc-t">Creche Class</h2>
                                </div>
                                <div className="sw-facc-item">
                                    <div className="sw-facc-item-img-slide" >
                                        <div id="sw-facc-id2">
                                            <img src={img2} alt="img" className="sw-facc-img" />
                                            <img src={img1} alt="img" className="sw-facc-img none" />
                                            <img src={img3} alt="img" className="sw-facc-img none" />
                                        </div>
                                        <span className="slide-left-arr-w" onClick={() => this.lastslide(2)}>❮</span>
                                        <span className="slide-right-arr-w" onClick={() => this.nextslide(2)}>❯</span>
                                    </div>
                                    <h2 className="sw-facc-t">Primary One</h2>
                                </div>
                                <div className="sw-facc-item">
                                    <div className="sw-facc-item-img-slide" >
                                        <div id="sw-facc-id3">
                                            <img src={img3} alt="img" className="sw-facc-img" />
                                            <img src={img1} alt="img" className="sw-facc-img none" />
                                            <img src={img2} alt="img" className="sw-facc-img none" />
                                        </div>
                                        <span className="slide-left-arr-w" onClick={() => this.lastslide(3)}>❮</span>
                                        <span className="slide-right-arr-w" onClick={() => this.nextslide(3)}>❯</span>
                                    </div>
                                    <h2 className="sw-facc-t">Laboratories</h2>
                                </div>
                            </div>
                        </div>

                        <div className="section-appage345">
                            <h2 className="meet-staffs" id='addmmiissiioonnn'>Admissions</h2>
                            <h3 className="admission-11t">Are you a parent of a child who is entering the school? </h3>
                            <h4 className="admission-11t">Admission and enrolment are open to new Students in the following classes: </h4>
                            <div className="section-admot-cl33-container">
                                <h2 className="section-admot-cl33">Creche</h2>
                                <h2 className="section-admot-cl33">Nursery 1</h2>
                                <h2 className="section-admot-cl33">Kindergaten</h2>
                                <h2 className="section-admot-cl33">Primary 1</h2>
                                <h2 className="section-admot-cl33">Junior Secondary School</h2>
                                <h2 className="section-admot-cl33">Senior Secondary School</h2>
                            </div>
                            <h4 className="admission-11t">If you are interested in learning more about our school, please come and visit us. We would love to show you around and answer all of your questions. We also offer complete information on how to apply.</h4>
                        </div>
                        <Footer/>
                    </div>
                </div>

            </section>
        )
    }
}