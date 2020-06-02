import React, {Component} from "react";
import './AlertMap.less'
import ReactEcharts from "echarts-for-react";
import {registerMap, getMap} from "echarts";
import beihu_data from '../assets/json/教职工社区';
import CommunityCard from "./CommunityCard";
import AlertImg1 from '../assets/images/alert1.png';
import AlertImg2 from '../assets/images/alert2.png';
import AlertImg3 from '../assets/images/alert3.png';
import AlertImg4 from '../assets/images/alert4.png';
import AlertImg5 from '../assets/images/alert5.png';
import AlertImg6 from '../assets/images/alert6.png';
import AlertImg7 from '../assets/images/alert7.png';
import AlertImg8 from '../assets/images/alert8.png';


class AlertCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alertInfo: [{img:AlertImg1,title:'① 10号楼下消防通道占用报警'}, {img:AlertImg2,title:'② 南大门值班人员离岗预警'}, {img:AlertImg3,title:'③ 北A区翻墙报警'}, {img:AlertImg4,title:'④ 北大门人员聚集报警'}, {img:AlertImg5,title:'⑤ 14号楼一单元东电梯肢体动作报警'}, {img:AlertImg6,title:'⑥ 南D区可疑人员报警'}, {img:AlertImg7,title:'⑦ 南大门公安重点人员报警'}, {img:AlertImg8,title:'⑧ 北大门网上逃犯报警'}, ]
        }
    }

    showModul=(title)=>{
        this.props.changePopupVisible(true)
        this.props.getBeihuMapData({name:title })
    }

    render() {
        return (
            <div className={'outer-container'}>
                <div className="visual_conBot_bot">
                    {this.state.alertInfo.map((data, index) => {
                        return (
                            <div key={index} className={'huadong'}>
                                <img className={'alertImg'} src={data.img}/>
                                    <div className={'hover_style'} onClick={()=>{this.showModul(data.title)}}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default class CommunityAlertMap extends Component {

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
        if(item.seriesName == 'villages'){
        if(item.data){
            this.props.getBeihuMapData(item.data);
            this.props.changePopupVisible(true)
        }else return
    }}

    mapOption = () => ({
        visualMap: { //视觉映射组件
            show: false,
            min: 0,
            max: 10, // 侧边滑动的最大值，从数据中获取
            left: '5%',
            top: '80%',
            textStyle: {color: '#17fff3',fontWeight: 600},
            inverse: false, //是否反转 visualMap 组件
            itemHeight:150,  //图形的高度，即长条的高度
            itemWidth:10,
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
            // seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
            orient: "horizontal",
            //range:[4, 4],    //指定手柄对应数值的位置。range 应在 min max 范围内
            inRange: {
                color: ['#0e8d9b','lime', 'yellow', 'orange', '#ff3333'],
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
                        fontSize: 14,
                    }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: false,
                    textStyle: {
                        color: "#fffffb",
                    },
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,//区域边框宽度
                    borderColor: '#02faff',//区域边框颜色
                    shadowColor: 'rgb(75,58,2)',
                    shadowBlur: 10,
                    areaColor: "rgba(2,250,255,0.05)",//区域颜色
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
                name: 'bg',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                    {name: '1号楼', value: [116.62, 35.38, 0]},
                    {name: '2号楼', value: [116.65, 35.38,  0]},
                    {name: '3号楼', value: [116.68, 35.38,  0]},
                    {name: '4号楼', value: [116.76, 35.38,  0]},
                    {name: '5号楼', value: [116.79, 35.38,  0]},
                    {name: '6号楼', value: [116.82, 35.38,  0]},

                    {name: '7号楼', value: [116.62, 35.362,  0]},
                    {name: '8号楼', value: [116.65, 35.362,  0]},
                    {name: '9号楼', value: [116.68, 35.362,  0]},
                    {name: '10号楼', value: [116.76, 35.362,  0]},
                    {name: '11号楼', value: [116.79, 35.362,  0]},
                    {name: '12号楼', value: [116.82, 35.362,  0]},

                    {name: '13号楼', value: [116.62, 35.338,  0]},
                    {name: '14号楼', value: [116.65, 35.338,  0]},
                    {name: '15号楼', value: [116.68, 35.338,  0]},
                    {name: '16号楼', value: [116.76, 35.338,  0]},
                    {name: '17号楼', value: [116.79, 35.338,  0]},
                    {name: '18号楼', value: [116.82, 35.338,  0]},

                    {name: '19号楼', value: [116.62, 35.32,  0]},
                    {name: '20号楼', value: [116.65, 35.32,  0]},
                    {name: '21号楼', value: [116.68, 35.32,  0]},
                    {name: '22号楼', value: [116.76, 35.32,  0]},
                    {name: '23号楼', value: [116.79, 35.32,  0]},
                    {name: '24号楼', value: [116.82, 35.32,  0]},
                ],

                symbol:'path://M884.736 515.072c-1.024-5.632-5.632-12.288-6.144-12.8L757.76 382.464V272.896c0-11.264-9.216-20.48-20.48-20.48h-34.304c-11.264 0-20.48 9.216-20.48 20.48v20.48s0 3.072-1.024 4.096c-0.512 1.024-3.072 1.536-3.072 1.536s-3.584 1.024-5.12-0.512c-1.024-1.024-114.688-113.664-144.384-143.872-4.608-4.608-9.728-7.168-16.896-7.168s-14.848 6.144-14.848 6.144l-348.16 348.672c-0.512 0.512-1.024 1.024-1.024 1.536-5.632 7.168-9.216 20.992-2.56 36.864l2.56 5.632c9.728 17.92 19.968 22.528 23.04 23.552 1.024 0.512 2.56 0.512 3.584 0.512h69.632v273.92c0 10.24 10.24 22.528 22.528 22.528h492.544c13.824 0 22.528-11.776 22.528-22.528v-273.92h70.144c2.048-0.512 20.48-4.096 27.648-19.968 6.656-16.384 6.144-29.696 5.12-35.328zM585.728 814.08c0 2.048-1.536 3.584-3.584 3.584h-140.8c-2.048 0-3.072-1.536-3.584-3.072V638.464c0-10.752 8.704-18.944 18.944-18.944H565.76c10.752 0 18.944 8.704 18.944 18.944V814.08z',
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    period: 5, //波纹秒数
                    brushType: 'stroke', //stroke(涟漪)和fill(扩散)，两种效果
                    scale: 2 //波纹范围
                },
                hoverAnimation: true,

                label: {
                    show: false,
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
            },{
                name: 'villages',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                    {name: '① 10号楼下消防通道占用报警', value: [116.76, 35.365, 2]},
                    {name: '② 南大门值班人员离岗预警', value: [116.66, 35.31, 3]},
                    {name: '③ 北A区翻墙报警', value: [116.63, 35.395, 4]},
                    {name: '④ 北大门人员聚集报警', value: [116.76, 35.395, 6]},
                    {name: '⑤ 14号楼一单元东电梯肢体动作报警', value: [116.65, 35.34, 7]},
                    {name: '⑥ 南D区可疑人员报警', value: [116.81, 35.31, 8]},
                    {name: '⑦ 南大门公安重点人员报警', value: [116.72, 35.32, 9]},
                    {name: '⑧ 北大门网上逃犯报警', value: [116.72, 35.385, 10]},
                ],
                symbol:'path://M992.380834 480.422916h-84.985099C891.985786 286.749042 737.271949 132.014727 543.587836 116.655974v-84.985099A31.567357 31.567357 0 0 0 489.658135 9.31877a31.567357 31.567357 0 0 0-9.245969 22.331626v84.995339c-193.663635 15.358753-348.408189 170.093068-363.79766 363.766942h-84.985099a31.577596 31.577596 0 0 0 0 63.165431h84.985099c15.338275 193.72507 170.093068 348.479863 363.807899 363.828377v85.005578A31.557118 31.557118 0 0 0 512.020479 1023.999898a31.587835 31.587835 0 0 0 31.577596-31.577596v-85.005578c193.71483-15.358753 348.469624-170.103308 363.79766-363.828377h84.995338a31.587835 31.587835 0 0 0 0-63.165431z m-148.160769 0H676.830137a168.096431 168.096431 0 0 0-133.232062-133.191105v-167.410406c158.860701 14.990143 285.611368 141.710093 300.62199 300.601511z m-363.79766 0h-67.885688a104.634064 104.634064 0 0 1 67.885688-67.844731v67.844731z m0 63.165431v67.957362a104.67502 104.67502 0 0 1-67.906166-67.957362h67.906166z m63.17567 0h67.895927a104.68526 104.68526 0 0 1-67.906166 67.957362V543.578108z m0-63.165431v-67.844731a104.623825 104.623825 0 0 1 67.865209 67.844731h-67.875448z m-63.17567-300.601511v167.400167c-67.291816 12.850157-120.340948 65.878811-133.232062 133.201344h-167.410406c15.031099-158.891418 141.792006-285.611368 300.642468-300.601511zM179.790176 543.578108H347.159626c12.860396 67.343012 65.909528 120.44334 133.262779 133.273018v167.410406c-158.901657-15.000382-285.672803-141.740811-300.632229-300.683424z m363.79766 300.683424v-167.410406c67.353251-12.829678 120.412622-65.940246 133.262779-133.273018h167.36945c-14.949186 158.942614-141.730571 285.683043-300.62199 300.683424z',
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    period: 3, //波纹秒数
                    brushType: 'fill', //stroke(涟漪)和fill(扩散)，两种效果
                    scale: 2.2 //波纹范围
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
                    style={{height: '36.5vh', width: '100%'}}
                    className='map_content map_bg'/>
                <div>
                    <AlertCarousel changePopupVisible={this.props.changePopupVisible} getBeihuMapData={this.props.getBeihuMapData}/>
                    <div style={{height: '1vh'}}></div>
                </div>

            </CommunityCard>

        );
    }
}
