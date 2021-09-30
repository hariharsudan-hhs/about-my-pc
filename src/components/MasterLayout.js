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
        <Header value="About Your Device"/>
        <Divider />
        <TopLayout />
        <MiddleLayout />
        <BottomLayout />
      </div>
    </div>
  );
}

export default MasterLayout;
