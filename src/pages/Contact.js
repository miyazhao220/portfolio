import React from 'react';
import { Typography, Form, Input, Button, message } from 'antd';

const { Title, Paragraph } = Typography;

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('表单提交:', values);
    message.success('消息已发送，我会尽快回复！');
    form.resetFields();
  };

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>联系方式</Title>
      <Paragraph>
        邮箱：xxxxxx@xxx.com<br />
        微信：xxxxxx<br />
        LinkedIn：<a href="https://linkedin.com/in/xxxxxx" target="_blank" rel="noopener noreferrer">xxxxxx</a>
      </Paragraph>
      <Title level={3}>在线留言</Title>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item name="name" label="姓名" rules={[{ required: true, message: '请输入姓名' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="message" label="留言" rules={[{ required: true, message: '请输入留言' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">发送</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Contact; 