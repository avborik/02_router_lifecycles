import React, {Component} from 'react';

class Life extends Component {

    // 1 get default props

    // 2 set default state
    state = {
        title:'Life cycles'
    }

    // // 5 after render
    componentDidMount(){
        console.log('5 after render')
        document.querySelector('h3').style.color = 'red'
    }

    // // 3 before render
    componentWillMount(){
        console.log('3 before render');
    }

    // componentWillUpdate(){
    //     console.log('BEFORE UPDATE')
    // }

    // componentDidUpdate(){
    //     console.log('AFTER UPDATE')
    // }

    // shouldComponentUpdate(nextProps,nextState){
        
    //     if(nextState.title === this.state.title){
    //         return false
    //     }

    //     return true;
    // }

    // componentWillReceiveProps(){
    //     console.log('BEFORE RECEIVE PROPS')
    // }

    // componentWillUnmount(){
    //     console.log('UNMOUNT')
    // }

    // 4 render jxs

    render (){
        return(
        <div>
            <h3>{this.state.title}</h3>
        </div>
        )
    }
}

export default Life;