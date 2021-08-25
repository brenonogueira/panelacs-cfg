import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Players from "views/Players/Players";

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/jogadores",
    name: "Jogadores",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
