import { UrlResObj, useGetUrlsQuery, useLazyGetUrlsQuery } from "../../features/api.slice";
import DashboardRow from "./Dashboard.row";

const DashboardBody = () => {
 const {data:response}=useGetUrlsQuery()


 
 return (
   <section className="dashboard-body">
      <table >
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Status</th>
            <th>Domain</th>
            <th>Last Revived {"url updatedAt"}</th>
            <th>N/A {"(on/off)"}</th>
          </tr>
        </thead>
        
        <tbody >
          {response?.success&&response.data.length>0?response.data.map((url:UrlResObj, index:number) => {
            
            const {id,  name, status, updatedAt, url:domain } = url;
            return (
              // <Link to={`server-profile/${id}`}>
              <DashboardRow
              key={id}
              listNo={index+1}
              id={id}
              name={name}
              status={status}
              lastRevived={updatedAt}
              domain={domain}
              />
              // </Link>
              
            );
          }):<tr><td>List is Empty</td></tr>}
        </tbody>
      </table>
    </section>
  );
};

export default DashboardBody;
