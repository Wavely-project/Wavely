'use client';
import {
  RiBold,
  RiCodeView,
  RiItalic,
  RiSendPlane2Line,
  RiStrikethrough2,
} from '@remixicon/react';
import './styles.css';
import Code from '@tiptap/extension-code';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useRef } from 'react';
import { IconButton, Input } from '@medusajs/ui';

export default ({ content }: { content?: string }) => {
  // console.log('dasdsd', textareaRef?.current?.clientHeight);
  const editor = useEditor({
    autofocus: false,
    extensions: [StarterKit, Code],
    editable: false,
    content: content,
  });

  return (
    <>
      <EditorContent
        editor={editor}
        id="style-1"
        placeholder="Start typing..."
        className=" overflow-auto px-1.5 pb-3 text-base !font-light  leading-snug focus:outline-none "
        contentEditable={false}
      />
    </>
  );
};