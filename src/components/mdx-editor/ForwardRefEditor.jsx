"use client";

import dynamic from "next/dynamic";
import { forwardRef } from "react";

// Dynamically import the initialized MDX editor
const Editor = dynamic(() => import("./InitializedMDXEditor"), {
    ssr: false,
});

export const ForwardRefEditor = forwardRef((props, ref) => <Editor {...props} editorRef={ref} />);

// Required for React to recognize the component name
ForwardRefEditor.displayName = "ForwardRefEditor";
