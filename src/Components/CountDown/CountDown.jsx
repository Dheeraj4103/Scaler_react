import React, { Component } from 'react';


class CountDown extends Component {

    state = {
        current: this.props.startForm,
    }
    
    componentDidMount() {
        setInterval(() => {
            if (this.state.current > 0) {
                this.setState({ current: this.state.current - 1 });
            }
        }, 1000)
    }

    
    render() {
        return(
            <div>Count Down { this.state.current}</div>
        );
    };
};

export default CountDown;