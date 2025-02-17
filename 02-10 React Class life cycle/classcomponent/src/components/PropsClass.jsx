import React from 'react';
export default class PropsClass extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {
                        this.props.number.map(num =>
                        {
                            return <li>{num}</li>
                        })
                    }
                </ul>

                {
                    this.props.ele
                }

                {
                    this.props.children
                }
            </div>
        )
    }
}