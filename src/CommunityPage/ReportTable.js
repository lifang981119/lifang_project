import React from 'react';
import './ReportTable.less';
import CommunityCard from "./CommunityCard";



export default class ReportTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            tableData:[
                {td1:'消防通道占用报警',td2:'10号楼下',td3:'2020-05-01 08:00',td4:'1',title:'① 10号楼下消防通道占用报警'},
                {td1:'空岗离岗报警',td2:'社区南门',td3:'2020-05-01 09:30',td4:'2',title:'② 南大门值班人员离岗预警'},
                {td1:'攀登墙体报警',td2:'北A区外墙',td3:'2020-05-01 10:00',td4:'3',title:'③ 北A区翻墙报警'},
                {td1:'人群聚集报警',td2:'社区北门',td3:'2020-05-01 10:30',td4:'4',title:'④ 北大门人员聚集报警'},
                {td1:'动作剧烈报警',td2:'14号楼电梯',td3:'2020-05-01 12:30',td4:'5',title:'⑤ 14号楼一单元东电梯肢体动作报警'},
                {td1:'可疑人员报警',td2:'南D区墙外',td3:'2020-05-01 14:00',td4:'6',title:'⑥ 南D区可疑人员报警'},
                {td1:'重点人员报警',td2:'社区南门',td3:'2020-05-01 18:00',td4:'7',title:'⑦ 南大门公安重点人员报警'},
                {td1:'网上逃犯报警',td2:'社区北门',td3:'2020-05-01 20:00',td4:'8',title:'⑧ 北大门网上逃犯报警'},
            ]
        }
    }

    function=(title)=>{
        this.props.changePopupVisible(true)
        this.props.getBeihuMapData({name:title })
    }

    render() {

        return (
            <CommunityCard title={this.props.title}>

                <div className={'outer-containers'}>
                    <div className={'report_table'} style={{height: '25vh', width: '100%'}}>
                        <div className={"mainbox"}>
                            <div className={"responsive"}>
                                <table>
                                    <tbody>
                                    <tr style={{color: '#00ffea', fontWeight: '500'}}>
                                        <td>报警类型</td>
                                        <td>报警地点</td>
                                        <td>报警时间</td>
                                        <td>严重等级</td>
                                        <td>处理操作</td>
                                    </tr>
                                    {
                                        this.state.tableData.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.td1}</td>
                                                    <td>{data.td2}</td>
                                                    <td>{data.td3}</td>
                                                    <td>{data.td4}</td>
                                                    <td className={'table_a'} onClick={()=>{this.function(data.title)}}>追踪</td>
                                                </tr>
                                            )
                                        })
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </CommunityCard>
        )
    }


}

