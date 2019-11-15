import * as React from "react"

export interface MyProps {
    data: object,
    Valute: object,
    EUR?: any
}

interface MyState {}

export default class App extends React.Component<MyProps, MyState> {

    componentDidMount(): void {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
            method: 'get',
            // mode: 'no-cors'
        })
            .then(result => result.json())
            .then(data => this.setState({data}))
    }

    render() {
        const {EUR}: any = this.props.Valute
        return (
            <main>
                <h1>call data and show</h1>
                <small>{new Date().toDateString()}</small>
                <table>
                    <thead>
                    <tr>
                        <td>Валюта</td>
                        <td>Курс</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {'EUR'}
                        </td>
                        <td>
                            {EUR}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </main>
        )
    }
}
