import React from 'react';
import './Community.less';
import {Layout, Row, Col,} from 'antd';
import Population from "./Population";
import CommunityChart from "./CommunityChart";
import ReportTable from "./ReportTable";
import CommunityAlertMap from './CommunityAlertMap'
import CommunityPopup from './CommunityPopup'
import Logo from "../assets/images/c.png";
import DashboardPie from "./DashboardPie";
import Dashboard from "./Dashboard";

export default class Community extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mapData1:[
        {name: '', value: [116.62, 35.38, 0]},
        {name: '', value: [116.65, 35.38, 0]},
        {name: '', value: [116.68, 35.38, 0]},
        {name: '', value: [116.76, 35.38, 0]},
        {name: '', value: [116.79, 35.38, 0]},
        {name: '', value: [116.82, 35.38, 0]},
        {name: '', value: [116.62, 35.362, 0]},
        {name: '', value: [116.65, 35.362, 0]},
        {name: '', value: [116.68, 35.362, 0]},
        {name: '', value: [116.76, 35.362, 0]},
        {name: '', value: [116.79, 35.362, 0]},
        {name: '', value: [116.82, 35.362,  0]},
        {name: '', value: [116.62, 35.338, 0]},
        {name: '', value: [116.65, 35.338, 0]},
        {name: '', value: [116.68, 35.338, 0]},
        {name: '', value: [116.76, 35.338, 0]},
        {name: '15号楼火警', value: [116.79, 35.338, 3]},
        {name: '', value: [116.82, 35.338, 0]},
        {name: '', value: [116.62, 35.32, 0]},
        {name: '', value: [116.65, 35.32, 0]},
        {name: '', value: [116.68, 35.32, 0]},
        {name: '', value: [116.76, 35.32, 0]},
        {name: '', value: [116.79, 35.32, 0]},
        {name: '', value: [116.82, 35.32, 0]},
      ],
      mapData2:[
        {name: '', value: [116.62, 35.38, 0]},
        {name: '', value: [116.65, 35.38, 0]},
        {name: '', value: [116.68, 35.38, 0]},
        {name: '', value: [116.76, 35.38, 0]},
        {name: '', value: [116.79, 35.38, 0]},
        {name: '', value: [116.82, 35.38, 0]},
        {name: '', value: [116.62, 35.362, 0]},
        {name: '8号楼烟感报警', value: [116.65, 35.362, 1]},
        {name: '', value: [116.68, 35.362, 0]},
        {name: '', value: [116.76, 35.362, 0]},
        {name: '', value: [116.79, 35.362, 0]},
        {name: '', value: [116.82, 35.362,  0]},
        {name: '', value: [116.62, 35.338, 0]},
        {name: '', value: [116.65, 35.338, 0]},
        {name: '', value: [116.68, 35.338, 0]},
        {name: '', value: [116.76, 35.338, 0]},
        {name: '', value: [116.79, 35.338, 0]},
        {name: '', value: [116.82, 35.338, 0]},
        {name: '', value: [116.62, 35.32, 0]},
        {name: '', value: [116.65, 35.32, 0]},
        {name: '', value: [116.68, 35.32, 0]},
        {name: '', value: [116.76, 35.32, 0]},
        {name: '', value: [116.79, 35.32, 0]},
        {name: '', value: [116.82, 35.32, 0]},
      ],
      mapData3:[
        {name: '', value: [116.62, 35.38, 0]},
        {name: '', value: [116.65, 35.38, 0]},
        {name: '', value: [116.68, 35.38, 0]},
        {name: '4号楼燃气报警', value: [116.76, 35.38, 2]},
        {name: '', value: [116.79, 35.38, 0]},
        {name: '', value: [116.82, 35.38, 0]},
        {name: '', value: [116.62, 35.362, 0]},
        {name: '', value: [116.65, 35.362, 0]},
        {name: '', value: [116.68, 35.362, 0]},
        {name: '', value: [116.76, 35.362, 0]},
        {name: '', value: [116.79, 35.362, 0]},
        {name: '', value: [116.82, 35.362,  0]},
        {name: '', value: [116.62, 35.338, 0]},
        {name: '', value: [116.65, 35.338, 0]},
        {name: '', value: [116.68, 35.338, 0]},
        {name: '', value: [116.76, 35.338, 0]},
        {name: '', value: [116.79, 35.338, 0]},
        {name: '', value: [116.82, 35.338, 0]},
        {name: '', value: [116.62, 35.32, 0]},
        {name: '', value: [116.65, 35.32, 0]},
        {name: '', value: [116.68, 35.32, 0]},
        {name: '', value: [116.76, 35.32, 0]},
        {name: '', value: [116.79, 35.32, 0]},
        {name: '', value: [116.82, 35.32, 0]},
      ],


      beihuMapData: {},
      popupVisible: false,
      pieData1: [
        {value: 2000, name: '户籍人员'},
        {value: 200, name: '重点人员'},
        {value: 100, name: '关怀人员'},
        {value: 50, name: '其他人员'},
      ],
      pieData2: [
        {value: 100, name: '18-30岁'},
        {value: 100, name: '31-40岁'},
        {value: 100, name: '41-50岁'},
        {value: 100, name: '51-65岁'},
        {value: 100, name: '65岁以上'},
      ],
      chartData1: {
        xAxis: ['降水可能性', '雾霾可能性', '大风可能性','晴天可能性'],
        seriesData: [{
          color: {color1: '#197fff', color2: '#b90eff', color3: 'rgb(7,255,242)', color4: 'rgb(5,255,228)',},
          yAxis: [10, 10, 20, 90],
          name: '近6小时天气变化预警',
          type: 'bar',
        }],
      },
      chartData3: {
        xAxis: ['富强村', '民主村', '文明村', '和谐村', '爱国村', '敬业村', '诚信村', '友善村', '自由村', '平等村', '公正村', '法制村', '富强村', '民主村', '文明村', '和谐村',],
        seriesData: [
          {
            color: {color1: '#24edff', color2: '#171eff', color3: '#13f5ff', color4: '#11f8ff',},
            yAxis: [991, 845, 891, 521, 786, 500, 388, 491, 845, 591, 1021, 786, 991, 845, 891, 521,],
            name: '户籍人口',
            type: 'bar',
          },
          {
            color: {color1: '#fff60a', color2: '#ff9c00', color3: '#ff8111', color4: '#ff5215',},
            yAxis: [121, 78, 91, 45, 91, 21, 86, 30, 91, 85, 91, 51,],
            name: '重点人口',
            type: 'bar',
          },
          {
            color: {color1: '#abffcd', color2: '#15ff07', color3: '#22ff0a', color4: '#1fff04',},
            yAxis: [91, 84, 91, 51, 76, 50, 38, 41, 85, 91, 121, 78, 91, 85, 81, 51,],
            name: '关怀人员',
            type: 'bar',
          }
        ],
      },
    }
  }

  changePopupVisible = (control) => {
    this.setState({
      popupVisible: control,
    })
  }

  getBeihuMapData = (mapData) => {
    this.setState({
      beihuMapData: mapData,
    })
  }


  render() {

    return (
      <div className={'community'}>
        <Layout className={'layout'} style={{height: '100vh'}}>

          <Layout.Header style={{backgroundColor: ' rgba(0, 0, 0, 0)'}}>
            <a href={'/'}>
              <div className={'home-link'}></div>
            </a>
            <img className={'logo'} src={Logo}/>
            <h1 className={'title'}>理工教职工社区物业管理系统预警监测中心</h1>
          </Layout.Header>

          <Layout.Content>
            <Row>
              <Col span={7}>
                <Row>
                  <Col span={24} className={'col-margin'}>
                    <Population title={'消防主机报警'} mapData={this.state.mapData1}  changePopupVisible={this.changePopupVisible}  getBeihuMapData={this.getBeihuMapData}/>
                  </Col>
                  <Col span={24} className={'col-margin'}>
                    <Population title={'无线烟感报警'} mapData={this.state.mapData2}  changePopupVisible={this.changePopupVisible}  getBeihuMapData={this.getBeihuMapData}/>
                  </Col>
                  <Col span={24} className={'col-margin'}>
                    <Population title={'燃气感应报警'} mapData={this.state.mapData3}  changePopupVisible={this.changePopupVisible}  getBeihuMapData={this.getBeihuMapData}/>
                  </Col>
                </Row>
              </Col>


              <Col span={10}>
                <Row>
                  <Col span={24} className={'col-margin'}>
                    <CommunityAlertMap title={'监控报警总览'} changePopupVisible={this.changePopupVisible}
                                       getBeihuMapData={this.getBeihuMapData}/>
                  </Col>
                  <Col span={24} className={'col-margin'}>
                    <ReportTable  title={'监控报警记录'}  changePopupVisible={this.changePopupVisible}  getBeihuMapData={this.getBeihuMapData}/>
                  </Col>
                  <Col span={24}>
                    <CommunityPopup popupVisible={this.state.popupVisible} changePopupVisible={this.changePopupVisible}
                                    beihuMapData={this.state.beihuMapData}/>
                  </Col>
                </Row>
              </Col>


              <Col span={7}>
                <Row>
                  <Col span={24} className={'col-margin'}>
                    <Dashboard title={'电压负载报警'} />
                  </Col>
                  <Col span={24} className={'col-margin'}>
                    <DashboardPie title={'水压过低报警'}  name={'水压正常'} pieData={75} />
                  </Col>
                  <Col span={24} className={'col-margin'}>
                    <CommunityChart title={'恶劣天气报警'} chartData={this.state.chartData1}/>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Layout.Content>

        </Layout>
      </div>
    );
  }
}
