import { MouseEventHandler } from "react"

const UserProfFooter = ({isEdited,cancelChanges}:{isEdited:boolean,cancelChanges:MouseEventHandler<HTMLButtonElement>}) => {
  
  return (
    <div className="footer">
    <button disabled={!isEdited} type="submit" style={{background:"rgb(95, 151, 11)"}}>save changes</button>
    <br/>
    <button disabled={!isEdited} onClick={cancelChanges} style={{background:"rgb(169, 16, 16)"}}>Cancel</button><br/>
</div>
  )
}

export default UserProfFooter