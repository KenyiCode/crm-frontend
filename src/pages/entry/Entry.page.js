import React, {useState} from "react"
import "./Entry.style.css"
import {LoginForm} from "../../components/login/Login.comp"
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp"

export const Entry = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [frmLoad, setFrmLoad] = useState(true)

    const handleOnChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                break
        }
        console.log(name, value)
    }

    function reset () {
        setFrmLoad((frmLoad) => !frmLoad)
    }


    const onSubmit = e => {
        e.preventDefault()
        if (!email || !password){
            alert ("Fill in email or password field.")
        }
        console.log(email + "\n" + password)
    }

    const onResetSubmit = e => {
        e.preventDefault()
        if (!email){
            alert ("Fill in email field.")
        }
        console.log(email)
    }

    return (
        <div className="entry-page bg-info">
            <h1 className="jumbotron">
                {frmLoad && 
                <LoginForm 
                    email={email}
                    pass={password}
                    handleOnChange={handleOnChange}
                    onSubmit={onSubmit}
                    reset={reset} />
                }
                { !frmLoad &&
                <ResetPassword 
                    email={email}
                    handleOnChange={handleOnChange}
                    onResetSubmit={onResetSubmit}
                    reset={reset} />
}
            </h1>
        </div>
    )
}