import React, {Component } from 'react';

class Issue extends Component {
    render(){
        console.log('stateIssue', this.state)

        return (
            <div className="Issue">
                <h1>Welcome to the Issue n°{this.props.match.params.id} full view</h1>
                <h2>Issue title : {this.props.location.state.title}</h2>
                <p>
                    Text : "{this.props.location.state.text}"
                </p>
            </div>
        )
    }
}

export default Issue;