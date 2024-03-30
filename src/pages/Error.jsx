import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Layout/Header'

function Error() {
    return (
        <div>
            <main className="error_container">
                <Header />
                <div className="error">
                    <div className="error_title">
                        <h1 className="error_title_number">404</h1>
                        <p className="error_title_message">
                            Oups ! La page que vous demandez n'existe pas.
                        </p>
                    </div>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
        </div>
    )
}

export default Error
