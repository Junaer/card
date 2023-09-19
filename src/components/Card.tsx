import React from 'react'

export default function Card({ children }: any) {
  console.log(children)
  return (
  <div className="card" style={{width: '18rem'}}>
    <>
      {children}
    </>
  </div>
  )
}
