import "../../styles/urlProfile/on_off_button.css"
const OnOffBtn = ({checked,isError,onClick}:{checked:boolean,isError:boolean,onClick:()=>void}) => {

  return (
    <div onClick={onClick}  className='on-off-btn'>
        <input type="checkbox" checked={checked} className={checked&&isError?"error":""} readOnly />
        <label ><i className='bx bx-power-off'/></label> 
    </div>
  )
}

export default OnOffBtn