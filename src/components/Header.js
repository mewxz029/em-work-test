import React from 'react'

function Header(props) {
    const { title } = props;
    return (
        <div>
            <header className="flex justify-center mt-10">
                <h1>{title}</h1>
            </header>
        </div>
    )
}

export default Header
