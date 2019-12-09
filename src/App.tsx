import * as React from "react"

interface IState {
    data: {
        [key: string]: IValutes
    }
}

interface IValutes {
    [key: string]: {
        Value: number
    }
}

export default class App extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            data: {
                Valute: {
                    EUR: {
                        Value: 0
                    },
                    USD: {
                        Value: 0
                    }
                }
            }
        }
    }

    componentDidMount() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
            method: 'get',
        })
            .then(result => result.json())
            .then(data => this.setState({data}))
    }

    render() {
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

                    <SmallTable
                        eur={this.state.data.Valute.EUR.Value}
                        usd={this.state.data.Valute.USD.Value}
                    />
                </table>
            </main>
        )
    }
}

type TableProps = {
    eur: number,
    usd: number
}

const SmallTable: React.FunctionComponent<TableProps> = (data) => {
    return (
        <tbody>
        <tr>

            <td>
                EUR
            </td>
            <td>
                {data.eur}
            </td>

        </tr>
        <tr>

            <td>
                USD
            </td>
            <td>
                {data.usd}
            </td>

        </tr>
        </tbody>

    )
}