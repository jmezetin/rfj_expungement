import React from "react";
import ReactDOM from "react-dom";
import { Editor, EditorState } from "draft-js";

function NoteEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default NoteEditor;
