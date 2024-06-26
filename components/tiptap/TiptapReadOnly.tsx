'use client';
import {
  RiBold,
  RiCodeView,
  RiItalic,
  RiSendPlane2Line,
  RiStrikethrough2,
} from '@remixicon/react';
import './styles.css';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React, { useRef } from 'react';
import { IconButton, Input } from '@medusajs/ui';

export default ({ content }: { content?: string }) => {
  const editoxr = useEditor({
    autofocus: false,
    extensions: [StarterKit],
    editable: false,
    content: content,
  });

  return (
    <>
      <EditorContent
        editor={editoxr}
        id="style-1"
        placeholder="Start typing..."
        className=" h-fit w-full overflow-hidden text-wrap break-words text-base !font-light leading-snug *:max-w-full *:break-words focus:outline-none [&_*]:break-words"
        contentEditable={false}
      />
    </>
  );
};
