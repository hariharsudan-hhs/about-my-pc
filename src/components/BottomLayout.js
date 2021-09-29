import { Row, Col, Card } from "antd";
import InfoCard from "./InfoCard";

function BottomLayout() {
  //Screen DPI
  var devicePixelRatio = window.devicePixelRatio;

  //Resolution
  var screenHeight = window.screen.height;
  var screenWidth = window.screen.width;

  //AdBlock
  var adBlock = "Unknown";
  var adsNotify = document.getElementById("ads-notify-abtmypc");
  if (adsNotify !== null) {
    if (adsNotify.offsetWidth > 0 && adsNotify.offsetHeight > 0) {
      adBlock = "Disabled";
    } else {
      adBlock = "Enabled";
    }
  }

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Language">{navigator.language}</InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Ad Block">{adBlock}</InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Screen DPI">
            {"Pixel Ratio: " + devicePixelRatio}
          </InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Resolution">
            {screenWidth + " x " + screenHeight}
          </InfoCard>
        </Col>
      </Row>
    </div>
  );
}

export default BottomLayout;
