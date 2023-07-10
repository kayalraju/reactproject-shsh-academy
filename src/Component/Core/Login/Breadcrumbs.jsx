import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
    return (
        <>
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Login</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Login</li>
                        </ol>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Breadcrumbs
