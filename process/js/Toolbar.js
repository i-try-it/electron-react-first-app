var React = require('react');
var Component = React.Component;

var Toolbar = React.createClass({
    toggleAbout: function() {
        const { handleAbout } = this.props;
        if(handleAbout) handleAbout();
    },
    render: function() {
        return (
            <div className="toolbar">
                <div className="toolbar-item" onClick={this.toggleAbout}>
                    <span className="toolbar-item-button glyphicon gliphicon-question-sign"></span>
                    <span className="toolbar-item-text">About this App</span>
                </div>
            </div>
        )

    }
})
module.exports = Toolbar;
