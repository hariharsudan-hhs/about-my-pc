import MasterLayout from "./components/MasterLayout";
import MasterHeader from "./components/MasterHeader";
import { Layout, Row, Col, Progress } from "antd";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import DeviceContext from "./store/Device-context";

function App() {
  const { Header, Content, Footer } = Layout;

  const [progressValue, setProgressValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");

  const deviceCtx = useContext(DeviceContext);

  const loadingTextArray = [
    "Waking up the minions...",
    "Pushing pixels...",
    "Doing the heavy lifting...",
    "Are we there yet?",
  ];

  var count = 0;

  useEffect(() => {
    setIsLoading(true);
    setProgressValue(0);
    setLoadingText(loadingTextArray[count]);
    const interval = setInterval(() => {
      setProgressValue((oldProgressValue) => {
        setLoadingText(loadingTextArray[count]);
        count++;
        const newProgressValue = oldProgressValue + 20;
        if (newProgressValue >= 100) {
          setIsLoading(false);
          clearInterval(interval);
        }

        return newProgressValue;
      });
    }, 1500);

    deviceCtx.getOsDetails();
    deviceCtx.getCookieDetails();
    deviceCtx.getFlashDetails();
    deviceCtx.getColorDepthDetails();
    deviceCtx.getWebBrowserDetails();
    deviceCtx.getLanguageDetails();
    deviceCtx.getAdBlockDetails();
    deviceCtx.getScreenDpiDetails();
    deviceCtx.getResolutionDetails();
  }, []);

  if (isLoading) {
    return (
      <div className="loader-layout">
        <Row justify="center">
          <Col xs={20} sm={20} md={16} lg={12} xl={8} xxl={8}>
            <div className="loader-bg">
              <div className="loader-text-bg">{loadingText}</div>
              <div className="loader-progress-bg">
                <Progress
                  strokeColor={{
                    "0%": "#1dd1a1",
                    "100%": "#1dd1a1",
                  }}
                  percent={progressValue}
                  showInfo={false}
                />
              </div>
              <div className="loader-text-developedby">Developed by HHS</div>
            </div>
          </Col>
        </Row>
        <div id="ads-notify-abtmypc" className="ads"></div>
      </div>
    );
  } else {
    return (
      <Layout className="layout">
        <Header>
          <MasterHeader />
        </Header>
        <Content>
          <MasterLayout />
        </Content>
      </Layout>
    );
  }
}

export default App;
