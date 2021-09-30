import Draggable from "react-draggable";
import "./Draggable.css";
import { List, Row, Col } from "antd";
import Header from "../Header";
import { useContext } from "react";
import DeviceContext from "../../store/Device-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import HeaderContext from "../../store/Header-Context";

function DraggableDownload() {
  const deviceCtx = useContext(DeviceContext);

  const headerCtx = useContext(HeaderContext);

  const listData = [
    {
      title: "Operating System",
      description: deviceCtx.operatingSystem,
    },
    {
      title: "Javascript",
      description: "Enabled",
    },
    {
      title: "Cookies",
      description: deviceCtx.cookies ? "Enabled" : "Disabled",
    },
    {
      title: "Color Depth",
      description: deviceCtx.colorDepth,
    },
    {
      title: "Flash",
      description: deviceCtx.flash,
    },
    {
      title: "Web Browser",
      description: deviceCtx.webBrowser,
    },
    {
      title: "Language",
      description: deviceCtx.language,
    },
    {
      title: "Ad Block",
      description: deviceCtx.adBlock,
    },
    {
      title: "Screen DPI",
      description: deviceCtx.screenDpi,
    },
    {
      title: "Resolution",
      description: deviceCtx.resolution,
    },
  ];

  function closeHandler() {
      headerCtx.setIsDownloadVisible(false);
  }

  return (
    // <Row justify="center">
    //   <Col xs={20} sm={20} md={16} lg={12} xl={8} xxl={8}>
        // {/* bounds="body" */}
        <Draggable handle="strong" onStart={() => true}>
          <div className="box no-cursor">
            <div className="close-button" onClick={closeHandler}><FontAwesomeIcon size={"lg"} icon={faTimes} /></div>
            <strong className="cursor">
              <div>
                <Header value="Download" />
              </div>
              <div className="box-content">
                <List
                  itemLayout="horizontal"
                  dataSource={listData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        // avatar={
                        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        // }
                        title={<div className="list-title">{item.title}</div>}
                        description={
                          <div className="list-description">
                            {item.description}
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>
            </strong>
          </div>
        </Draggable>
    //   </Col>
    // </Row>
  );
}

export default DraggableDownload;
