import "./scss/index.scss";
import { Button, Form, Input, message } from "antd";
import { useNavigate /* Link */ } from "react-router-dom";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    const { username, password } = values;
    if (username && password) {
      navigate("/");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("请输入用户名或密码");
  };
  const onRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-page">
      <div className="glass-container">
        <h3 className="form-title">React Demo</h3>
        <Form
          name="basic"
          labelCol={{
            span: 5,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入用户名"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined className="site-form-item-icon" />}
              placeholder="请输入密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={onRegister}>
              还没账号？立即注册
            </Button>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
