import React, { Component } from 'react';
import UseState from './hooks/useState'

class app extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <UseState/>
            </div>
        );
    }
}

export default app;