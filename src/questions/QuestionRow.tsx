/*
 * Copyright 2018 Menlo One, Inc.
 * Parts Copyright 2018 Vulcanize, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Fragment } from 'react'
import Moment from 'react-moment'
import Blockies from 'react-blockies'

import { TopicsContext, withTopics } from "../models/Topics";
import Topic from "../models/Topic";
import CountdownTimer from '../components/CountdownTimer'

import MetamaskModal from '../components/MetamaskModal';
import AddressTag from '../components/AddressTag'


import utils from '../utils'

import '../App.scss'
import './Questions.scss'


// import { history } from '../router'

interface TopicViewProps {
    topic: Topic,
    topics: TopicsContext,
    onChangeReplying: (bool) => void
}

interface TopicViewState {
    showReplyForm: boolean,
    showReplies: boolean,
    showMetamaskModal: boolean,
}


class QuestionRow extends React.Component<TopicViewProps> {

    state : TopicViewState

    constructor(props) {
        super(props)

        // this.onClickTopic = this.onClickTopic.bind(this)
        this.renderClosed = this.renderClosed.bind(this)
        this.clickClaimTokens = this.clickClaimTokens.bind(this)

        this.state = {
            showReplyForm: false,
            showReplies: true,
            showMetamaskModal: false
        }
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
    }

    onClickTopic() {
        // history.push(`/topic/${ this.props.topic.forumAddress }`)
    }

    messageStatus() {
        return this.props.topics.svc.getTopic(this.props.topic.id) ? 'complete' : 'pending'
    }

    messageComplete() {
        return this.messageStatus() === 'complete'
    }

    messagePending() {
        return this.messageStatus() === 'pending'
    }

    async clickClaimTokens(e) {
        e.stopPropagation()
        this.setState({showMetamaskModal: true})

        setTimeout(() => {
            this.setState({ showMetamaskModal: false })
        }, 6000)

        try {
            await this.props.topic.claimWinnings()
        } catch (error) {
            this.setState({ showMetamaskModal: false })
            return
        }
        this.setState({ showMetamaskModal: false })
    }

    renderClosed() {
        if (!this.props.topic.isAnswered && this.props.topic.metadata!.isClosed) {
            return (
                <span>
                    {
                        this.props.topic.iWon && !this.props.topic.isClaimed ?
                        <a className="btn main-btn btn-claim" onClick={this.clickClaimTokens}>RECLAIM TOKENS</a>
                        :
                        <span className="closed">NO ANSWER</span>
                    }
                </span>
            )
        }

        if (this.props.topic.iWon) {
            return (
                <span>
                    {
                        this.props.topic.iWon && !this.props.topic.isClaimed ?
                            <span onClick={this.clickClaimTokens} className="claim">CLAIM WINNINGS</span>
                            :
                            <span className="closed">YOU WON!</span>
                    }
                </span>
            )
        }

        return <span className="closed">ANSWERED!</span>
    }

    render() {
        const topic = this.props.topic
        return (
            <li className="question">
                <div className="user-img">
                    <Blockies size={12} scale={4} seed={topic.author}/>
                </div>
                <div className="content">
                    <a
                        onClick={this.onClickTopic}
                        href={`/topic/${this.props.topic.forumAddress}`}
                    >
                        <span className="title">
                            { (topic.title && topic.title.length > 4) ?
                                topic.title
                                :
                                topic.body.substr(0, 100)
                            }
                        </span>
                    </a>
                    <div>
                        {topic && topic.author && <AddressTag link={true} copy={true} address={topic.author} />}
                        <span style={{ display: 'none' }}>
                            <span className="points">??? points </span>
                        </span>
                        {topic && topic.date && <Moment fromNow>{topic.date}</Moment>}
                    </div>
                </div>
                <div className="stats">
                    {utils.formatNumber(topic.totalAnswers) }
                    <span className="subtitle">ANSWERS</span>
                </div>
                <div className="stats">
                    {utils.formatNumber(topic.winningVotes) }
                    <span className="subtitle">VOTES</span>
                </div>
                <div className="stats">
                    { topic.bounty === 0 ?
                        (<Fragment>
                            { utils.formatNumber(topic.pool.toFixed()) }
                            {!this.props.topic.isAnswered ? (
                                <span className="subtitle">BOUNTY</span>
                            ) : (
                                <span className="subtitle">ONE PAID</span>
                            )}
                        </Fragment>)
                        :
                        (<Fragment>
                            { utils.formatNumber(topic.bounty.toFixed()) }
                            <span className="subtitle">BOUNTY</span>
                        </Fragment>)
                    }
                </div>
                <div className="stats stats-timer">
                    <CountdownTimer compact={true} date={ new Date(topic.endTime) } renderCompleted={ this.renderClosed }/>
                </div>
                {this.state.showMetamaskModal ? <MetamaskModal /> : null }
            </li>
        )
    }
}

export default withTopics(QuestionRow)
