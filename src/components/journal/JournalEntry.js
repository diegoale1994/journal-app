import React from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {
    
    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleActiveJournal = () => {
        dispatch(activeNote(id, { title, body, date, url }))
    }

    return (
        <div className="journal__entry pointer animate__animated animate__fadeIn" onClick={handleActiveJournal}>

            {
                url &&
                <div>
                    <div className="journal__entry-picture" style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}>
                    </div>
                </div>}

            <div className="journal__entry-body">
                <p className="journal__entry-title">{title}</p>
                <p className="journal__entry-content">{body}</p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <b>{noteDate.format('Do')}</b>
            </div>
        </div>
    )
}
