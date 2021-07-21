import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import styled from "styled-components";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "blockQuote",
    "insertImage",
    "undo",
    "redo",
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Párrafo", class: "ck-heading_paragraph" },
      {
        model: "heading1",
        view: "h1",
        title: "Encabezado 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Encabezado 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Encabezado 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Encabezado 4",
        class: "ck-heading_heading4",
      },
    ],
  },
};

const StyledEditor = styled.div`
  width: 640px;
`;

const PostEditor = ({ setContent }) => {
  return (
    <StyledEditor>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data="<p>¡Empieza a escribir tu post!</p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent((prevState) => {
            const newState = Object.assign({}, prevState);
            newState.content = data;
            return newState;
          });
        }}
      />
    </StyledEditor>
  );
};

export default PostEditor;
