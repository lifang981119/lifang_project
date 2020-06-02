import React, {Component} from 'react'
import {Card} from 'antd'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import CommunityCard from "./CommunityCard";


export default class DashboardPie extends Component {
    constructor(props){
        super(props)
        this.state = {
            chartData1:200,
            chartData2:4,
        }
    }

    getOption = () => {
        let option = {
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            series: [

                {
                    name: '平均电压',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 330,
                    splitNumber: 11,
                    radius: '90%',
                    center: ['55%', '50%'],
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 2
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 10,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        backgroundColor: 'auto',
                        borderRadius: 2,
                        color: '#eee',
                        padding: 3,
                        textShadowBlur: 2,
                        textShadowOffsetX: 1,
                        textShadowOffsetY: 1,
                        textShadowColor: '#222'
                    },
                    title: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        color: 'white',
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        formatter: "电压正常{value}V",
                        fontWeight: 'bolder',
                        color: '#46ee51',
                        rich: {},
                        fontSize: 12,			// 文字的字体大小,默认 15。
                    },

                    data: [{value: this.state.chartData1, name: '单位V'}]
                },
                {
                    name: '波动电压幅度',
                    type: 'gauge',
                    center: ['25%', '55%'],    // 默认全局居中
                    radius: '35%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 2
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 5,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length:5,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: {
                        width: 2
                    },
                    title: {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                        fontWeight: 'bolder',
                        fontSize: 8,
                        color: 'white',
                    },
                    detail: {
                        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        formatter: "{value}V",
                        fontWeight: 'bolder',
                        color: '#46ee51',
                        rich: {},
                        fontSize: 10,			// 文字的字体大小,默认 15。
                    },

                    data: [{value:this.state.chartData2, name: '波动'}]
                },
            ]
        };
        return option;
    }

    render() {
        // setInterval(()=> {
        //     let a = Math.floor(Math.random()*(100)) + 170
        //     let b = Math.floor(Math.random()*(4)) + 3
        //     this.setState({
        //         chartData1:a,
        //         chartData2:b
        //     })
        // },5000)
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
