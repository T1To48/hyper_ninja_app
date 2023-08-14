import DashboardBody from "./Dashboard.body";
import DashboardHeader from "./Dashboard.header";
import "../../styles/dashboard/dashboard.css";
import { NewUrlModal } from "../newUrlModal/NewUrlModal.component";
import { useAppSelector } from "../../app/hooks";
const DashboardComp = () => {
  const { isOpen_newUrlModal } = useAppSelector((state) => state.styleSlice);
  return (
    <>
      <div className="dashboard-container home">
        <main className="dashboard">
          <DashboardHeader />
          <DashboardBody />
        </main>
      </div>
      {isOpen_newUrlModal && <div className="modal-bg" />}
      <NewUrlModal />
    </>
  );
};

export default DashboardComp;
