import React from 'react'
import Button from './Button'

export default class StopWatch extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            counter: 0,
            startFlag: false,
            laps: []
        }
    }

    startCounter = () =>
    {
        if (!this.state.startFlag)
        {
            this.setState({ startFlag: true })
            this.interval = setInterval(() =>
            {
                this.setState((prevState) => ({
                    counter: prevState.counter + 1
                }))
            }, 1000)
        }
    }

    stopCounter = () =>
    {
        clearInterval(this.interval);
        this.setState({ startFlag: false })
    }

    renderLaps = () =>
    {
        this.setState((prevState) => ({ laps: [...prevState.laps, prevState.counter] }))
    }
    render()
    {
        return (
            <div>
                <p>{this.state.counter}</p>
                <Button name="Start" eventHandler={this.startCounter} />

                {
                    !this.state.startFlag ?
                        <button onClick={this.stopCounter}>Reset</button>
                        : <button onClick={this.stopCounter}>Stop</button>
                }
                <button onClick={this.renderLaps}>Laps</button>
                <ul>
                    {
                        this.state.laps.map(ele =>
                        {
                            return <li>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}