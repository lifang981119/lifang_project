import React, { Component } from 'react'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import ChartTop from "../assets/images/chartTop.png";
import './PublickStyle.less'


export default class RadarPie extends Component {

    getOption = ()=>{
        let option = {
            radar: [{
                indicator: [{
                    text: '学生'
                },
                    {
                        text: '教师'
                    },
                    {
                        text: '助教'
                    },
                    {
                        text: '自由职业'
                    },
                    {
                        text: '职工'
                    },
                    {
                        text: '其它'
                    }
                ],
                center: ['50%', '50%'], // 位置
                radius: 55, //大小
                startAngle: 90,
                splitNumber: 3,
                // shape: 'circle',
                name: {
                    formatter: '{value}',
                    textStyle: {
                        color: 'aqua' // 文字颜色
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(114, 172, 209, 0.1)',
                            'rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.1)',
                            'rgba(114, 172, 209, 0.1)', 'rgba(114, 172, 209, 0.1)'
                        ], //圆环颜色
                        shadowColor: 'aqua', // 圆颜色
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'aqua' // 分割线
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'aqua' //圆线
                    }
                }
            }],
            series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        // color: 各异,
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                data: [{
                    value: [56, 33, 61, 5, 3, -30],
                    areaStyle: {
                        normal: {
                            color: 'rgba(0, 255, 255, 0.8)' // 选择区域颜色
                        }
                    }
                }]
            }]
        }

        return option;
    }
    render() {
        return (
            <div style={{padding: '0 2%', margin: '1.8vh'}}>
                <h3 className={'title_style'} style={{color: 'white', padding: '0', marginBottom: '-12px'}}>{this.props.title}</h3>
                <img className={'chartTop'} style={{width: '100%', marginTop: '-5px'}} src={ChartTop}/>

                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '24vh', width: '100%'}}
                    className='react_for_echarts'/>
            </div>
        )
    }
}
