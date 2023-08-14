import { useNavigate } from "react-router-dom";
import { Status } from "../../features/api.slice";
import OnOffSwitch from "./Dashboard.onOffSwitch";
import useToggleUrl from "../../hooks/useToggleUrl";

const DashboardRow = ({
  listNo,
  id,
  name,
  status,
  domain,
  lastRevived,
}: {
  listNo: number;
  id: string;
  name: string;
  status: Status;
  domain: string;
  lastRevived: string;
}) => {
  const navigate=useNavigate()
const [toggleUrl]=useToggleUrl({status,id})

return (
    <tr onClick={()=>navigate(`server-profile/${id}`)}>
      <td>{listNo}</td>
      <td>
        <img src="https://a5cend.netlify.app/favicon.ico" alt="IMG" />
        {name}
      </td>
      <td>
        <p className={`status ${status}`}>{status}</p>
      </td>
      <td>{domain}</td>
      <td>{lastRevived}</td>
      <td>
      <OnOffSwitch checked={status==="Off"?false:true} toggleUrl={toggleUrl}/>
      </td>
    </tr>
  );
};

export default DashboardRow;

    // const toggleUrl=async ():Promise<void>=>{
    //   const newStatus:Status=status==="Off"?"Loading":"Off"
    //   const updateObj={
    //     id,data:{status:newStatus}
    //   }
    //   try{
    //    const updatedUrl= await updateUrlById(updateObj).unwrap();
    //    if(updatedUrl.success &&updatedUrl.data.status!=="Off"){
       
    //      void reviveUrlById(id)
    //    }else if(updatedUrl.success &&updatedUrl.data.status==="Off")return;
    // else{
    //   throw new Error(JSON.stringify(updatedUrl))
    // }
    //   }catch(err){
    //     console.log("error in turning on/off the url, Error==>  ",err)
    //   }
      
    // }