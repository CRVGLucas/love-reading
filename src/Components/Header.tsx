import React from "react"
import './Header.scss'
import Input from "./Forms/Input"
import Button from "./Forms/Button"
export default function Header() {
    const [ search, setSearch] = React.useState('')
    return (
        <header className="header">
            <div>
                Logoasdasdsd
            </div>
            <div>
                <form className="form">
                    <Input type="search" placeholder="Buscar por..." name="search" onChange={ ( { target } : { target: any} ) =>{ setSearch( target.value ) }  } />
                    <Button type="search" text=" "/>
                </form>
            </div>
            <div>
                Login
            </div>
        </header>
    )
}