import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import {registerMap, getMap} from "echarts";
import beihu_data from '../assets/json/教职工社区';
import CommunityCard from "./CommunityCard";


export default class Population extends Component {


    componentDidMount() {
        this.registerMap();
    }

    registerMap = () => {

        if (registerMap && getMap) {
            const map = getMap('beihu');

            if (!map) {
                registerMap('beihu', beihu_data);
            }

            this.setState({mapName: 'beihu'});
        } else {
            console.log('ECharts is not Loaded');
        }
    };

    mapClick = (item) =>{
        if(item.data){
        if(item.data.name.length > 1){
            this.props.getBeihuMapData({name:false});
            this.props.changePopupVisible(true)
        }
        }else return
    }

    mapOption = () => ({
        visualMap: { //视觉映射组件
          show: true,
          min: 0,
          max: 3, // 侧边滑动的最大值，从数据中获取
          left: '3%',
          bottom: '7%',
          textStyle: {color: '#17fff3',fontWeight: 600},
          inverse: false, //是否反转 visualMap 组件
          itemHeight:0,  //图形的高度，即长条的高度
          itemWidth:0,
          calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
          // seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
          orient: "horizontal",
          //range:[4, 4],    //指定手柄对应数值的位置。range 应在 min max 范围内
          inRange: {
              color: ['aqua',  '#fbff00', '#ff840c', '#ff3333'],
          },
        },
        geo: {
            map: 'beihu',
            roam: false,
            zoom: 1.2,
            layoutCenter: ['50%', '50%'],

            mapLocation: {
                y: 40
            },
            label: {
                normal: {
                    show: true,//显示省份标签
                    textStyle: {
                        color: 'white',
                        fontWeight: 500,
                        fontSize: 8,
                    }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    textStyle: {
                        color: "#fffefd",
                    },
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,//区域边框宽度
                    borderColor: '#00fbff',//区域边框颜色
                    shadowColor: 'rgb(75,58,2)',
                    shadowBlur: 10,
                    areaColor: "rgba(0,255,246,0.05)",//区域颜色
                    label: {show: false},
                },
                emphasis: {
                    show: false,
                    label: {show: true, fontSize: 12, fontWeight: 'bold', color: '#fff'},
                    borderWidth: 1.5,
                    borderColor: '#74c9bb',
                    shadowColor: '#5AC3B5',
                    shadowBlur: 10,
                    areaColor: 'rgba(12,69,153,0.1)',
                }
            },
            tooltip: {
                show: true,       //不显示提示标签
                trigger: 'item',
            },
        },
        series: [
            {
                name: 'villages',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: this.props.mapData,

                symbol:'path://M884.736 515.072c-1.024-5.632-5.632-12.288-6.144-12.8L757.76 382.464V272.896c0-11.264-9.216-20.48-20.48-20.48h-34.304c-11.264 0-20.48 9.216-20.48 20.48v20.48s0 3.072-1.024 4.096c-0.512 1.024-3.072 1.536-3.072 1.536s-3.584 1.024-5.12-0.512c-1.024-1.024-114.688-113.664-144.384-143.872-4.608-4.608-9.728-7.168-16.896-7.168s-14.848 6.144-14.848 6.144l-348.16 348.672c-0.512 0.512-1.024 1.024-1.024 1.536-5.632 7.168-9.216 20.992-2.56 36.864l2.56 5.632c9.728 17.92 19.968 22.528 23.04 23.552 1.024 0.512 2.56 0.512 3.584 0.512h69.632v273.92c0 10.24 10.24 22.528 22.528 22.528h492.544c13.824 0 22.528-11.776 22.528-22.528v-273.92h70.144c2.048-0.512 20.48-4.096 27.648-19.968 6.656-16.384 6.144-29.696 5.12-35.328zM585.728 814.08c0 2.048-1.536 3.584-3.584 3.584h-140.8c-2.048 0-3.072-1.536-3.584-3.072V638.464c0-10.752 8.704-18.944 18.944-18.944H565.76c10.752 0 18.944 8.704 18.944 18.944V814.08z',
                symbolSize: 10,
                showEffectOn: 'render',
                rippleEffect: {
                    period: 5, //波纹秒数
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                    scale: 2 //波纹范围
                },
                hoverAnimation: true,

                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'bottom'
                },

                itemStyle: {
                    color: '#1effff'
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
        ]
    });

    mapEvent = () => ({
        'click' : this.mapClick
    });



    render() {
        return (
            <CommunityCard title={this.props.title}>
                            <ReactEcharts
                                option={this.mapOption()}
                                onEvents={this.mapEvent()}
                                style={{height: '25vh', width: '100%'}}
                                className='map_content map_bg'/>
            </CommunityCard>

        );
    }
}
