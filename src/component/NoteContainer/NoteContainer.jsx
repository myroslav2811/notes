import React from "react";
import style from "./noteContainer.module.css";
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose, faEdit} from '@fortawesome/free-solid-svg-icons';
import {CHANGE_NOTE, CLEAR_INPUT, DELETE_NOTE, EDIT_FINISH, GET_NOTES} from "../../store/actions";

const closeIcon = <FontAwesomeIcon icon={faWindowClose}/>;
const editIcon = <FontAwesomeIcon icon={faEdit}/>;

class NoteContainer extends React.Component {

    onDeleteHandler = (index) => {
        this.props.onDelete(index);
        this.props.editFinish();
        this.props.clearInput();
    };

    onEditHandler(note, index){
        this.props.onEdit(note, index);
    };
    componentDidMount(){
        this.props.getNotes();
    }
    render() {
        return (
            <Masonry className={style.notes + ' row'}
                     elementType={'div'}>
                {this.props.state.notes.map((item, index) => <div key={index} className={'col-md-4'}>
                    <p className={style.note}>
                        <span className={style.closeIcon} onClick={() => this.onDeleteHandler(index)}>{closeIcon}</span>
                        <span className={style.editIcon} onClick={() => this.onEditHandler(item, index)}>{editIcon}</span>
                        {item.text}
                    </p>
                </div>)}
            </Masonry>
        )
    }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        onDelete: index => dispatch(DELETE_NOTE(index)),
        onEdit: (item, index) => dispatch(CHANGE_NOTE(item, index)),
        editFinish: () => dispatch(EDIT_FINISH()),
        clearInput: () => dispatch(CLEAR_INPUT()),
        getNotes: () => dispatch(GET_NOTES())
    })
)(NoteContainer)