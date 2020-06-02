import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import ChartTop from '../assets/images/chartTop.png';
import CommunityCard from "./CommunityCard";

export default class CommunityChart extends Component {

    state = {
        dataZoom: {
            start: 0, //默认为0
            end: 30, //默认为100
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            handleSize: 20, //滑动条的 左右2个滑动条的大小

            height: 2, //组件高度
            left: 20, //左边的距离
            right: 30, //右边的距离
            bottom: 30, //右边的距离
            handleColor: '#12fdff', //h滑动图标的颜色
            paddingTop:20,
            handleStyle: {
                borderColor: "#211508",
                borderWidth: "1",
                shadowBlur: 2,
                background: "rgba(12,210,219,0.43)",
                shadowColor: "rgba(6,219,212,0.46)",
                inverse: true,
            },
            backgroundColor: 'rgba(17,248,255,0.45)', //两边未选中的滑动条区域的颜色
            borderColor: "rgba(36,237,255,0.49)",
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            handleIcon: 'M901.42429 547.003212c-29.175483-29.155017-72.121598-31.781844-101.296057-2.62171l-83.388199 83.344197c-21.708418 21.673625-47.865147 21.717627-63.135946 3.702322-10.119475-11.935843-6.124488-48.753377-3.291976-72.112388l41.823548-343.756181c3.736091-30.708396-18.143219-60.382229-48.871057-64.11218-30.717605-3.736091-58.652841 19.880793-62.388932 50.585095l-46.131667 270.003434c-2.411933 6.714935-7.583722 7.876388-8.16496-1.162476l-15.700587-350.940814c0-30.937616-25.088398-56.010665-56.036247-56.010665-30.952966 0-56.040341 25.073048-56.040341 56.010665l-1.104147 353.563548c0.288572 4.081968-3.208065 5.249561-3.843538 0.590448l-49.852408-275.985682c-5.503341-30.444383-34.655288-52.416813-65.10888-46.916543-30.458709 5.498224-50.687426 36.382629-45.189202 66.817802l44.393069 322.966693c0.044002 5.748934-1.879813 9.030677-4.614088 1.664919l-66.23247-177.067788c-10.357905-29.1499-42.399669-46.13576-71.564919-35.782971-29.160133 10.354835-44.407396 44.129056-34.048467 73.275887l116.104321 379.314025c0.604774 2.095731 1.245364 4.170996 1.904373 6.236028l0.24457 0.781806c0.01842 0.063445 0.049119 0.11768 0.067538 0.176009 32.154327 98.967012 125.154441 170.513512 234.884588 170.513512 70.246901 0 143.208633-24.76094 198.751646-67.356061l0.005117-0.005117c59.990303-36.110429 252.187673-242.73744 252.187673-242.73744C934.962128 620.819404 930.60489 576.169485 901.42429 547.003212L901.42429 547.003212zM901.42429 547.003212',
            filterMode: 'filter',

        },
        data: {},
    };

    componentDidMount() {

        let date = new Date(new Date() - 1000 * 60 * 60 * 24 * 30);
        let data = {};

        for (; date < new Date(); date.setDate(date.getDate() + 1)) {
            let now = `${date.getMonth() + 1}-${date.getDate()}`;
            data[now] = Math.floor((Math.random() * 100) + 1) + 200;
        }

        this.setState({data});

    }

    getOption = () => (
        {
            dataZoom: this.props.dataZoom ? this.state.dataZoom : '',
            grid: {
                top: '20%',
                left: '0%',
                bottom: '5%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgba(17,248,255,0.5)'
                    }
                }
            },
            renderAsImage: "<%=basePath%>http://img4.imgtn.bdimg.com/it/u=4199319194,2673138852&fm=26&gp=0.jpg",
            legend: {
                data: this.legend,
                top: 0,
                left: 'center',
                textStyle: {
                    color: '#ffffff',
                }

            },
            toolbox: {
                show: true,
                right: -5,
                top: -5,
                feature: {
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,192,163,0.2)',
                        }
                    },
                    axisLabel: {//坐标轴刻度设置
                        color: 'white',
                        fontSize: '10',
                        bottom: '40%',
                        margin: 10//刻度标签与轴线之间的距离。
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(18,174,192,0)'
                        }
                    },
                    data: this.props.chartData.xAxis,
                }
            ],
            yAxis: [
                {
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(0,192,163,0.2)',
                        }
                    },
                    splitArea: {show: false},
                    axisLabel: {//坐标轴刻度设置
                        color: 'white',
                        fontSize: '8',
                        margin: 30//刻度标签与轴线之间的距离。
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(98,11,255,0)'
                        }
                    },
                    type: 'value'
                }
            ],


            series: this.props.chartData.seriesData.map((data) => {
                return ({
                    name: data.name,
                    type: data.type,
                    smooth: 0.1,
                    barWidth: 15,//柱图宽度
                    symbol: 'circle',     //折点设定为实心点
                    symbolSize: 8,   //设定实心点的大小
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                width: 2//设置线条粗细
                            },

                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: data.color.color1 // 0% 处的颜色
                                }, {
                                    offset: 1, color: data.color.color2 // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }

                        }
                    },
                    label: {
                        formatter: '{c}',
                        show: true, //开启显示
                        position: 'top',
                        textStyle: { //数值样式
                            color: data.color.color3,
                            fontSize: 8,
                            fontWeight: 600
                        }
                    },
                    data: data.yAxis,
                    markLine: {
                        itemStyle: {
                            normal: {

                                lineStyle:
                                    {
                                        type: 'dotted',
                                        color: data.color.color3,

                                    },
                                label:
                                    {
                                        backgroundColor: 'rgba(0,0,0,0.57)',
                                        show: true,
                                        formatter: '{b}' + '\n' + '{c}',
                                        textStyle: { //数值样式
                                            color: data.color.color4,
                                            fontSize: 8,
                                            fontWeight: 600
                                        }
                                    }
                            }
                        },

                        data: [
                            {type: 'average', name: '平均值'},]
                    }
                })
            })
        });


    render() {
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
