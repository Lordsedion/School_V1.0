import React from 'react'
import './loader.css'

class LoaderIcon extends React.Component {
    id = 0
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        let ld = document.getElementById("loader-icon-text").innerHTML
        let new_string = ""
        for (let i = 0; i < ld.length; i++) {
            new_string += `<span>${ld[i]}</span>`
        }
        document.getElementById("loader-icon-text").innerHTML = new_string
        this.timer_id = setInterval(() => this.changeColor(), 200)
    }
    componentWillUnmount() {
        clearInterval(this.timer_id)
    }
    changeColor() {
        let loader_text = document.getElementById('loader-icon-text')
        if (this.id >= loader_text.children.length){
            this.id = 0
            for (let i=0; i<loader_text.children.length; i++) {
                loader_text.children[i].style.color = '#d3d0d0'
            }
        }
        loader_text.children[this.id].style.color = 'blue'
        this.id += 1
    }
    render() {
        return (
            <section id='loader-id'>
                <div className="loader-container">
                    <h1 id='loader-icon-text'>LordSeidon</h1>
                </div>
            </section>
        )
    }

}

export default LoaderIcon 