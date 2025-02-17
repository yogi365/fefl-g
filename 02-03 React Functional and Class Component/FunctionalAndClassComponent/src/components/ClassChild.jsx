import React from 'react';

class ClassChild extends React.Component
{
    constructor(props)
    {
        super(props);

    }



    render()
    {
        return (<>
            <button onClick={this.props.count.setState}>Increment</button>
        </>)
    }
}

export default ClassChild;