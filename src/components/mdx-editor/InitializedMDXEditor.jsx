"use client";

import "@mdxeditor/editor/style.css";
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    imagePlugin,
    toolbarPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    InsertImage,
    MDXEditor,
} from "@mdxeditor/editor";

export default function InitializedMDXEditor({ editorRef, ...props }) {
    return (
        <MDXEditor
            contentEditableClassName="bg-card font-sans"
            spellCheck
            plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                markdownShortcutPlugin(),
                toolbarPlugin({
                    toolbarClassName: "",
                    toolbarContents: () => (
                        <div className="">
                            <UndoRedo />
                            <BoldItalicUnderlineToggles />
                            <BlockTypeSelect />
                            <InsertImage />
                        </div>
                    ),
                }),
            ]}
            {...props}
            ref={editorRef}
        />
    );
}
