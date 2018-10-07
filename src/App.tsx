import * as React from 'react'
import * as History from 'history'
import { toast } from 'react-toastify';


import web3 from './models/Web3'


import CssBaseline from '@material-ui/core/CssBaseline'
import { Account, AccountContext, AccountCtxtComponent } from './models/Account'
import { resolve, history } from './router'

import TopicsPage from './questions/QuestionsPage'
import ForumPage from './answers/AnswersPage'

import "./App.scss"


class Footer extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}


interface AppState {
    account: AccountContext,
    component?: React.Component
}


class App extends React.Component {

    state   : AppState

    account : Account

    constructor(props: any, context: any) {
        super(props, context)

        this.accountChanged = this.accountChanged.bind(this)
        this.renderLocation = this.renderLocation.bind(this)

        this.account = new Account()

        this.state = {
            account: { model: Object.assign({}, this.account), svc: this.account },
        }
    }

    async accountChanged() {
        // Setup account state object w/ particular callbacks

        this.setState({ account: { model: Object.assign({}, this.account), svc: this.account } })
    }

    componentDidMount() {
        this.account.setCallback(this.accountChanged)

        history.listen(this.renderLocation)   // render subsequent URLs
        this.renderLocation(history.location, 'REPLACE')

        this.checkNetwork();

    }

    renderComponent(component : any) {
        if (!component) {
            console.log("Error trying to set to null component")
            return
        }

        console.log(`Setting component to ${component.type.name}`)
        this.setState({ component })
    }

    async renderLocation(location : History.Location, action: History.Action) {
        const routes : object[] = this.commonRoutes

        if (this.account.isSignedIn()) {
            routes.concat( this.loggedInRoutes )
        } else {
            routes.concat( this.loggedOutRoutes )
        }

        try {
            const component = await resolve( routes, location)
            this.renderComponent(component)
        } catch (error) {
            const component = await resolve( routes, { ...location, error })
            this.renderComponent(component)
        }
    }


    loggedOutRoutes = [
    ];

    loggedInRoutes = [
    ];

    commonRoutes = [
        { path: '/', action: () => <TopicsPage /> },
        { path: '/topic/:address(.+)', action: (params) => <ForumPage { ...params }/> },
        { path: '/privacy', action: () => <TopicsPage /> }
    ];



    checkNetwork() {

        let network;

        switch (web3.version.network) {
            case "1":
                network = "the Mainnet";
                break;
            case "2":
                network = "the Morden";
                break;
            case "3":
                network = "the Ropsten";
                break;
            case "4":
                network = "the Rinkeby";
                break;
            case "42":
                network = "the Kovan";
                return
            default:
                network = "an unknown";
                break;
        }

        toast(`Oops, looks like you’re on ${network} Network, please switch to the Kovan Network`)
        
    }

    render() {
        return (
            <AccountCtxtComponent.Provider value={this.state.account}>
                <CssBaseline />
                { this.state.component }
                { this.props.children }
                <Footer />
            </AccountCtxtComponent.Provider>
        )
    }
}

export default App
