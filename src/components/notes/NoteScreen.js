import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [formValues])


    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="some awesome title" name="title" className="notes__title-input" autoComplete="off" value={title} onChange={handleInputChange} />
                <textarea placeholder="what happened today" className="notes__text-area" name="body" value={body} onChange={handleInputChange}></textarea>
                {
                    note.url &&
                    (<div className="notes_image">
                        <img src="https://cdn.wallpapersafari.com/91/94/1myWgQ.jpg" alt="image"></img>
                    </div>)
                }
            </div>
        </div>
    )
}
