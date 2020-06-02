import React from 'react';
import './HouseInfo.less';
import {Row, Col,} from 'antd';
import CommunityCard from "./CommunityCard";


export default class HouseInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, ],
        }
    }

    render() {

        return (
            <CommunityCard title={this.props.title}>
                <div className={'house_info_outer'}>
                    <div className={'house_info'} style={{height: '55.5vh', width: '100%'}}>
                        <Row>
                            {
                                this.state.testArr.map((data, index) => {
                                    return (
                                        <Col span={8} key={index}>
                                            <div className={'house_info_box'}>
                                                <div className={'house_info_name'}>教职工社区{index + 1}号楼</div>
                                                <h1 className={'house_info_text'}>居民总数：<span
                                                    className={'house_info_number1'}>{97 + index * 2}</span>人</h1>
                                                <h1 className={'house_info_text'}>安保人员：<span
                                                    className={'house_info_number2'}>2</span>人</h1>
                                                {this.props.popupVisible ? '' :
                                                    <div className={'house_info_hover'} onClick={() => {
                                                        this.props.changePopupVisible(true)
                                                    }}></div>}
                                            </div>
                                        </Col>
                                    )
                                })
                            }


                        </Row>
                    </div>
                </div>
            </CommunityCard>
        )
    }


}

