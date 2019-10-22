import * as React from "react"


//TODO нужно тут все подчистить и вправить на место, сейчас не работает, потому что я еще не доконца заюзал TS

interface MyProps {
    data: object,
    Valute: object,
    EUR: object
}

interface MyState {
    data: object,
    Valute: object,
    EUR: object
}

export class Hello extends React.Component<MyProps, MyState> {
    public state: MyState = {
        data: {
            Valute: {
                EUR: {}
            }
        }
    }
    // state = {

    // }

    componentDidMount(): void {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
            method: 'get',
            // mode: 'no-cors'
        })
            .then(result => result.json())
            .then(data => this.setState({data}))
    }

    render() {
        console.log('--this.state.data', this.state.data)
        const valute: object = this.state.data.Valute
        const EUR: object = valute.EUR
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