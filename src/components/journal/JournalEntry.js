import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://ironmaidencolombiafc.files.wordpress.com/2011/12/world_slavery_tour_1_ironmaidenwallpaper.jpg?w=848)'
            }}>

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">sdaskfjasldjalskdjaslkdjaslkjdladjalksdjlasjkdlaskjdlaskjd</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <b>28</b>
            </div>
        </div>
    )
}
