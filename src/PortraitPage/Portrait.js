import React from 'react';
import './Portrait.less';
import {Layout, Row, Col,} from 'antd';
import TrajectoryAnalysis from "./TrajectoryAnalysis";
import PeerAnalysisPie from "./PeerAnalysisPie";
import ScatterDiagram from "./ScatterDiagram";
import Logo from '../assets/images/c.png';
import PortraitChart from "./PortraitChart";
import CommunityTable from "../CommunityPage/CommunityTable";



export default class Portrait extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData1: {
        xAxis: [5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7],
        seriesData: [{
          color: {color1: '#197fff', color2: '#08fff2', color3: 'rgb(7,255,242)', color4: 'rgb(5,255,228)',},
          yAxis: [3, 7, 5, 1, 4, 2, 3,],
          name: '业主批评建议数量变化',
          type: 'line',
        }],
      },
      chartData2: {
        xAxis: ['非常满意','满意','不满意','很不满意',],
        seriesData: [{
          color: {color1: '#9c1dff', color2: '#2582ff', color3: 'rgb(7,255,242)', color4: 'rgb(5,255,228)',},
          yAxis: [2, 9, 4, 1],
          name: '业主对投诉处理结果评价',
          type: 'bar',
        }],
      },
      tableData1: {
        thead: {td1:'投诉人',td2:'投诉类型',td3:'跟进人',td4:'处理结果',},
        tbody: {td1:'李女士',td2:'环境卫生',td3:'物业李主管',td4:'已解决'},
      },
      pieData1: [
        {value: 2, name: '环境卫生', portrait: require('../assets/images/question1.png')},
        {value: 1, name: '服务态度', portrait: require('../assets/images/question5.png')},
        {value: 2, name: '安全隐患', portrait: require('../assets/images/question2.png')},
        {value: 1, name: '其它问题', portrait: require('../assets/images/question6.png')},
      ],
    };
  }


  render() {
    const pathname = this.props.location.pathname;
    let id = pathname.split('/').length > 2 ? pathname.split('/')[2] : 0;
    let info = '';

    return (
      <div className={'portrait'}>
        <Layout className={'layout'} style={{height: '100vh'}}>

          <Layout.Header style={{backgroundColor: ' rgba(0, 0, 0, 0)'}}>
            <a href={'/'}>
              <div className={'home-link'}></div>
            </a>
            <img className={'logo'} src={Logo}/>
            <h1 className={'title'}>理工教职工社区物业管理系统评议中心</h1>
          </Layout.Header>

          <Layout.Content>
            <Row>
              <Col span={7}>
                <Row>
                  <Col span={24}>
                    <PortraitChart title={'评议流量变化'}  chartData={this.state.chartData1} />

                  </Col>

                  <Col span={24} style={{marginTop: '1.5vh'}}>
                    <PortraitChart title={'处理结果反馈'}  chartData={this.state.chartData2} />
                  </Col>

                  <Col span={24} style={{marginTop: '1.5vh'}}>
                    <CommunityTable title={'评议处理情况'} tableData={this.state.tableData1}/>
                  </Col>

                </Row>

              </Col>

              <Col span={10}>
                {/*<Row>*/}
                {/*  <Col span={24}>*/}
                {/*    <PeopleRelation info={info} title={'关系图谱'}/>*/}
                {/*  </Col>*/}
                {/*  <Col span={24} style={{marginTop: '1vh'}}>*/}
                    <TrajectoryAnalysis info={info} title={'评议信息总览'}/>
                {/*  </Col>*/}
                {/*</Row>*/}
              </Col>


              <Col span={7}>
                <Row>
                  <Col span={24}>
                    <PeerAnalysisPie title={'评议类型分析'} pieData={this.state.pieData1}/>
                  </Col>

                  <Col span={24} style={{marginTop: '1vh'}}>
                    <ScatterDiagram info={info} title={'评议回访效率'}/>
                  </Col>

                  {/*<Col span={24} style={{marginTop: '1vh'}}>*/}
                  {/*  <CommunityAssociation title={'社区关联'}/>*/}
                  {/*</Col>*/}

                </Row>

              </Col>
            </Row>

          </Layout.Content>

        </Layout>
      </div>
    );
  }
}
