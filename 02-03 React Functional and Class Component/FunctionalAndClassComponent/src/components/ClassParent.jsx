import React from 'react';
import ClassChild from './ClassChild';
class ClassParent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            count: 1
        }
    }
    incrementCount = () =>
    {
        this.setState({ count: this.state.count + 1 });
    }

    render()
    {
        return (
            <>
                <h2>Hello</h2>
                <h1>{this.state.count}</h1>
                <ClassChild count={{ count: this.state.count, setState: this.incrementCount }} />
            </>
        )
    }
}

export default ClassParent;