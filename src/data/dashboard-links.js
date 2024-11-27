import { ACCOUNT_TYPE } from "../utils/constant";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Add Item",
    path: "/dashboard/add-item",
    type: ACCOUNT_TYPE.CLIENT,
    icon: "VscAdd",
  },
  // {
  //   id: 3,
  //   name: "Purchase History",
  //   path: "/dashboard/purchase-history",
  //   type: ACCOUNT_TYPE.CLIENT,
  //   icon: "VscHistory",
  // },
  {
    id: 4,
    name: "Add Product",
    path: "/dashboard/add-product",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscVm",
  },
  {
    id: 5,
    name: "Add Category",
    path: "/dashboard/categories",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscAdd",
  },
  {
    id: 6,
    name: "Dashboard",
    path: "/dashboard/informationForAdmin",
    type: ACCOUNT_TYPE.ADMIN,
    icon: "VscDashboard",
  }
];
