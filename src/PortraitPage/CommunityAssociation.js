import React from 'react';
import './CommunityAssociation.less';
import CommunityCard from "../CommunityPage/CommunityCard";

export default class CommunityAssociation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testArr: [1,2,3,4,5,6,7,8,9]
        }

    }

    render() {

        return (
            <CommunityCard title={this.props.title}>
                <div className={'community_association'} style={{height: '14vh'}}>
                    <div className={'community_association_left'}>
                        <h1 className={'community_association_text'}>户籍地址：<span className={'address_text'}>山东省济宁市北湖区</span></h1>
                        <h1 className={'community_association_text'}>现居地址：<span className={'address_text'}>山东省济宁市北湖区高校生活园B1号楼</span></h1>
                    </div>
                    <div className={'community_association_right'}>
                        <a href={'/communityDetails'}><div className={'community_link'}></div></a>
                    </div>
                </div>
            </CommunityCard>
        );
    }
}
