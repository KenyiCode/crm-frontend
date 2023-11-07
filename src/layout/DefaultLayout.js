import React from "react"
import {Header} from "./partials/Header.comp"
import {Footer} from "./partials/Footer.comp"

export const DefaultLayout = () => {
    return (
        <div className="default-layout">
            <div className="header">
                <Header />
            </div>
            <main className="main">
                Main Page Content
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}