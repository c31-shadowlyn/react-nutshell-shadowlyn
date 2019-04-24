import React, { Component } from 'react'

export default class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="eventButton">
                    {/* redirects user to page where a new event can be created */}
                        <button type="button" onClick={
                            () => {
                                this.props.history.push("/events/new")
                            }
                        }>Create New Event</button>
                    </div>
                    {
                        this.props.events.map(event =>
                            <div key={event.id}>
                                <h3>
                                    {event.event}
                                </h3>
                                <div>Where: {event.location}</div>
                                <div>When: {event.date}</div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        {/* Redirects user to an edit page specific to the individual event */}
                                        this.props.history.push(`/events/${event.id}/edit`);
                                    }}>Edit</button>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }
}