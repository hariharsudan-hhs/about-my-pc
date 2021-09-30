import classes from "./MasterHeader.module.css";
import { Space } from "antd";
import { Menu, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedoAlt,
  faSave,
  faTint,
  faInfo,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import HeaderContext from "../store/Header-Context.js";
import { useContext } from 'react';


function MasterHeader() {
  function refreshHandler() {
    window.location.reload();
  }

  function themeHandler(event) {
    const color = event.target.innerText;
    var bgColor = "";
    if (color === "Wild Caribbean Green") bgColor = "#1dd1a1";
    if (color === "Pastel Red") bgColor = "#ff6b6b";
    if (color === "Casandora Yellow") bgColor = "#feca57";
    if (color === "Imperial Primer") bgColor = "#222f3e";

    document.body.style.setProperty("background-color", bgColor, "important");
  }

  const themeMenu = (
    <Menu>
      <Menu.Item key="0">
        <div onClick={themeHandler}>Wild Caribbean Green</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div onClick={themeHandler}>Pastel Red</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        <div onClick={themeHandler}>Casandora Yellow</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <div onClick={themeHandler}>Imperial Primer</div>
      </Menu.Item>
    </Menu>
  );

  const headerCtx = useContext(HeaderContext);

  function saveHandler() {
    headerCtx.setIsDownloadVisible(true);
  }

  return (
    <div>
      <div className={classes.leftHeaderArea}>
        <span className={classes.clickableSpan} onClick={refreshHandler}>
          <FontAwesomeIcon size={"lg"} icon={faRedoAlt} />
        </span>
      </div>
      <div className={classes.rightHeaderArea}>
        <Space size={60}>
          <span className={classes.clickableSpan} onClick={saveHandler}>
            <FontAwesomeIcon size={"lg"} icon={faSave} />
          </span>
          <span className={classes.clickableSpan}>
            <Dropdown overlay={themeMenu} trigger={["click"]}>
              <span onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon size={"lg"} icon={faTint} />
              </span>
            </Dropdown>
          </span>
          <span className={classes.clickableSpan}>
            <FontAwesomeIcon size={"lg"} icon={faShare} />
          </span>
          <span className={classes.clickableSpan}>
            <FontAwesomeIcon size={"lg"} icon={faInfo} />
          </span>
        </Space>
      </div>
      
    </div>
  );
}

export default MasterHeader;
