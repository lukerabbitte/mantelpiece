"use client";

import { useRef } from "react";
import { ForwardRefEditor } from "@/components/mdx-editor/ForwardRefEditor";

const MarkdownEditor = ({ initialMarkdown }) => {
    const editorRef = useRef(null);

    const printMarkdown = () => {
        console.log(editorRef.current?.getMarkdown());
    };

    return <ForwardRefEditor ref={editorRef} markdown={initialMarkdown} onChange={printMarkdown} />;
};

export default MarkdownEditor;
