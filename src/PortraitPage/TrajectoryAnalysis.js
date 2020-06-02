import React from 'react';
import './TrajectoryAnalysis.less';
import {Layout, Row, Col,} from 'antd';
import CommunityCard from "../CommunityPage/CommunityCard";
import QuestionImg1 from '../assets/images/question1.png';
import QuestionImg2 from '../assets/images/question2.png';
import QuestionImg3 from '../assets/images/question3.png';
import QuestionImg4 from '../assets/images/question4.png';
import QuestionImg5 from '../assets/images/question5.png';
import QuestionImg6 from '../assets/images/question6.png';


export default class TrajectoryAnalysis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      arr:[
        {
          title:'环境卫生问题',
          time:'2020-05-01 18:00',
          body:'八号楼下的垃圾桶经常没有及时倾倒，希望你们能留意下，谢谢。',
          status:'已回访',
          name:'李女士',
          phone:'98111819',
          image: QuestionImg1,
        },
        {
          title:'安全隐患问题',
          time:'2020-05-02 14:00',
          body:'小区的人工湖岸边有很多结伴玩耍的小孩子，希望可以装上护栏。',
          status:'未处理',
          name:'李先生',
          phone:'11191118',
          image: QuestionImg2,
        },
        {
          title:'安全隐患问题',
          time:'2020-05-03 23:50',
          body:'小区的路灯23:45就熄灭了，有时加班回家，黑暗中总觉得不安全。',
          status:'已回访',
          name:'李女士',
          phone:'98111819',
          image: QuestionImg3,
        },
        {
          title:'环境卫生问题',
          time:'2020-05-04 08:00',
          body:'公园的大栀子花缺水好几天了，希望物业人员看下，给它浇点水呀。',
          status:'已回访',
          name:'李女士',
          phone:'98111819',
          image: QuestionImg4,
        },
        {
          title:'服务态度问题',
          time:'2020-05-05 22:00',
          body:'忘带门禁卡了，非要女朋友下楼领，害我被嘲笑。,,Ծ‸Ծ,,',
          status:'未处理',
          name:'李先生',
          phone:'11191118',
          image: QuestionImg5,
        },
        {
          title:'其它问题',
          time:'2020-05-06 08:00',
          body:'希望八号楼下的公园里可以添加两个跷跷板，最近挺想玩的。',
          status:'未处理',
          name:'李女士',
          phone:'98111819',
          image: QuestionImg6,
        },
      ]
    }
  }


  render() {
    return (
      <CommunityCard title={this.props.title}>
        <div className={'trajectory_analysis'} style={{height: '87vh'}}>
          <div className={'trajectory_title'} style={{height: '5vh'}}>
            <h1 className={'trajectory_title_text'}>最新评议：共发现信息：<span
              className={'trajectory_title_number'}>6</span>条</h1>
          </div>
          <div className={'outer-container'}>
            <div className={'trajectory_body'} style={{height: '82vh'}}>

              {this.state.arr.map((data, index) => {
                return (
                  <div className={'trajectory_info_box'} key={index}>
                    <h1 className={'trajectory_info_text'}>{data.title}</h1>
                    <p className={'trajectory_info_time'}>{data.time}</p>
                    <div className={'outer-container'}>
                      <div className={'trajectory_img_box'}>
                         <img className={'trajectory_img_style'} src={data.image}/>
                         <div style={{display:"inline-block"}}>
                           <h1 className={'question_title'}>问题详情：</h1>
                           <h1 className={'question_body'}>{data.body}</h1>
                         </div>
                      </div>
                    </div>
                    <p className={'trajectory_info_text2'}>投诉人：{data.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回访电话：{data.phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：<span style={data.status == '未处理' ? {color:'#ff130d'} : {color:'#12d722'}}>{data.status}</span></p>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </CommunityCard>
    );
  }
}
