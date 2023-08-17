import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleSidebar } from "../../features/style.Slice";
import { useGetUserDataQuery } from "../../features/api.userEndpoints";

const SidebarHeader = () => {
  const imgSrcRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const { data } = useGetUserDataQuery();
  const { isDarkmode } = useAppSelector((state) => state.styleSlice);
  useEffect(() => {
    if (isDarkmode && imgSrcRef.current) {
      imgSrcRef.current.src =
        "/src/assets/logo/Logo_Darkmode.svg";
    } else if (imgSrcRef.current) {
      imgSrcRef.current.src = "/src/assets/logo/Logo.svg";
    }
  }, [isDarkmode]);
  return (
    <header>
      <div className="image-text">
        <span className="image">
          <img ref={imgSrcRef} alt="IMG" />
        </span>
        <div className="text header-text">
          <span className="name">Hyper Ninja</span>
          <span className="profession">
            {data?.success ? data.data.name : ""}
          </span>
        </div>
      </div>
      <i
        className="bx bx-chevron-right toggle"
        onClick={() => dispatch(toggleSidebar())}
      ></i>
    </header>
  );
};

export default SidebarHeader;
