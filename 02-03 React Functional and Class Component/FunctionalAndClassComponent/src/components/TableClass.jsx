import React, { Component } from 'react'

class TableClass extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.contact}</td>
            </tr>
        )
    }
}

export default TableClass;