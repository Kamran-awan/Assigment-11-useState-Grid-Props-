import React from 'react'

const ChildCom = (props:any) => {
    console.log(props);
    
  return (
    <div>
        
    
    <h1 className='text-md'>
        {props.name}
        {props.profession}
        {props.Company}
    </h1>
    </div>
    
  )
}

export default ChildCom