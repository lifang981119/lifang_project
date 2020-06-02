import React from 'react';
import './CommunityDetails.less';
import {Layout, Row, Col,} from 'antd';
import CommunityPie from "./CommunityPie";
import CommunityChart from "./CommunityChart";
import CommunityTable from "./CommunityTable";
import CommunityChinaMap from './CommunityChinaMap'
import HouseInfo from "./HouseInfo";
import HouseInfoPopup from './HouseInfoPopup'
import Logo from "../assets/images/c.png";
import Population from "./Population";

export default class CommunityDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beihuMapData:{},
            housePopupVisible: false,
            pieData1:[
                {value: 1060, name: '面部识别'},
                {value: 710, name: '指纹识别'},
                {value: 417, name: '门禁卡识别'},
                {value: 132, name: '暂住证明'},
            ],
            chartData1: {
                xAxis: ['6时-12时','12时-18时','18时-22时','22时-6时',],
                    seriesData: [{
                        color: {color1: '#ffa10b', color2: '#ff2433', color3: '#00f7ff', color4: '#07fffc',},
                        yAxis: [191, 108, 245, 41],
                        name: '车辆入库时段统计',
                        type: 'bar',
                    }],
            },
            chartData2: {
                xAxis: ['6时-12时','12时-18时','18时-22时','22时-6时',],
                seriesData: [{
                    color: {color1: '#197fff', color2: '#b90eff', color3: 'rgb(7,255,242)', color4: 'rgb(5,255,228)',},
                    yAxis: [1088, 391, 545, 241],
                    name: '人员出入时段统计',
                    type: 'line',
                }],
            },
            chartData3: {
                xAxis: ['1号楼','2号楼','3号楼','4号楼','5号楼','6号楼','7号楼','8号楼','9号楼','10号楼','11号楼','12号楼','13号楼','14号楼','15号楼','16号楼','17号楼','18号楼','19号楼','20号楼','21号楼','22号楼','23号楼','24号楼'],
                seriesData: [{
                    color: {color1: '#24edff', color2: '#171eff', color3: '#13f5ff', color4: '#11f8ff',},
                    yAxis: [91, 85, 81, 21, 76, 50, 38,41, 45,91, 85, 81, 21, 76, 50, 38,41, 45, 91, 85, 81, 21, 76, 50, ],
                    name: '常住人口',
                    type: 'bar',
                },
                    {
                        color: {color1: '#ffa01f', color2: '#ff1e0d', color3: '#ff7a11', color4: '#ff940f',},
                        yAxis: [11,15,19, 18, 11, 15, 18,14, 25, 11,15,19, 18, 11, 15, 18,14, 25, 11,15,19, 18, 11, 15, ],
                        name: '暂住人口',
                        type: 'bar',
                    },],
            },
            tableData1: {
                thead: {td1:'姓名',td2:'角色',td3:'开门方式',td4:'时间',},
                tbody: {td1:'李小芳',td2:'业主',td3:'面部识别',td4:'14:31',},
            },
            tableData2: {
                thead: {td1:'车牌号',td2:'车主',td3:'类型',td4:'时间',},
                tbody: {td1:'鲁D1819',td2:'李小芳',td3:'已登记车辆',td4:'14:31',},
            },
        }
    }

    changeHousePopupVisible=(control)=>{
        this.setState({
            housePopupVisible:control,
        })
    }




    render() {

        return (
            <div className={'community_details'}>
                <Layout className={'layout'} style={{height: '100vh'}}>

                    <Layout.Header style={{backgroundColor: ' rgba(0, 0, 0, 0)'}}>
                        <a href={'/'}><div className={'home-link'} ></div></a>
                        <img className={'logo'} src={Logo}/>
                        <h1 className={'title'}>理工教职工社区物业管理系统信息总览</h1>
                    </Layout.Header>

                    <Layout.Content>
                        <Row>
                            <Col span={7}>
                                <Row>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityChart title={'出入时段分析'} chartData={this.state.chartData2}/>
                                    </Col>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityPie title={'出入类型统计'} pieData={this.state.pieData1}/>
                                    </Col>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityTable  title={'人口出入记录'} tableData={this.state.tableData1}/>
                                    </Col>
                                </Row>
                            </Col>


                            <Col span={10}>
                                <Row>
                                    <Col span={24} className={'col-margin'}>
                                        <HouseInfo title={'居民信息总览'} popupVisible={this.state.housePopupVisible} changePopupVisible={this.changeHousePopupVisible} />
                                    </Col>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityChart title={'人员分布概况'} chartData={this.state.chartData3} dataZoom={true}/>
                                    </Col>
                                    <Col span={24} >
                                        <HouseInfoPopup popupVisible={this.state.housePopupVisible} changePopupVisible={this.changeHousePopupVisible} />
                                    </Col>
                                </Row>
                            </Col>


                            <Col span={7}>
                                <Row>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityChart title={'车辆入库分析'} chartData={this.state.chartData1}/>
                                    </Col>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityChinaMap title={'车辆来源概况'} />
                                    </Col>
                                    <Col span={24} className={'col-margin'}>
                                        <CommunityTable  title={'车辆出入记录'} tableData={this.state.tableData2}/>
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
