import React, {Component} from 'react'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import CommunityCard from "../CommunityPage/CommunityCard";

export default class ScatterDiagram extends Component {

  getOption = () => {
    let option = {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      series: [
        {
          name: '评议处理率',
          type: 'gauge',
          center : ['50%', '55%'],    // 默认全局居中
          radius : '80%',
          detail: {formatter: '{value}%'},
          data: [{value: 75, name: '评议处理率'}],
          title : {               //设置仪表盘中间显示文字样式
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic',
              color:"white"
            }
          },
          axisLine: {            // 仪表盘轴线
            lineStyle: {       // 属性lineStyle控制线条样式
              color: [[1, 'rgba(8,255,242,0.77)']],
              width: 20,
              shadowColor : '#00ffd2', //默认透明
              shadowBlur: 10
            }
          },
        }
      ]
    };


    return option;
  }

  render() {
    return (
        <CommunityCard title={this.props.title}>
          <ReactEcharts
              option={this.getOption()}
              style={{height: '40vh', width: '100%'}}
              className='react_for_echarts'/>
        </CommunityCard>
    )
  }
}
