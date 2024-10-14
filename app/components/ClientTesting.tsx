'use client';
import React, { useState } from 'react'

const ClientTesting = ({children, data}) => {
    const [value, setValue] = useState("Rehan")
  return (
    <div>
      <p>This is Client Component and data by server component is {data}</p>
      {children}
    </div>
  )
}

export default ClientTesting;