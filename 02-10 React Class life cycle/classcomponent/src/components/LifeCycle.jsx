import React from 'react'
export default class LifeCycle extends React.Component
{

    constructor(props)
    {
        super(props);
        console.log('Constructor is called');
        this.state = {
            counter: 0
        }
    }

    getDrivedStateFromProps(prevProps, prevState)
    {
        console.log("Get derived state")
        return null;
    }
    render()
    {
        return (
            <div>
                <h2>Render function called</h2>
                <p>{this.state.counter}</p>
            </div>
        )
    }
    componentDidMount()
    {
        console.log("ComponentDidMount");
        this.interval = setInterval(() =>
        {
            this.setState((prevState) => ({ counter: prevState.counter + 1 }));
        }, 3000)
    }


    shouldComponentUpdate(props, state)
    {
        if (state.counter != 5)
        {
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate()
    {
        console.log("Getsnapshot before update");
    }
    componentDidUpdate()
    {
        console.log("Component Did Update");
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
        console.log("Component Unmounted")
    }


}