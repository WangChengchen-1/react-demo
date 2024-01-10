import "./scss/index.scss";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const { username, password } = values;
    if (username && password) {
      navigate("/login");
    }
  };
  const onFinishFailed = (errorInfo) => {
    message.error("请输入用户名和密码");
  };
  const onLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-page">
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
          initialValues={{
            remember: true,
          }}
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
            hasFeedback
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
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "请再次输入密码",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("您输入的新密码不匹配!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<KeyOutlined className="site-form-item-icon" />}
              placeholder="请再次输入密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="link" onClick={onLogin}>
              已有账号？立即登录
            </Button>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
