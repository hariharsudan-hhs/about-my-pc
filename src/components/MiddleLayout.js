import { Row, Col } from "antd";
import InfoCard from "./InfoCard";

function MiddleLayout() {
  // browser
  var nAgt = navigator.userAgent;
  var browser = "Unknown";
  var version = "Unknown";
  var nameOffset, verOffset, ix;

  // Opera
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
    browser = "Opera";
    version = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf("Version")) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Opera Next
  if ((verOffset = nAgt.indexOf("OPR")) != -1) {
    browser = "Opera";
    version = nAgt.substring(verOffset + 4);
  }
  // Legacy Edge
  else if ((verOffset = nAgt.indexOf("Edge")) != -1) {
    browser = "Microsoft Legacy Edge";
    version = nAgt.substring(verOffset + 5);
  }
  // Edge (Chromium)
  else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
    browser = "Microsoft Edge";
    version = nAgt.substring(verOffset + 4);
  }
  // MSIE
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
    browser = "Microsoft Internet Explorer";
    version = nAgt.substring(verOffset + 5);
  }
  // Chrome
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
    browser = "Chrome";
    version = nAgt.substring(verOffset + 7);
  }
  // Safari
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
    browser = "Safari";
    version = nAgt.substring(verOffset + 7);
    if ((verOffset = nAgt.indexOf("Version")) != -1) {
      version = nAgt.substring(verOffset + 8);
    }
  }
  // Firefox
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
    browser = "Firefox";
    version = nAgt.substring(verOffset + 8);
  }
  // MSIE 11+
  else if (nAgt.indexOf("Trident/") != -1) {
    browser = "Microsoft Internet Explorer";
    version = nAgt.substring(nAgt.indexOf("rv:") + 3);
  }
  // Other browsers
  else if (
    (nameOffset = nAgt.lastIndexOf(" ") + 1) <
    (verOffset = nAgt.lastIndexOf("/"))
  ) {
    browser = nAgt.substring(nameOffset, verOffset);
    version = nAgt.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
      browser = navigator.appName;
    }
  }
  // trim the version string
  if ((ix = version.indexOf(";")) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(" ")) != -1) version = version.substring(0, ix);
  if ((ix = version.indexOf(")")) != -1) version = version.substring(0, ix);

  //Web Browser Height
  var browserHeight = window.innerHeight;
  var browserWidth = window.innerWidth;

  //flash
  var flashCheck = "Unknown";
  if (navigator.mimeTypes["application/x-shockwave-flash"] == undefined)
    flashCheck = "Disabled";
  else flashCheck = "Enabled";

  //color depth
  var colorDepth = window.screen.colorDepth;

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Color Depth">{colorDepth}
          <br/></InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Flash">{flashCheck}</InfoCard>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <InfoCard title="Web Browser">
            {browser +
              " " +
              version +
              ", " +
              browserWidth +
              " x " +
              browserHeight}
          </InfoCard>
        </Col>
      </Row>
    </div>
  );
}

export default MiddleLayout;
