import React, { Component } from 'react';
import { Collapse } from 'antd';
import WrappedLink from './WrappedLink'
import 'antd/dist/antd.css';


class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : {
                "issues": [
                    {
                        "issueTitle" : "Issue 1",
                        "issueDesc": "Super cette issue",
                        "issueDate": "1, Janv 2018"
                    },
                    {
                        "issueTitle" : "Issue 2",
                        "issueDesc": "Nul cette issue",
                        "issueDate": "2, Janv 2018"
                    },
                    {
                        "issueTitle" : "Issue 3",
                        "issueDesc": "Bof cette issue",
                        "issueDate": "3, Janv 2018"
                    }
                ]
            }
        }
    }

    render() {
        const Panel = Collapse.Panel;
        return (
            <div className="MainPage">
                <div className="header">
                    <h1> My issue Project </h1>
                </div>
                <div className="core">
                    <Collapse accordion>
                    {
                        this.state.data.issues.map((el, index) => ( 
                            <Panel header={el.issueTitle} key={index}>
                                <p>{el.issueDesc}</p>
                                <WrappedLink issueTitle={el.issueTitle} issueDesc={el.issueDesc} index={index} />

                            </Panel>
                        ))  
                    }
                    </Collapse>
                </div>
            </div>
        );
    }
}

export default MainPage;