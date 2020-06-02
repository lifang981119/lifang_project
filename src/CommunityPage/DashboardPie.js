import React, { Component } from 'react'
import { Card } from 'antd'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import ChartTop from "../assets/images/chartTop.png";
import CommunityCard from "./CommunityCard";



export default class DashboardPie extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData1:75,
        }
    }

    getOption = ()=>{
        let option = {
            tooltip:{
                formatter:'{a}<br/>最新数据：0.{c}Kpa'
            },
            series:[
                //内圈
                {
                    type:'gauge',
                    center : ['50%', '55%'],    // 默认全局居中
                    radius : '30%',
                    min:0,
                    max:10,
                    startAngle: 270,
                    endAngle: -89.99999,
                    splitNumber:10,
                    axisLine: {            // 仪表盘轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[1, '#ff4500']],
                            width: 0,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 刻度标签
                        show:false
                    },
                    axisTick: {            // 刻度
                        length :4,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: '#00FFFE',
                        }
                    },
                    splitLine: {           // 分隔线
                        show:false
                    },
                    pointer: {
                        width:0,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail : {
                        show : false
                    }
                },
                //中圈
                {
                    name:'转速',
                    type:'gauge',
                    center : ['50%', '55%'],    // 默认全局居中
                    radius : '60%',
                    min:0,
                    max:10,
                    splitNumber:10,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[1,'#00E8FF' ]],
                            width: 8,
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 刻度
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight:'' ,
                            color: 'rgba(30,144,255,0)',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :2,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                            /*shadowColor : '#fff', //默认透明
                             shadowBlur: 10*/
                        }
                    },
                    splitLine: {           // 分隔线
                        length :0,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:0,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width:0,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    detail : {
                        show : false
                    }
                },
                //外圈
                {
                    type:'gauge',
                    center : ['50%', '55%'],    // 默认全局居中
                    radius:'100%',
                    min:0,
                    max:100,
                    name:'实时水压统计',
                    axisLine: {            // 坐标轴线
                        lineStyle: {
                            color: [[1, '#C7C5C3']],// 属性lineStyle控制线条样式
                            width: 1
                        }
                    },
                    itemStyle:{
                        normal:{
                            color:'rgba(219,4,0,0)'
                        }
                    },
                    axisTick:{
                        length:3
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            fontSize : 10,
                            fontFamily:'numfont'
                        }
                    },
                    splitLine: {           // 分隔线
                        length : 5,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:1
                        }
                    },
                    pointer:{
                        width:3,
                        length:'90%'
                    },
                    detail : {
                        show : false
                    },
                    data:[{value: 100-this.props.pieData}]
                },
                //外圈
                {
                    type:'gauge',
                    center : ['50%', '55%'],    // 默认全局居中
                    radius : '100%',
                    min:0,
                    max:100,
                    name:'实时水压统计',
                    axisTick:{
                        length:10
                    },
                    axisLine: {            // 坐标轴线
                        lineStyle: {
                            color: [[1, '#00E8FF']],// 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    pointer:{
                        width:3,
                        length:'90%'
                    },
                    itemStyle:{
                        normal:{
                            color:'#11ff00'
                        }

                    },
                    axisLabel: {
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize : 16,
                            color: 'rgba(30,144,255,0)'
                        }
                    },
                    splitLine: {           // 分隔线
                        length : 5,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:1
                        }
                    },

                    detail: {				// 仪表盘详情，用于显示数据。
                        show: true,				// 是否显示详情,默认 true。
                        offsetCenter: [0, "60%"],// 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                        color: '#15e1da',			// 文字的颜色,默认 auto。
                        fontSize: 12,			// 文字的字体大小,默认 15。
                        fontWeight:600,
                        formatter: this.props.name + "0.{value}Kpa",	// 格式化函数或者字符串
                    },
                    data:[{value: this.state.chartData1,}],
                    title:{
                        show:false
                    }
                }
            ]
        }
        return option;
    }
    render() {
        // setInterval(()=> {
        //     let a = Math.floor(Math.random()*(30)) + 50
        //     this.setState({
        //         chartData1:a,
        //     })
        // },3000)
        return (
            <CommunityCard title={this.props.title}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '25vh', width: '100%'}}
                    className='react_for_echarts'/>
            </CommunityCard>
        )
    }
}
