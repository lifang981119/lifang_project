import React from 'react';
import './CommunityPopup.less';
import VillageImg from '../assets/images/village_test.jpg';
import AlertImg1 from '../assets/images/alert1.png';
import AlertImg2 from '../assets/images/alert2.png';
import AlertImg3 from '../assets/images/alert3.png';
import AlertImg4 from '../assets/images/alert4.png';
import AlertImg5 from '../assets/images/alert5.png';
import AlertImg6 from '../assets/images/alert6.png';
import AlertImg7 from '../assets/images/alert7.png';
import AlertImg8 from '../assets/images/alert8.png';


export default class CommunityPopup extends React.Component {
    constructor(props) {
        super(props);
    }

    closePopup = () => {
        this.props.changePopupVisible(false)
    }

    render() {

        console.log(this.props.beihuMapData.name)

        if (this.props.popupVisible) {
            return (

                <div className={'community_popup'}>
                    {this.props.beihuMapData.name ? (<div className={'popup_box'}>
                        <div className={'popup_body'}>
                            <div className={'popup_body_left'}>
                                <div className={'body_left_villageImg'}>
                                    <img className={'villageImg_style'} src={this.props.beihuMapData.name == '① 10号楼下消防通道占用报警' ? AlertImg1 : this.props.beihuMapData.name == '② 南大门值班人员离岗预警' ? AlertImg2 :  this.props.beihuMapData.name == '③ 北A区翻墙报警' ? AlertImg3 : this.props.beihuMapData.name == '④ 北大门人员聚集报警' ?  AlertImg4 : this.props.beihuMapData.name == '⑤ 14号楼一单元东电梯肢体动作报警' ?  AlertImg5 : this.props.beihuMapData.name == '⑥ 南D区可疑人员报警' ? AlertImg6 : this.props.beihuMapData.name == '⑦ 南大门公安重点人员报警' ?   AlertImg7 : AlertImg8  }/>
                                </div>
                                <div style={{marginTop:'8px'}}>
                                <span style={{color:'#00e8ff',fontSize:'12px',}}>
                                    <span style={{color:'#14ffcc',fontSize:'13px',fontWeight:600}}>报警详情：</span>
                                    {this.props.beihuMapData.name == '① 10号楼下消防通道占用报警' ? '已登记车辆鲁D1819,车主系八号楼二单元业主李小芳，车辆未停到地下车库，占用了消防通道，请及时处理。' : this.props.beihuMapData.name == '② 南大门值班人员离岗预警' ? '社区南门值班人员李小芳已不在岗15分钟，形成空岗行为，为确保社区安全，请及时联系其回到岗位。' :   this.props.beihuMapData.name == '③ 北A区翻墙报警' ? '社区北墙A区发现存在人员攀登入侵行为，请立刻派人查看制止，警惕不良犯罪分子，防止非法入侵。' : this.props.beihuMapData.name == '④ 北大门人员聚集报警' ?  '社区北大门外存在大量人群聚集现象，请注意查看。避免发生群体斗殴或聚众闹事行为危害到业主人身安全。' : this.props.beihuMapData.name == '⑤ 14号楼一单元东电梯肢体动作报警' ?  '14号楼一单元东电梯检测到业主存在肢体剧烈活动行为，请注意关注业主是否受到伤害或产生冲突打架斗殴。' : this.props.beihuMapData.name == '⑥ 南D区可疑人员报警' ? '南D区外墙三天连续发现同一人员，经比对不在业主登记信息库中，请注意防范，警惕该人员进行犯罪活动。' : this.props.beihuMapData.name == '⑦ 南大门公安重点人员报警' ?  '社区南大门处发现疑似易犯罪危险分子李小芳，经对比面部相似度97%，请时刻关注其动向，确保业主安全。' : '社区北门处发现疑似在逃人员李大芳，经公安网络在逃人员信息库对比，面部相似度98%，一级报警请慎重处理。'  }</span>
                                </div>
                            </div>
                            <div className={'popup_body_right'}>
                                <div className={'villageImg_bottom_left'}>拉响紧急警报</div>
                                <div className={'villageImg_bottom_left'}>进行广播喊话</div>
                                <div className={'villageImg_bottom_left'}>直拨火警中心</div>
                                <div className={'villageImg_bottom_left'}>直拨民警中心</div>
                            </div>
                        </div>
                        <div className={'close_popup'} onClick={this.closePopup}></div>
                    </div>) : (<div className={'popup_box'}>
                        <div className={'popup_body'}>
                            <div className={'popup_body_left'}>
                                <div style={{marginTop:'30px'}} className={'villageImg_bottom_left'}>拉响紧急警报</div>
                                <div style={{marginTop:'60px'}} className={'villageImg_bottom_left'}>进行广播喊话</div>
                            </div>
                            <div className={'popup_body_right'}>
                                <div style={{marginTop:'30px'}} className={'villageImg_bottom_left'}>直拨火警中心</div>
                                <div style={{marginTop:'60px'}} className={'villageImg_bottom_left'}>直拨民警中心</div>
                            </div>
                        </div>
                        <div className={'close_popup'} onClick={this.closePopup}></div>
                    </div>)}

                </div>
            )
        } else {
            return ('')
        }
    }


}

