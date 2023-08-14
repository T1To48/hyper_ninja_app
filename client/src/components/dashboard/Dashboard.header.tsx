import { useAppDispatch} from "../../app/hooks";
import { openNewUrlModal } from "../../features/style.Slice";
import "../../styles/common/button.css";

const DashboardHeader = () => {
  const dispatch=useAppDispatch()

  return (
    <section className="dashboard-header">
      <h1>Overview</h1>
      <div onClick={() =>dispatch(openNewUrlModal())} className="add-new-server-btn-container">
        <span className="add-new-server-btn">NEW</span>
        &nbsp;
        <i className='bx bx-plus' />
      </div>
    </section>
  );
};

export default DashboardHeader;

// useEffect(()=>{
// if(isLoading){
//   console.log("isLoading")
// }
// // if(isNewUrlSuccess && newUrlData?.data!==undefined ){
// //   console.log("isSuccess",newUrlData)
// //   void reviveUrlById(newUrlData.data.id)
// // }
// if(isError){
//   console.log("isError",error)
// }
// },[newUrlData,isNewUrlSuccess,isLoading,isError,error])