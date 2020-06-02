import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import {registerMap, getMap} from "echarts";
import china_data from '../assets/json/china';
import CommunityCard from "./CommunityCard";

export default class CommunityChinaMap extends Component {


    componentDidMount() {
        this.registerMap();
    }

    registerMap = () => {

        if (registerMap && getMap) {
            const map = getMap('china');

            if (!map) {
                registerMap('china', china_data);
            }

            this.setState({mapName: 'china'});
        } else {
            console.log('ECharts is not Loaded');
        }
    };

    mapOption = () => ({
        visualMap: { //视觉映射组件
            show: true,
            min: 0,
            max: 100, // 侧边滑动的最大值，从数据中获取
            left: '0%',
            top: '80%',
            textStyle: {color: '#17fff3',fontWeight: 600},
            inverse: false, //是否反转 visualMap 组件
            itemHeight:90,  //图形的高度，即长条的高度
            itemWidth:10,
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
            // seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
            orient: "horizontal",
            //range:[4, 4],    //指定手柄对应数值的位置。range 应在 min max 范围内
            inRange: {
                color: ['aqua', 'lime', 'yellow', 'orange', '#ff3333'],
            },
        },
        geo: {
            map: 'china',
            roam: false,
            zoom: 1.2,
            layoutCenter: ['50%', '50%'],


            label: {
                normal: {
                    formatter:'{a}',
                    show: false,//显示省份标签
                    textStyle: {
                        color: 'white',
                        fontWeight: 500,
                        fontSize: 8,
                    }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    textStyle: {
                        color: "#fffbff",
                        fontSize: 10,
                        fontWeight:600,
                    },
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,//区域边框宽度
                    borderColor: '#00c1ff',//区域边框颜色
                    shadowColor: 'rgb(75,58,2)',
                    shadowBlur: 10,
                    areaColor: "rgba(12,69,153,0)",//区域颜色
                    label: {show: false},
                },

            },
        },
        series: [
            {
                name: 'villages',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                    {name:"新疆",value:[84.9023,41.748,10]},
                    {name:"西藏",value:[88.7695,31.6846,50]},
                    {name:"内蒙古",value:[117.5977,44.3408,70]},
                    {name:"青海",value:[96.2402,35.4199,Math.floor(Math.random()*(100-0))]},
                    {name:"四川",value:[102.9199,30.1904,Math.floor(Math.random()*(100-0))]},
                    {name:"甘肃",value:[95.7129,40.166,Math.floor(Math.random()*(100-0))]},
                    {name:"黑龙江",value:[128.1445,48.5156,Math.floor(Math.random()*(100-0))]},
                    {name:"云南",value:[101.8652,25.1807,Math.floor(Math.random()*(100-0))]},
                    {name:"广西",value:[108.2813,23.6426,Math.floor(Math.random()*(100-0))]},
                    {name:"湖南",value:[111.5332,27.3779,Math.floor(Math.random()*(100-0))]},
                    {name:"陕西",value:[109.5996,35.6396,Math.floor(Math.random()*(100-0))]},
                    {name:"广东",value:[113.4668,22.8076,Math.floor(Math.random()*(100-0))]},
                    {name:"吉林",value:[126.4746,43.5938,Math.floor(Math.random()*(100-0))]},
                    {name:"河北",value:[115.4004,37.9688,Math.floor(Math.random()*(100-0))]},
                    {name:"湖北",value:[112.2363,31.1572,Math.floor(Math.random()*(100-0))]},
                    {name:"贵州",value:[106.6113,26.9385,Math.floor(Math.random()*(100-0))]},
                    {name:"山东",value:[118.7402,36.4307,Math.floor(Math.random()*(100-0))]},
                    {name:"江西",value:[116.0156,27.29,Math.floor(Math.random()*(100-0))]},
                    {name:"河南",value:[113.4668,33.8818,Math.floor(Math.random()*(100-0))]},
                    {name:"辽宁",value:[122.3438,41.0889,Math.floor(Math.random()*(100-0))]},
                    {name:"山西",value:[112.4121,37.6611,Math.floor(Math.random()*(100-0))]},
                    {name:"安徽",value:[117.2461,32.0361,Math.floor(Math.random()*(100-0))]},
                    {name:"浙江",value:[120.498,29.0918,Math.floor(Math.random()*(100-0))]},
                    {name:"福建",value:[118.3008,25.9277,Math.floor(Math.random()*(100-0))]},
                    {name:"江苏",value:[120.0586,32.915,Math.floor(Math.random()*(100-0))]},
                    {name:"重庆",value:[107.7539,30.1904,Math.floor(Math.random()*(100-0))]},
                    {name:"宁夏",value:[105.9961,37.3096,Math.floor(Math.random()*(100-0))]},
                    {name:"海南",value:[109.9512,19.2041,Math.floor(Math.random()*(100-0))]},
                    {name:"台湾",value:[121.0254,23.5986,Math.floor(Math.random()*(100-0))]},
                    {name:"北京",value:[116.4551,40.2539,Math.floor(Math.random()*(100-0))]},
                    {name:"北京",value:[116.4551,40.2539,Math.floor(Math.random()*(100-0))]},
                    {name:"上海",value:[121.4648,31.2891,Math.floor(Math.random()*(100-0))]},
                    {name:"香港",value:[114.2578,22.3242,Math.floor(Math.random()*(100-0))]},
                    {name:"澳门",value:[113.5547,22.1484,Math.floor(Math.random()*(100-0))]},
                ],

                symbol: '',
                symbolSize: 3,
                showEffectOn: 'render',
                rippleEffect: {
                    period: 5, //波纹秒数
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                    scale: 5 //波纹范围
                },
                hoverAnimation: true,


                label: {
                    show: false,
                    formatter: '{b}',
                    position: 'bottom'
                },
                itemStyle: {
                    color: ['#ff4823','#364cff','#ff4823','#32ffc9']
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
        ]
    });


    render() {
        return (
            <CommunityCard title={this.props.title}>

                <ReactEcharts
                    option={this.mapOption()}
                    style={{height: '25vh', width: '100%'}}
                    className='map_content map_bg'/>

            </CommunityCard>

        );
    }
}
