import React from 'react';
import Table from 'react-bootstrap/Table';

import EventScores from './EventScores';
import { EventType } from '../../dataTypes';

const EventInfo = ({ event }) => (
    <Table className="Event__Info" striped bordered hover>
        <tbody>
            <tr>
                <td>Score</td>
                <td><EventScores event={event} /></td>
            </tr>
            <tr>
                <td>Start time</td>
                <td className="Event__Info--date">{new Date(event.startTime).toDateString()}</td>
            </tr>
            {
                event.linkedEventTypeName && (
                    <tr>
                        <td>Tournament</td>
                        <td className="Event__Info--tournament">{event.linkedEventTypeName}</td>
                    </tr>
                )
            }
        </tbody>
    </Table>
);

EventInfo.propTypes = {
    event: EventType.isRequired,
};

export default EventInfo;
