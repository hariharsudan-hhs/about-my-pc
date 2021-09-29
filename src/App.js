import MasterLayout from "./components/MasterLayout";
import MasterHeader from "./components/MasterHeader";
import { Layout, Row, Col, Progress } from "antd";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import DeviceContext from "./store/Device-context";

function App() {
  const { Header, Content, Footer } = Layout;

  const [progressValue, setProgressValue] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const deviceCtx = useContext(DeviceContext);

  useEffect(() => {
    setIsLoading(true);

    const interval = setInterval(() => {
      setProgressValue((oldProgressValue) => {
        const newProgressValue = oldProgressValue + 25;
        if (newProgressValue >= 100) {
          setIsLoading(false);
          clearInterval(interval);
        }

        return newProgressValue;
      });
    }, 1000);

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
          <Col xs={24} sm={20} md={16} lg={12} xl={8} xxl={8}>
            <div className="loader-box">
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={progressValue}
                showInfo={false}
              />
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
