import React from 'react';
import './CommunityTable.less';
import CommunityCard from "./CommunityCard";


export default class CommunityTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }

    render() {

        return (
            <CommunityCard title={this.props.title}>

                <div className={'outer-container'}>
                    <div className={'community_table'} style={{height: '25vh', width: '100%'}}>
                        <div className={"mainbox"}>
                            <div className={"responsive"}>
                                <table>
                                    <tbody>
                                    <tr style={{color: '#00ffea', fontWeight: '500'}}>
                                        <td>{this.props.tableData ? this.props.tableData.thead.td1 : ''}</td>
                                        <td>{this.props.tableData ? this.props.tableData.thead.td2 : ''}</td>
                                        <td>{this.props.tableData ? this.props.tableData.thead.td3 : ''}</td>
                                        <td>{this.props.tableData ? this.props.tableData.thead.td4 : ''}</td>
                                    </tr>
                                    {
                                        this.state.testArr.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{this.props.tableData ? this.props.tableData.tbody.td1 : ''}</td>
                                                    <td>{this.props.tableData ? this.props.tableData.tbody.td2 : ''}</td>
                                                    <td>{this.props.tableData ? this.props.tableData.tbody.td3 : ''}</td>
                                                    <td>{this.props.tableData ? this.props.tableData.tbody.td4 : ''}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </CommunityCard>
        )
    }


}

