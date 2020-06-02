import React, {Component} from 'react'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import CommunityCard from "../CommunityPage/CommunityCard";

export default class PeerAnalysisPie extends Component {

    getOption = () => {
        let option = {
            tooltip: {
                trigger: 'item',
                //提示框浮层内容格式器，支持字符串模板和回调函数形式。
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: '评议类型分析',
                    type: 'pie',
                    radius: ['40%', '50%'],
                    center: ['50%', '50%'], //图的位置，距离左跟上的位置
                    color: ['rgba(0,255,234,0.87)','rgba(86,217,237,0.87)','rgba(10,174,255,0.86)','rgba(47,129,255,0.89)','#5D6FFF','#7C67FF'],
                    label: { 　　　　　　　　　　//去除饼图的指示折线label
                        normal: {
                            show: true,
                            color: '#2efffc',
                            formatter: "{b}:{d}%"
                        },
                    },
                    labelLine: {
                        normal: {
                            show: true,   // show设置线是否显示，默认为true，可选值：true ¦ false
                        }
                    },
                    data: this.props.pieData.map((data)=>{
                        return (
                                {
                                    value: data.value,
                                    name: data.name,
                                    label: {
                                        formatter: [
                                            '{title|{b}-{c}次}',
                                            '{Sunny|}',
                                        ].join('\n'),
                                        backgroundColor: '#076772',
                                        borderColor: '#2efffc',
                                        borderWidth: 1.5,
                                        borderRadius: 4,
                                        width: 80,
                                        height:100,
                                        rich: {
                                            title: {
                                                color: '#00ffef',
                                                align: 'center',
                                                width: 78,
                                                height: 24,
                                                borderRadius: [4,4,0,0],
                                                backgroundColor: 'rgba(0,255,239,0.2)',
                                            },
                                            Sunny: {
                                                width:76,
                                                height:74,
                                                align: 'center',
                                                backgroundColor: {
                                                    image: data.portrait,
                                                }
                                            },
                                        }
                                    }
                                }
                        )
                    })

                },
            ]
        }
        return option;
    }

    render() {
        return (
            <CommunityCard title={this.props.title}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{height: '42vh', width: '100%'}}
                    className='react_for_echarts'/>
            </CommunityCard>
        )
    }
}
