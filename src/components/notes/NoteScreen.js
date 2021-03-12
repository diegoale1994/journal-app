import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="some awesome title" className="notes__title-input" autoComplete="off" />
                <textarea placeholder="what happened today" className="notes__text-area"></textarea>
                <div className="notes_image">
                    <img src="https://cdn.wallpapersafari.com/91/94/1myWgQ.jpg" alt="image"></img>
                </div>
            </div>
        </div>
    )
}
