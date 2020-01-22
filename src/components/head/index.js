import React from 'react'
import { Helmet } from 'react-helmet'

export const Head = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Muli:400,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default Head
