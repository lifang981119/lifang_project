import React from 'react';
import './PeopleRelation.less';
import CommunityCard from "../CommunityPage/CommunityCard";


export default class PeopleRelation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    }

  }

  render() {

    return (
      <CommunityCard title={this.props.title}>

        <div className={'people-relation'} style={{height: '15.5vh'}}>

          {this.props.info.relation.map(data => <div className={'single-relation'}>

            <img style={{height: '10vh', borderRadius: '5vh'}} src={data.face}/>
            <h4 style={{color: '#0de1ef', marginTop: 5}}>{data.type}</h4>

          </div>)}

        </div>

      </CommunityCard>)
  }
}
