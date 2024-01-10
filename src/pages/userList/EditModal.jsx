import React, { useRef } from "react";
import { Modal, Form, Input } from "antd";

export default function EditModal(props) {
  const { isModalOpen, closeMode, userInfo, changeUserInfo } = props;
  const formRef = useRef(null);

  const handleOk = () => {
    formRef.current
      .validateFields()
      .then((res) => {
        // closeMode();
        changeUserInfo({ ...res, key: userInfo.key });
      })
      .catch((err) => {});
  };
  const handleCancel = () => {
    closeMode();
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      title="用户信息详情"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
      width={500}
    >
      <Form
        ref={formRef}
        name="basic"
        labelCol={{
          span: 4,
        }}
        style={{
          maxWidth: 600,
          marginTop: "20px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          initialValue={userInfo.name}
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="age"
          name="age"
          initialValue={userInfo.age}
          rules={[
            {
              required: true,
              message: "请输入年龄",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="address"
          name="address"
          initialValue={userInfo.address}
          rules={[
            {
              required: true,
              message: "请输入地址",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
