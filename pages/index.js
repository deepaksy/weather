import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
class index extends Component {
     title = "Home"
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{this.title}-Deepak suryawanshi</title>
                </Head>
                <h1>Welcome to my project</h1>

                <Link href="/testcomponent" passHref>
                <h6>Component test area:</h6>
                </Link>
            </React.Fragment>
        )
    }
}

export default index
