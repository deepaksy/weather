import React from 'react'
import Head from 'next/head'
function layout({children, title}) {
    return (
        <>
        {title && (
            <Head>
                <title>{title} - Deepak suryawanshi</title>
                <link rel="icon" href="/BrandLogo.png" type="image/x-icon"/>
                <meta name="twitter:title" content={title} />
                <meta property="og:title" content={title} />
            </Head>
        )}
        {children}
        </>
    )
}

export default layout
