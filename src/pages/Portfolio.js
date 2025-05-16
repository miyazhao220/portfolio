import React, { useState } from 'react';
import { Typography, Card, Row, Col, Button, Tabs } from 'antd';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

// 模拟项目数据，后续可从后台获取
const projects = [
  {
    id: 1,
    title: 'AI视觉识别系统',
    description: '主导开发多模态视觉识别系统，提升识别准确率30%。',
    category: '人工智能',
  },
  {
    id: 2,
    title: '智能家居控制平台',
    description: '设计并运营AIoT设备控制平台，用户增长200%。',
    category: 'AIoT设备',
  },
  {
    id: 3,
    title: '开发者生态运营',
    description: '搭建并运营AI开发者社区，活跃用户5000+。',
    category: '运营与系统',
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('全部项目');

  const filteredProjects = activeCategory === '全部项目'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div style={{ padding: '50px 0' }}>
      <Title level={2}>我的作品集</Title>
      <Paragraph>
        主导10+款AI软硬件产品落地，专注多模态/计算机视觉领域，以下是我代表性的AI产品和项目经验。
      </Paragraph>
      <Tabs activeKey={activeCategory} onChange={setActiveCategory}>
        <TabPane tab="全部项目" key="全部项目" />
        <TabPane tab="人工智能" key="人工智能" />
        <TabPane tab="AIoT设备" key="AIoT设备" />
        <TabPane tab="运营与系统" key="运营与系统" />
      </Tabs>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        {filteredProjects.map(project => (
          <Col span={8} key={project.id}>
            <Card title={project.title} bordered={false}>
              <Paragraph>{project.description}</Paragraph>
              <Button type="link">查看详情</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Portfolio; 