import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export type FieldNames = "Name" | "Url" | "Status";
interface Style {
  isSidebar_open: boolean;
  sidebar_className: "" | "close";

  isDarkmode: boolean;
  darkMode_className: "" | "dark";
  sidebar_mode_text: "Light Mode" | "Dark Mode";

  isOpen_newUrlModal: boolean;
  opened_newUrlModal_className: "newUrlModal-open" | "";

  isOpen_updateUrlModal: boolean;
  opened_updateUrlModal_className: "updateUrlModal-open" | "";
  updateUrl_field: FieldNames | "";
  updateUrl_value: string;

  isOpen_deleteUrlModal: boolean;
  opened_deleteUrlModal_className: "deleteUrlModal-open" | "";
  deleteUrl_name: string;

  isOpen_loginModal: boolean;
  opened_loginModal_className: "loginModal-open" | "";

  isOpen_changePassModal: boolean;
  opened_changePassModal_className: "changePassModal-open" | "";

  isOpen_deleteUserModal: boolean;
  opened_deleteUserModal_className: "deleteUserModal-open" | "";
}
const body: HTMLBodyElement | null = document.querySelector(
  "body"
) as HTMLBodyElement;
const tabLogo = document.getElementById("tab-logo");
const initialState: Style = {
  isSidebar_open: false,
  sidebar_className: "close",

  isDarkmode: false,
  darkMode_className: "",
  sidebar_mode_text: "Light Mode",

  isOpen_newUrlModal: false,
  opened_newUrlModal_className: "",

  isOpen_updateUrlModal: false,
  opened_updateUrlModal_className: "",
  updateUrl_field: "",
  updateUrl_value: "",

  isOpen_deleteUrlModal: false,
  opened_deleteUrlModal_className: "",
  deleteUrl_name: "",

  isOpen_loginModal: false,
  opened_loginModal_className: "",

  isOpen_changePassModal: false,
  opened_changePassModal_className: "",

  isOpen_deleteUserModal: false,
  opened_deleteUserModal_className: "",
};

export const styleSlice = createSlice({
  name: "styleSlice",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebar_open = true;
      state.sidebar_className = "";
    },
    closeSidebar: (state) => {
      state.isSidebar_open = false;
      state.sidebar_className = "close";
    },
    toggleSidebar: (state) => {
      const isSidebar = state.isSidebar_open;

      if (isSidebar) {
        state.isSidebar_open = false;
        state.sidebar_className = "close";
      } else if (!isSidebar) {
        state.isSidebar_open = true;
        state.sidebar_className = "";
      }
    },
    lightModeON: (state) => {
      body?.classList.remove("dark");
      state.isDarkmode = false;
      state.darkMode_className = "";
      state.sidebar_mode_text = "Light Mode";
      tabLogo?.setAttribute("href", "./src/assets/logo/Logo.svg");
    },
    darkModeON: (state) => {
      body?.classList.add("dark");
      state.isDarkmode = true;
      state.darkMode_className = "dark";
      state.sidebar_mode_text = "Dark Mode";
      tabLogo?.setAttribute("href", "./src/assets/logo/Logo_Darkmode.svg");
    },
    toggleMode: (state) => {
      const isDark = state.isDarkmode;
      if (isDark) {
        body?.classList.remove("dark");
        tabLogo?.setAttribute("href", "./src/assets/logo/Logo.svg");
        state.isDarkmode = false;
        state.darkMode_className = "";
        state.sidebar_mode_text = "Light Mode";
      }
      if (!isDark) {
        body?.classList.add("dark");
        tabLogo?.setAttribute("href", "./src/assets/logo/Logo_Darkmode.svg");
        state.isDarkmode = true;
        state.darkMode_className = "dark";
        state.sidebar_mode_text = "Dark Mode";
      }
    },
    openNewUrlModal: (state) => {
      state.isOpen_newUrlModal = true;
      state.opened_newUrlModal_className = "newUrlModal-open";
    },
    closeNewUrlModal: (state) => {
      state.isOpen_newUrlModal = false;
      state.opened_newUrlModal_className = "";
    },
    openUpdateUrlModal: (
      state,
      action: PayloadAction<{ field: FieldNames; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.isOpen_updateUrlModal = true;
      state.opened_updateUrlModal_className = "updateUrlModal-open";
      state.updateUrl_field = field;
      state.updateUrl_value = value;
    },
    setUpdateUrlModal_value: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      const { value } = action.payload;
      if (state.isOpen_updateUrlModal) state.updateUrl_value = value;
    },
    closeUpdateUrlModal: (state) => {
      state.isOpen_updateUrlModal = false;
      state.opened_updateUrlModal_className = "";
      // state.updateUrl_field = "";
      // state.updateUrl_value = "";
    },
    openDeleteUrlModal: (state) => {
      state.isOpen_deleteUrlModal = true;
      state.opened_deleteUrlModal_className = "deleteUrlModal-open";
      state.deleteUrl_name = "";
    },
    setDeleteUrlModal_name: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      const { value } = action.payload;
      if (state.isOpen_deleteUrlModal) state.deleteUrl_name = value;
    },
    closeDeleteUrlModal: (state) => {
      state.isOpen_deleteUrlModal = false;
      state.opened_deleteUrlModal_className = "";
      // state.deleteUrl_name="";
    },
    openLoginModal:(state)=>{
      state.isOpen_loginModal=true;
      state.opened_loginModal_className="loginModal-open"
    },
    closeLoginModal:(state)=>{
      state.isOpen_loginModal=false;
      state.opened_loginModal_className=""
    },
    openChangePassModal:(state)=>{
      state.isOpen_deleteUserModal=false;
      state.opened_deleteUserModal_className=""
      
      state.isOpen_changePassModal=true;
      state.opened_changePassModal_className="changePassModal-open"
    },
    closeChangePassModal:(state)=>{
      state.isOpen_changePassModal=false;
      state.opened_changePassModal_className=""
    },
    openDeleteUserModal:(state)=>{
      state.isOpen_changePassModal=false;
      state.opened_changePassModal_className=""

      state.isOpen_deleteUserModal=true;
      state.opened_deleteUserModal_className="deleteUserModal-open"
    },
    closeDeleteUserModal:(state)=>{
      state.isOpen_deleteUserModal=false;
      state.opened_deleteUserModal_className=""
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,

  lightModeON,
  darkModeON,
  toggleMode,

  openNewUrlModal,
  closeNewUrlModal,

  openUpdateUrlModal,
  setUpdateUrlModal_value,
  closeUpdateUrlModal,

  openDeleteUrlModal,
  setDeleteUrlModal_name,
  closeDeleteUrlModal,

  openLoginModal,
  closeLoginModal,

  openChangePassModal,
  closeChangePassModal,

  openDeleteUserModal,
  closeDeleteUserModal

} = styleSlice.actions;

export default styleSlice.reducer;
