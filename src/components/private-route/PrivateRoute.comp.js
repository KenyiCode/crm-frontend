import React from "react"
import {
    Navigate
} from "react-router-dom"
import { DefaultLayout } from "../../layout/DefaultLayout"

const isAuth = true

export const PrivateRoute = ({children, ...rest}) => {
    return isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Navigate to="/" />
}