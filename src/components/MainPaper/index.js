import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class MainPaper extends Component {
    render(){
        return (
            <Paper zDepth={5}>
                {this.props.children}
            </Paper>
        )
    }
}