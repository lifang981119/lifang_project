import React from 'react';
import './HomePopup.less';
import VillageImg from "../assets/images/village_test.jpg";

export default class HomePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    }
  }

  closePopup = () => {
    this.props.changePopupVisible(false)
  }

  render() {
    console.log(this.props.MapData)

    if (this.props.popupVisible) {
      return (
        <div className={'home_popup'}>
          <div className={'popup_box'}>
            <div className={'popup_body'}>
              <div className={'popup_body_left'}>
                <div className={'body_left_villageImg'}>
                  <img className={'villageImg_style'} src={VillageImg}/>
                </div>
                <div className={'villageImg_bottom_style'}>
                  <div className={'villageImg_bottom_left'}><a target='_blank' rel='noopener noreferer'  href={'/communityDetails'}>查看详细信息</a></div>
                </div>
              </div>
              <div className={'popup_body_right'}>
                <h1 className={'body_right_title'}>{'教职工社区' + this.props.MapData.name}</h1>
                <h1 className={'body_right_text'}>总人口数：<span className={'body_right_number'}>{this.props.MapData.value[2]}</span></h1>
                <h1 className={'body_right_text'}>常住人口：<span className={'body_right_number'}>{this.props.MapData.value[2] - 3}</span></h1>
                <h1 className={'body_right_text'}>物业负责人：<span className={'body_right_number'}>李小芳</span></h1>
                <h1 className={'body_right_text'}>负责人电话：<span className={'body_right_number'}>9811819</span></h1>
              </div>
            </div>
            <div className={'close_popup'} onClick={this.closePopup}></div>
          </div>
        </div>
      )
    } else {
      return ('')
    }
  }


}

