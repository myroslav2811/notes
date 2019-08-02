import React, {Component} from 'react';
import style from './TextFieldContainer.module.css'
import {connect} from 'react-redux'
import {ADD_NOTE, CHANGE_INPUT, CLEAR_INPUT, EDIT_FINISH, SUBMIT_CHANGES} from "../../store/actions";


class TextFieldContainer extends Component {
    state = {
        inputError: false,
        editNote: false
    };

    onAddHandler = () => {
        if (/\S/.test(this.props.state.value)) {
            this.props.onAddNote(this.props.state.value);
            this.props.onClearInput();
        }
        else {
            this.setState(() => ({
                inputError: true
            }));
            this.props.onClearInput();
        }
    };

    onSubmitChanges = () => {
        if (/\S/.test(this.props.state.value)) {
            const editNote = this.props.state.editNote;
            this.props.submitChanges(this.props.state.value, editNote.index);
            this.props.onClearInput();
        }
        else{
            this.setState(() => ({
                inputError: true
            }));
            this.props.editFinish();
            this.props.onClearInput();
        }
    };

    onChangeHandler = () => {
        if (this.input.value === '') {
            this.props.editFinish();
        }
        this.props.onChangeInput(this.input.value);
        this.setState(() => ({
            inputError: false
        }));
    };

    render() {
        return (
            <div className={style.formContainer + ' form-group'}>
                    <textarea className={this.state.inputError ? 'border border-danger form-control' : 'form-control'}
                              ref={input => this.input = input}
                              value={this.props.state.value}
                              onChange={this.onChangeHandler}
                              placeholder={'Write your note here...'}>
                    </textarea>
                <p className={'text-danger'}>{this.state.inputError ? 'First you need to fill the field' : ''}</p>
                <button onClick={!this.props.state.editNote.onEdit ? this.onAddHandler : this.onSubmitChanges}
                        className={'btn btn-outline-warning'}>
                    {!this.props.state.editNote.onEdit ? 'ADD NOTE' : 'SUBMIT CHANGES'}
                </button>
                <div className={style.clearfix}></div>
                <hr/>
            </div>
        )
    }
}

export default connect(
    state => ({
        state: state
    }),
    dispatch => ({
        onAddNote: note => dispatch(ADD_NOTE(note)),
        onChangeInput: value => dispatch(CHANGE_INPUT(value)),
        onClearInput: () => dispatch(CLEAR_INPUT()),
        editFinish: () => dispatch(EDIT_FINISH()),
        submitChanges: (note, index) => dispatch(SUBMIT_CHANGES(note, index))
    }))(TextFieldContainer);