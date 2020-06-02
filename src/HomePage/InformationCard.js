import React from 'react';
import './InformationCard.less';


class InformationCardSub extends React.Component {
    render() {
        return (
            <div className="visual_conTop_box visual_conTop1" style={this.props.width}>
                <div>
                    <h3 style={{color:'#00ffff',fontWeight:'500'}}>{this.props.title}</h3>
                    <p>{this.props.number}</p>
                </div>
            </div>
        )
    }

}

export default class InformationCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'information-card'} >
                <div className="visual_con">
                    <div className="visual_conTop">
                        <InformationCardSub title={'社区楼数'} number={24} width={{'width': '20%'}}/>
                        <InformationCardSub title={'社区常住人口'} number={2941} width={{'width': '30%'}}/>
                        <InformationCardSub title={'社区车辆'} number={647} width={{'width': '20%'}}/>
                        <InformationCardSub title={'物业及安保人员'} number={102} width={{'width': '30%'}}/>
                    </div>
                </div>
            </div>
        )
    }


}

