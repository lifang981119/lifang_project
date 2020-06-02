import React from 'react';
import './Home.less';
import {Layout, Row, Col} from 'antd';
import HomeMap from './HomeMap';
import HomeChart from './HomeChart';
import InformationCard from './InformationCard'
import HomePie from './HomePie'
import ProgressBar from './ProgressBar'
import RadarPie from './RadarPie'
import Logo from "../assets/images/c.png";
import HomePopup from "./HomePopup";



export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          MapData: {},
          popupVisible: false,
            chart1: {
                xAxis: [5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7],
                seriesData: [{
                    color: {color1: '#00e5ff', color2: '#0011ff', color3: '#508DFF', color4: '#15fff8',},
                    yAxis: [1400, 1650, 1400, 1200, 1500, 1950, 1450],
                    name: '常住人口',
                    type: 'line',
                },
                    {
                        color: {color1: '#e7ff6f', color2: '#ff3d25', color3: '#ff3a13', color4: '#15fff8',},
                        yAxis: [140, 560, 140, 420, 150, 795, 140],
                        name: '暂住人口',
                        type: 'line',
                    }],
            },
            chart2: {
                xAxis: [5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7],
                seriesData: [{
                    color: {color1: '#0aa4ff', color2: '#2fff0e', color3: '#15fff8', color4: '#00faff',},
                    yAxis: [286, 220, 208, 149, 245, 89, 92,],
                    name: '业主车辆',
                    type: 'bar',
                }],
            },
            chart3: {
                xAxis: ['18岁以下', '18-30岁', '30-45岁', '45-60岁', '60岁以上',],
                seriesData: [{
                    color: {color1: '#00fff3', color2: '#728dff', color3: '#15fff8', color4: '#15fff8',},
                    yAxis: [315, 841, 641, 1005, 300,],
                    name: '业主年龄分布',
                    type: 'bar',
                }],
            },
            pieData1: [
                {value: 2500, name: '汉族'},
                {value: 300, name: '回族'},
                {value: 100, name: '苗族'},
                {value: 41, name: '其它民族'},
            ],

        }
    }

  changePopupVisible = (control) => {
    this.setState({
      popupVisible: control,
    })
  }

  getMapData = (mapData) => {
    this.setState({
      beihuMapData: mapData,
    })
  }

    render() {

        return (
            <div className={'home'}>
                <Layout className={'layout'} style={{height: '100vh'}}>

                    <Layout.Header style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                        <img className={'logo'} src={Logo}/>
                        <h1 className={'title'}>山东理工职业学院教职工社区物业管理系统</h1>
                    </Layout.Header>

                    <Layout.Content>
                        <Row>

                            <Col span={6}>
                                <HomeChart title={'社区人口流量'} chartData={this.state.chart1}/>
                                <HomeChart title={'社区车辆流量'} chartData={this.state.chart2}/>
                                <ProgressBar title={'社区评议统计'}/>
                            </Col>
                            <Col span={12}>
                                <Row>
                                    <Col span={24}>
                                        <InformationCard/>
                                    </Col>


                                    <Col span={24}>
                                        <HomeMap changePopupVisible={this.changePopupVisible} getMapData={this.getMapData}/>
                                    </Col>

                                </Row>


                            </Col>
                            <Col span={6}>
                                <RadarPie title={'业主职业分布'}/>
                                <HomePie title={'业主民族分布'} pieData={this.state.pieData1}/>
                                <HomeChart title={'业主年龄分布'} chartData={this.state.chart3}/>

                            </Col>

                        </Row>
                        <HomePopup  popupVisible={this.state.popupVisible} changePopupVisible={this.changePopupVisible} MapData={this.state.beihuMapData}/>
                    </Layout.Content>

                </Layout>
            </div>
        );
    }

}