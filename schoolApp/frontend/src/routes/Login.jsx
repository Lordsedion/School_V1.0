import React, { useState, useEffect } from 'react'
import { GiConsoleController } from 'react-icons/gi'
import './login.css'

export default function Login() {
    const [rData, setData] = useState("")
    const [name, setName] = useState("")
    const [user_name, setUsername] = useState("")
    const [token, setToken] = useState("")
    const [urll, setUrl] = useState("")
    const [errors, setErrors] = useState(false)
    const [password, setPas] = useState("")
    const [loading, setLoading] = useState(true)

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    useEffect(() => {
        if (sessionStorage.getItem('token') !== null) {
            window.location.replace('http://localhost:8000/portal')
        }
        else {
            setLoading(false)
        }
    }, [])

    const onsubmit = e => {
        e.preventDefault();

        const user = {
            "username": name,
            "password": password,
        }

        fetch('http://localhost:8000/api/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "X_CSRFToken" : csrftoken,
            },
            body: JSON.stringify(user)
        })
            .then(response => {
                return response.json().then((data) => {
                    console.log(data)
                    if (data[0]["refresh"] != null && data[0]["access"] != null) {
                        setData(JSON.stringify(data))
                        console.log("URL", data["url"])
                        setUsername(data["user_name"])
                        setToken(data["token"])
                        setUrl(data["url"])
                        sessionStorage.setItem('refresh', data[0].refresh)
                        sessionStorage.setItem('access', data[0].access)
                        sessionStorage.setItem('738BBN2QA4ESCQ7RI95OVG07NR5PE3OK1W3O6885FET', data[1].LGTHVZ1MMUFUCO1A2XJBPGJA5I0E6YUO966A4AWLB6OFI7U)
                        window.location.replace("http://localhost:8000/portal")
                        return data;
                    }
                    setErrors(true)
                }
                )
            })
    }
    let rdata = JSON.stringify(rData)
    console.log("Data", user_name, token, urll)


    return (
        <>
            {/* {loading === false && <h1>Log In</h1>} */}
            {errors === true && <h2>Username or Password Incorrect</h2>}
            {loading === false && (
                <section id="login-portal">
                    <div className="login-portal-div">
                        <form onSubmit={onsubmit}>
                            <label htmlFor="">Admission NO</label>
                            <input type="text" name="studentUsername"
                                id="stud-user-name" value={name}
                                autoComplete="off"
                                placeholder='Admission No'
                                onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="">Password</label>
                            <input type="password"
                                name="studentUserpassword"
                                id="stud-user-password"
                                autoComplete='off'
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPas(e.target.value)} />

                            <button type="submit">Log In</button>
                        </form>
                    </div>
                </section>
            )
            }

        </>

    )
}