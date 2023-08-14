import  { ChangeEvent } from 'react'

const UpdateUrlModalBody = ({field,value,onChange}:{field:string,value:string,
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}
  ) => {

  
  return (
    <div className="body">
      
          <input name={field} type="text" onChange={onChange} value={value} required/>
    </div>
  )
}

export default UpdateUrlModalBody;