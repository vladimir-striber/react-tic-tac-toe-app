import { useState } from "react";

export function Player(props) {
  const {
    id,
    name,
    symbol,
    onNameSave,
  } = props;

  // Variables
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  // Functions
  function onEditBtnClick() {
    setEditMode(editMode => !editMode);
  }

  function onSaveBtnClick() {
    setEditMode(editMode => !editMode);
    onNameSave(id, inputValue);
  }

  function onCancelBtnClick() {
    setEditMode(false);
    setInputValue(name);
  }

  function onNameChange(inputText) {
    setInputValue(inputText);
  }

  // Component return
  return (
    <li>
      <span className='player'>
        { renderPlayerName() }
        { renderMark() }
      </span>
      { renderEditButton() }
      { editMode ? renderCancelButton() : null }
    </li>
  );

  function renderPlayerName() {
    if (editMode) {
      return (
        <input
          type="text"
          required
          value={String(inputValue)}
          onChange={(e) => onNameChange(e.target.value)}
        />
      )
    } else {
      return (
        <span className='player-name'>{name}</span>
      )
    }
  }

  function renderEditButton() {
    if (editMode) {
      return <button onClick={onSaveBtnClick}>Save</button>;
    } else {
      return <button onClick={onEditBtnClick}>Edit</button>;
    }
  }

  function renderMark() {
    return <span className='player-symbol'>{symbol}</span>;
  }

  function renderCancelButton() {
    return <button onClick={onCancelBtnClick}>Cancel</button>;
  }
}