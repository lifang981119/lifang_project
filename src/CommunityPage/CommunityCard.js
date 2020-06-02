import React from 'react';
import './CommunityCard.less';
import {Layout, Row, Col, } from 'antd';
import CardTitle from "../assets/images/community_title.png";


export default class CommunityCard extends React.Component{
    constructor(props){
        super(props)
    }

    render() {

    return(
        <div className={'community-card'}>
            <img className={'card-title-img'}  src={CardTitle}/>
            <h1 style={{}} className={'card-title-text'}>{this.props.title}</h1>
            <i className="card-body-topL"></i>
            <i className="card-body-topR"></i>
            <i className="card-body-bottomL"></i>
            <i className="card-body-bottomR"></i>
            {this.props.children ? this.props.children : ''}
        </div>
    )
    }
}


