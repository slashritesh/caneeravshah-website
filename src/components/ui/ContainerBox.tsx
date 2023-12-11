import React from "react"


const ContainerBox = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="sm:px-36 px-5">
        {children}
    </div>
  )
}

export default ContainerBox