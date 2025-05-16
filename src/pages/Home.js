import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div style={{ padding: '50px 0' }}>
      <Row gutter={24} align="middle">
        <Col span={12}>
          <Title level={2}>你好，我是赵梦婕</Title>
          <Paragraph>
            10年+AI产品&运营专家，专注多模态/计算机视觉领域，主导10+款AI软硬件产品落地，擅长跨职能团队协作、技术商业化闭环及资源整合。
          </Paragraph>
          <Button type="primary" style={{ marginRight: 16 }}><Link to="/portfolio">查看我的工作</Link></Button>
          <Button><Link to="/contact">联系我</Link></Button>
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <img src="/avatar.jpg" alt="个人照片" style={{ width: 200, height: 200, borderRadius: '50%' }} />
          <div style={{ marginTop: 16 }}>10年+行业经验</div>
        </Col>
      </Row>
    </div>
  );
}

export default Home; 