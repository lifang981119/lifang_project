import React, {Component} from "react";
import ReactEcharts from "echarts-for-react";
import {registerMap, getMap} from "echarts";
import beihu_data from '../assets/json/教职工社区';
import './HomeMap.less';
import EdgeAngle1 from '../assets/images/ksh42.png';
import EdgeAngle2 from '../assets/images/ksh43.png';
import EdgeAngle3 from '../assets/images/ksh44.png';
import EdgeAngle4 from '../assets/images/ksh45.png';
import NavBg from '../assets/images/nav_bg.png';
import {Row, Col} from 'antd';

class AlertCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alertInfo: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    }
  }


  render() {
    return (
        <div className={'outer-container'}>
          <div className="visual_conBot_bot">

          </div>
        </div>
    )
  }
}

export default class HomeMap extends Component {


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
      this.props.getMapData(item.data);
      this.props.changePopupVisible(true)
    }else return
  }

  mapOption = () => ({
    // visualMap: { //视觉映射组件
    //   show: true,
    //   min: 0,
    //   max: 100, // 侧边滑动的最大值，从数据中获取
    //   left: '3%',
    //   bottom: '7%',
    //   textStyle: {color: '#17fff3',fontWeight: 600},
    //   inverse: false, //是否反转 visualMap 组件
    //   itemHeight:150,  //图形的高度，即长条的高度
    //   itemWidth:10,
    //   text: ['高', '低'], // 文本，默认为数值文本
    //   calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）
    //   // seriesIndex: 1, //指定取哪个系列的数据，即哪个系列的 series.data,默认取所有系列
    //   orient: "horizontal",
    //   //range:[4, 4],    //指定手柄对应数值的位置。range 应在 min max 范围内
    //   inRange: {
    //     color: ['aqua', 'lime', 'yellow', 'orange', '#ff3333'],
    //   },
    // },
    geo: {
      map: 'beihu',
      roam: false,
      zoom: 1.2,
      layoutCenter: ['50%', '50%'],
      y: '13%',
      x: '10%',
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
        data: [
          {name: '1号楼', value: [116.62, 35.38, 100]},
          {name: '2号楼', value: [116.65, 35.38, 50]},
          {name: '3号楼', value: [116.68, 35.38, 90]},
          {name: '4号楼', value: [116.76, 35.38, 70]},
          {name: '5号楼', value: [116.79, 35.38, 20]},
          {name: '6号楼', value: [116.82, 35.38, 50]},

          {name: '7号楼', value: [116.62, 35.362, 90]},
          {name: '8号楼', value: [116.65, 35.362, 100]},
          {name: '9号楼', value: [116.68, 35.362, 50]},
          {name: '10号楼', value: [116.76, 35.362, 30]},
          {name: '11号楼', value: [116.79, 35.362, 80]},
          {name: '12号楼', value: [116.82, 35.362, 10]},

          {name: '13号楼', value: [116.62, 35.338, 20]},
          {name: '14号楼', value: [116.65, 35.338, 30]},
          {name: '15号楼', value: [116.68, 35.338, 50]},
          {name: '16号楼', value: [116.76, 35.338, 70]},
          {name: '17号楼', value: [116.79, 35.338, 100]},
          {name: '18号楼', value: [116.82, 35.338, 80]},

          {name: '19号楼', value: [116.62, 35.32, 30]},
          {name: '20号楼', value: [116.65, 35.32, 50]},
          {name: '21号楼', value: [116.68, 35.32, 70]},
          {name: '22号楼', value: [116.76, 35.32, 80]},
          {name: '23号楼', value: [116.79, 35.32, 30]},
          {name: '24号楼', value: [116.82, 35.32, 60]},
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
        <div className={'map'}>


          <div className="visual_con">

            <div className="visual_conBot">
              <img className={'visual_conBot_l'} src={EdgeAngle1}/>
              <img className={'visual_conBot_2'} src={EdgeAngle2}/>
              <img className={'visual_conBot_3'} src={EdgeAngle3}/>
              <img className={'visual_conBot_4'} src={EdgeAngle4}/>
              <div className={"visual_chart"} id="main8">
                <ReactEcharts
                    option={this.mapOption()}
                    onEvents={this.mapEvent()}
                    style={{height: '50vh', width: '100%'}}
                    className='map_content map_bg'/>
              </div>
              <div>
                <div style={{height: '1px'}}></div>
              </div>
            </div>
          </div>


          <Row style={{height: '100%', width: '100%', textAlign: 'center',}}>
            <Col span={8}>
              <div className={'small_nav1'}><a href={'/community'}><img className={'nav_img'} src={NavBg}/></a></div>
            </Col>
            <Col span={8}>
              <div className={'small_nav2'}><a href={'/portrait'}><img className={'nav_img'} src={NavBg}/></a>
              </div>
            </Col>
            <Col span={8}>
              <div className={'small_nav3'}><a href={'/communityDetails'}><img className={'nav_img'} src={NavBg}/></a></div>
            </Col>
          </Row>

        </div>
    );
  }
}
