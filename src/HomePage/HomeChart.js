import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import ChartTop from '../assets/images/chartTop.png';
import './PublickStyle.less'

export default class HomeChart extends Component {

    state = {
        data: {}
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
            grid: {
                top: '20%',
                left: '0%',
                bottom: '0%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: 'rgb(0,0,0,0.5)'
                    }
                }
            },
            renderAsImage:"<%=basePath%>http://img4.imgtn.bdimg.com/it/u=4199319194,2673138852&fm=26&gp=0.jpg",
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


          series: this.props.chartData.seriesData.map((data)=>{
            return(      {
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
