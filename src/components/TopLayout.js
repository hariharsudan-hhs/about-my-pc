import { Row, Col } from "antd";
import InfoCard from "./InfoCard";
import { useContext } from "react";
import DeviceContext from "../store/Device-context";

function TopLayout() {
  // // system
  // var os = "Unknown";
  // var nAgt = navigator.userAgent;
  // var nVer = navigator.appVersion;
  // var clientStrings = [
  //   { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
  //   { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
  //   { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
  //   { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
  //   { s: "Windows Vista", r: /Windows NT 6.0/ },
  //   { s: "Windows Server 2003", r: /Windows NT 5.2/ },
  //   { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
  //   { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
  //   { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
  //   { s: "Windows 98", r: /(Windows 98|Win98)/ },
  //   { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
  //   { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
  //   { s: "Windows CE", r: /Windows CE/ },
  //   { s: "Windows 3.11", r: /Win16/ },
  //   { s: "Android", r: /Android/ },
  //   { s: "Open BSD", r: /OpenBSD/ },
  //   { s: "Sun OS", r: /SunOS/ },
  //   { s: "Chrome OS", r: /CrOS/ },
  //   { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
  //   { s: "iOS", r: /(iPhone|iPad|iPod)/ },
  //   { s: "Mac OS X", r: /Mac OS X/ },
  //   { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
  //   { s: "QNX", r: /QNX/ },
  //   { s: "UNIX", r: /UNIX/ },
  //   { s: "BeOS", r: /BeOS/ },
  //   { s: "OS/2", r: /OS\/2/ },
  //   {
  //     s: "Search Bot",
  //     r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
  //   },
  // ];

  // for (var id in clientStrings) {
  //   var cs = clientStrings[id];
  //   if (cs.r.test(nAgt)) {
  //     os = cs.s;
  //     break;
  //   }
  // }

  // var osVersion = "Unknown";

  // if (/Windows/.test(os)) {
  //   osVersion = /Windows (.*)/.exec(os)[1];
  //   os = "Windows";
  // }

  // switch (os) {
  //   case "Mac OS":
  //   case "Mac OS X":
  //   case "Android":
  //     osVersion =
  //       /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(
  //         nAgt
  //       )[1];
  //     break;

  //   case "iOS":
  //     osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
  //     osVersion = osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
  //     break;
  // }

  //cookie
  // var cookieEnabled = navigator.cookieEnabled ? true : false;

  // //alternative to react-device-detect package
  // var isMobile =
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(nVer);

  // //architecture
  // var architecture = "Unknown";
  // if (nAgt.indexOf("x64") !== -1) architecture = "64-Bit";
  // if (nAgt.indexOf("x86") !== -1 || nAgt.indexOf("x32") !== -1)
  //   architecture = "32-Bit";

  //javascript
  var jsEnabled = "Enabled";

  const deviceCtx = useContext(DeviceContext);
  const cookiesEnabled = deviceCtx.cookies;
  const osInfo = deviceCtx.operatingSystem;

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <InfoCard title="Operating System">
            {osInfo}
          </InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Javascript">{jsEnabled}</InfoCard>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
          <InfoCard title="Cookies">
            {cookiesEnabled ? "Enabled" : "Disabled"}
          </InfoCard>
        </Col>
      </Row>
    </div>
  );
}

export default TopLayout;
