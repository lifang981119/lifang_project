import React, { Component } from 'react'
import { Card } from 'antd'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
import ChartTop from "../assets/images/chartTop.png";



export default class HomePie extends Component {

    getOption = ()=>{
        let option = {
            tooltip : {
                trigger: 'item',
                //提示框浮层内容格式器，支持字符串模板和回调函数形式。
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: '4.5%',
                y: 'center',
                itemWidth: 20,   // 设置图例图形的宽
                itemHeight: 15,  // 设置图例图形的高
                textStyle: {
                    fontSize:13,
                    color: '#01ddd7'  // 图例文字颜色
                },
                itemGap: 20,
            },


            series : [
                {
                    name:'数据统计',
                    type:'pie',
                    radius: ['65%', '80%'],
                    center: ['65%', '50%'], //图的位置，距离左跟上的位置
                    color:['#57fff0','#0dd3ff','#0794ff','#4f63fb',],
                    label: { 　　　　　　　　　　//去除饼图的指示折线label
                        normal: {
                            show: false,
                            position: 'inside',
                            formatter: "{b}:{d}%"
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,   // show设置线是否显示，默认为true，可选值：true ¦ false
                        }
                    },
                    data:this.props.pieData,
                },
            ]
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
