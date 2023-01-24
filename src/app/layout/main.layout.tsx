import styles from "./main.module.css";
import { Outlet } from "react-router-dom";
import FooterComponent from "../common/components/footer/footer.component";

const MainLayout: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
