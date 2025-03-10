"use client"

import { useRef } from "react";
import { ForwardRefEditor } from "@/components/mdx-editor/ForwardRefEditor";

export default function EditPage() {
    const editorRef = useRef(null);

    const printMarkdown = () => {
        console.log(editorRef.current?.getMarkdown());
    }

    return (
        <div className="w-full">
            <ForwardRefEditor ref={editorRef} markdown="# Hello _guys_." onChange={printMarkdown} />
        </div>
    );
}
