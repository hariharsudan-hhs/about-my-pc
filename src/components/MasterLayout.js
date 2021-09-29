import "antd/dist/antd.css";
import classes from "./MasterLayout.module.css";
import Header from "./Header.js";
import TopLayout from "./TopLayout";
import { Divider } from "antd";
import BottomLayout from "./BottomLayout";
import MiddleLayout from "./MiddleLayout";

function MasterLayout() {
  return (
    <div className={classes.masterLayout}>
      <div className={classes.innerLayout}>
        <Header />
        <Divider />
        <TopLayout />
        <MiddleLayout />
        <BottomLayout />
      </div>
      <div id="ads-notify-abtmypc" className={classes.ads}></div>
    </div>
  );
}

export default MasterLayout;
