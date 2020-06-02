import React from 'react';
import './HouseInfoPopup.less';


export default class HouseInfoPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    }
  }

  closePopup = () => {
    this.props.changePopupVisible(false)
  }

  render() {

    if (this.props.popupVisible) {
      return (
        <div className={'house_info_popup'}>
          <div className={'popup_box'}>

            <div className={'popup_body'}>
              <div className={"mainbox"}>
                <div className={"responsive"}>
                  <table>
                    <tbody>
                    <tr style={{color: '#00ffea', fontWeight: '500'}}>
                      <td>姓名</td>
                      <td>单元</td>
                      <td>房间</td>
                      <td>身份</td>
                      <td>联系电话</td>
                    </tr>
                    {
                      this.state.testArr.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>李小芳</td>
                            <td>二单元</td>
                            <td>501</td>
                            <td>户主</td>
                            <td>9811819</td>
                          </tr>
                        )
                      })
                    }

                    </tbody>
                  </table>
                </div>
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

