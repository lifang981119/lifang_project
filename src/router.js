import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import BasicLayout from '@ant-design/pro-layout';
import {Menu, Icon, Layout, Spin} from "antd";
import Home from './HomePage/Home';
import Community from './CommunityPage/Community';
import Portrait from './PortraitPage/Portrait'
import CommunityDetails from "./CommunityPage/CommunitDetails";
import Logo from './assets/images/c.png';

export default class Routes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async _loadToken() {
    const token = window.localStorage.getItem('jwt');

    // if (token) {
    //   agent.setToken(token);
    //   await this.props.loadAuth();
    // }
  }


  componentDidMount() {
    this._loadToken().then(() => {
      this.setState({loading: false});
    })
  }

  render() {
    // return (<Community/>);

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/community" component={Community}/>
          <Route path="/portrait" component={Portrait}/>
          <Route path="/communityDetails" component={CommunityDetails}/>
        </Switch>
      </div>
    )
  }

}

// const mapStateToProps = state => {
//   return {
//     user: state.authReducer.user,
//     router: state.router
//   };
// };
//
// export default connect(mapStateToProps, {push, loadAuth, logout, loadPromotions, loadCategories})(Routes);
