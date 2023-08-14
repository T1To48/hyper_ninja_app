import { useGetUrlsQuery } from "../../features/api.slice";
import DashboardRow from "./Dashboard.row";
import { IUrlDoc } from "../index";
const DashboardBody = () => {
  const { data: response } = useGetUrlsQuery();

  return (
    <section className="dashboard-body">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Status</th>
            <th>Domain</th>
            <th>Last Revive</th>
            <th>Turn On/Off</th>
          </tr>
        </thead>

        <tbody>
          {response?.success && response.data.length > 0 ? (
            response.data.map((url: IUrlDoc, index: number) => {
              const { id, name, status, updatedAt, url: domain } = url;
              const lastRevive = new Date(updatedAt).toLocaleString();

              return (
                <DashboardRow
                  key={id}
                  listNo={index + 1}
                  id={id}
                  name={name}
                  status={status}
                  lastRevived={lastRevive}
                  domain={domain}
                />
              );
            })
          ) : (
            <tr>
              <td>List is Empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default DashboardBody;
