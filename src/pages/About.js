import React from 'react';
import { Typography, Progress, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>关于我</Title>
      <Paragraph>
        10年+AI产品&运营专家，专注多模态/计算机视觉领域，主导10+款AI软硬件产品落地，擅长跨职能团队协作、技术商业化闭环及资源整合，兼具技术理解力与业务敏锐度，推动组织内AI技术采用与业务增长。
      </Paragraph>
      <Paragraph>
        现任美团智能产品部AI产品运营，具备B/C端产品增长和开发者生态运营经验，在CV、AIGC、AIoT等领域有技术商业化闭环经验。曾在戴姆勒、Uber/滴滴、英国驻华使馆等机构担任产品和营销职位。
      </Paragraph>
      <Title level={3}>专业技能</Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div>AI技术理解</div>
          <Progress percent={95} />
        </Col>
        <Col span={12}>
          <div>产品全周期管理</div>
          <Progress percent={90} />
        </Col>
        <Col span={12}>
          <div>产品运营与增长</div>
          <Progress percent={95} />
        </Col>
        <Col span={12}>
          <div>资源整合与领导力</div>
          <Progress percent={90} />
        </Col>
      </Row>
      <div style={{ marginTop: 24 }}>
        <Button type="primary" style={{ marginRight: 16 }}><Link to="/portfolio">我的作品集</Link></Button>
        <Button><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">获取我的简历</a></Button>
      </div>
    </div>
  );
}

export default About; 