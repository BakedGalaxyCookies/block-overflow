"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var AccountService_1 = require("../services/AccountService");
var TopicsService_1 = tslib_1.__importDefault(require("../services/TopicsService"));
var Topic_1 = tslib_1.__importDefault(require("./Topic"));
var TopicForm_1 = tslib_1.__importDefault(require("./TopicForm"));
require("../App.scss");
var TopicBoard = /** @class */ (function (_super) {
    tslib_1.__extends(TopicBoard, _super);
    function TopicBoard(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            messages: [],
            topFive: false,
            showCompose: true
        };
        _this.onSubmitMessage = _this.onSubmitMessage.bind(_this);
        _this.onChangeReplying = _this.onChangeReplying.bind(_this);
        _this.claimWinnings = _this.claimWinnings.bind(_this);
        _this.topicsChanged = _this.topicsChanged.bind(_this);
        _this.topics = new TopicsService_1.default();
        return _this;
    }
    TopicBoard.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        this.updateTopics(nextProps);
    };
    TopicBoard.prototype.updateTopics = function (nextProps) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(nextProps.acct !== this.props.acct)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.topics.setAccount(nextProps.acct)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        nextProps.acct.contractError(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TopicBoard.prototype.componentDidMount = function () {
        this.topics.subscribeTopics(this.topicsChanged);
        this.topicsChanged();
    };
    TopicBoard.prototype.componentWillUnmount = function () {
        this.topics.subscribeTopics(null);
    };
    TopicBoard.prototype.topicsChanged = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var messages;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.topics.getTopics()];
                    case 1:
                        messages = _a.sent();
                        this.setState({
                            topics: Object.assign({}, this.topics),
                            messages: messages
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicBoard.prototype.claimWinnings = function () {
    };
    TopicBoard.prototype.onSubmitMessage = function (body) {
        return this.topics.createTopic(body, 5);
    };
    TopicBoard.prototype.renderMessagesFilterButton = function () {
        var _this = this;
        if (this.state.topFive) {
            return (React.createElement("button", { onClick: function () { return _this.setState({ topFive: false }); } }, "View All Messages"));
        }
        else {
            return (React.createElement("button", { onClick: function () { return _this.setState({ topFive: true }); } }, "View Top Five Messages"));
        }
    };
    TopicBoard.prototype.onChangeReplying = function (replying) {
        this.setState({ showCompose: !replying });
    };
    TopicBoard.prototype.renderCompleted = function () {
        return null;
    };
    TopicBoard.prototype.renderUserStats = function () {
        return (React.createElement("div", { className: "user-stats right-side-box white-bg" },
            React.createElement("h4", null, "User Metrics"),
            React.createElement("div", { className: "stats-wrapper" },
                React.createElement("div", { className: "stat" },
                    React.createElement("div", { className: "number-circle" },
                        React.createElement("span", null, "84%")),
                    React.createElement("div", { className: "stat-label-wrapper" },
                        React.createElement("span", null, "Your Reputation"),
                        React.createElement("span", null, "3,812 Reviews"))),
                React.createElement("div", { className: "stat" },
                    React.createElement("div", { className: "number-circle" },
                        React.createElement("span", null, "102")),
                    React.createElement("div", { className: "stat-label-wrapper" },
                        React.createElement("span", null, "ONE Tokens Earned"),
                        React.createElement("span", null, "($10 USD)"))),
                React.createElement("div", { className: "stat" },
                    React.createElement("div", { className: "number-circle" },
                        React.createElement("span", null, "12")),
                    React.createElement("div", { className: "stat-label-wrapper" },
                        React.createElement("span", null, "Your Posts"),
                        React.createElement("span", null, "See Posts"))),
                React.createElement("div", { className: "stat" },
                    React.createElement("div", { className: "number-circle" },
                        React.createElement("span", null, "9")),
                    React.createElement("div", { className: "stat-label-wrapper" },
                        React.createElement("span", null, "Paid Views"),
                        React.createElement("span", null, "Link"))))));
    };
    TopicBoard.prototype.renderMessages = function () {
        var _this = this;
        if (this.state.messages.length === 0 && (this.props.acct.status !== AccountService_1.MetamaskStatus.Ok || !this.topics.synced.isFulfilled())) {
            return (React.createElement("li", { className: 'borderis' },
                React.createElement("div", { style: { paddingBottom: '3em' } }, "Loading Discussion...")));
        }
        if (this.state.messages.length === 0) {
            return (React.createElement("li", { className: 'borderis' },
                React.createElement("div", { style: { paddingBottom: '3em' } }, "Be the first to ask a question...")));
        }
        return this.state.messages.map(function (m, index) {
            return (React.createElement("div", { key: index, className: 'row' },
                React.createElement("div", { className: 'col-12' },
                    React.createElement(Topic_1.default, { key: m.id, service: _this.state.topics, topic: m, onChangeReplying: _this.onChangeReplying }))));
        });
    };
    TopicBoard.prototype.render = function () {
        return (React.createElement("div", { className: 'row' },
            React.createElement("div", { className: "col-md-8" },
                React.createElement("div", { className: "left-side" },
                    React.createElement("div", { className: "left-side-wrapper" },
                        React.createElement("div", { className: "expert-reviews-1 left-side white-bg" },
                            React.createElement("h2", null, "Townhall"),
                            React.createElement("h6", null,
                                "If anyone makes money off your internet activity,",
                                React.createElement("br", null),
                                "it should be you. Build a reputation and profit. "),
                            React.createElement("p", null, "What is TownHall? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation "),
                            React.createElement("div", { className: "comments" },
                                React.createElement("ul", null,
                                    this.renderMessages(),
                                    this.state.showCompose &&
                                        React.createElement("li", null,
                                            React.createElement("div", { className: 'content' },
                                                React.createElement(TopicForm_1.default, { onSubmit: this.onSubmitMessage }))))))))),
            React.createElement("div", { className: "col-md-4" },
                React.createElement("div", { className: 'right-side' }, this.renderUserStats()))));
    };
    return TopicBoard;
}(React.Component));
exports.default = AccountService_1.withAcct(TopicBoard);
//# sourceMappingURL=TopicBoard.js.map