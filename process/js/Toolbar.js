var React = require('react');

var Toolbar = React.createClass({
    createAppointments: function() {
        const { handleToggle } = this.props;
        if(handleToggle) handleToggle();
    },
    toggleAbout: function() {
        const { handleAbout } = this.props;
        if(handleAbout) handleAbout();
    },
    render: function() {
        return (
            <div className="toolbar">
                <div className="toolbar-item" onClick={this.createAppointments}>
                    <span className="toolbar-item-button glyphicon gliphicon-plus-sign"></span>
                    <span className="toolbar-item-text">Add Appointment</span>
                </div>
                <div className="toolbar-item" onClick={this.toggleAbout}>
                    <span className="toolbar-item-button glyphicon gliphicon-question-sign"></span>
                    <span className="toolbar-item-text">About this App</span>
                </div>
            </div>
        )

    }
})
module.exports = Toolbar;
