import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import ChartTop from '../assets/images/chartTop.png';
import './PublickStyle.less'

export default class ProgressBar extends Component {

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
                top: '10%',
                left: '30%',
                right:'15%',
                bottom:'0%'
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data:  ['安全隐患','环境卫生','服务态度','物业费用', '其它问题'],
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    formatter: (value, index) => {
                        return [

                            `{lg|${index+1}}  ` + '{title|' + value + '} '
                        ].join('\n')
                    },
                    rich: {
                        lg: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            // padding: 5,
                            align: 'center',
                            width: 15,
                            height: 15
                        },
                    }
                },


            }, {
                show: true,
                inverse: true,
                data: [3, 3, 6, 4, 4],
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data:  [15, 15, 30, 20, 20],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        // color: function(params) {
                        //     var num = myColor.length;
                        //     return myColor[params.dataIndex % num]
                        // },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%'
                    }
                },
            }, {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 2,
                        barBorderRadius: 15,
                    }
                }
            }, ]
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
