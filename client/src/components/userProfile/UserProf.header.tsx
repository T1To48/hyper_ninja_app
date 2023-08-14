import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import { openDeleteUserModal } from '../../features/style.Slice'

const UserProfHeader = () => {
  const dispatch=useAppDispatch()
  return (
    <div className="delete-user-icon" onClick={(e)=>{e.stopPropagation();dispatch(openDeleteUserModal())}}>
    <i className="bx bx-trash" />
  </div>
  )
}

export default UserProfHeader