import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <img
                src={require("../images/troll-face.png")}
                className="header--image"
            />
        </header>
    )
}