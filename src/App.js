import MasterLayout from "./components/MasterLayout";
import MasterHeader from "./components/MasterHeader";
import { Layout } from "antd";
import './App.css';

function App() {
  const { Header, Content, Footer } = Layout;
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

export default App;
