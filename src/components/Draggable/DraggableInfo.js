import { useContext } from 'react';
import HeaderContext from '../../store/Header-Context';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import "./Draggable.css";

function DraggableInfo() {

    const headerCtx = useContext(HeaderContext);

    function closeHandler() {
        headerCtx.setIsInfoVisible(false);
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
                    <Header value="Info" />
                  </div>
                  <div className="box-content">
                   <div className="list-info-text">Everything you need to know about your device in one simple and clean view. Developed using React and Ant-Design UI. <br/><br/>A side project from HHS, inspired from Browso.</div>
                  </div>
                </strong>
              </div>
            </Draggable>
        //   </Col>
        // </Row>
      );
}

export default DraggableInfo;