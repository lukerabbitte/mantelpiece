"use client";

import "@mdxeditor/editor/style.css";
import "@/components/mdx-editor/mdxeditor.css";
import {
    MDXEditor,
    UndoRedo,
    BoldItalicUnderlineToggles,
    BlockTypeSelect,
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    imagePlugin,
    linkPlugin,
    linkDialogPlugin,
    tablePlugin,
    toolbarPlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    diffSourcePlugin,
    InsertImage,
    InsertTable,
    ListsToggle,
    CreateLink,
    InsertCodeBlock,
} from "@mdxeditor/editor";
// import { uploadImageToSupabase } from "@/utils/supabase/uploadImage";

const uploadImageToSupabase = () => null;

const InitializedMDXEditor = ({ editorRef, ...props }) => {
    return (
        <div className="relative">
            <MDXEditor
                contentEditableClassName="prose"
                spellCheck
                plugins={[
                    headingsPlugin(),
                    listsPlugin(),
                    quotePlugin(),
                    thematicBreakPlugin(),
                    markdownShortcutPlugin(),
                    codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
                    codeMirrorPlugin({
                        codeBlockLanguages: {
                            js: "JavaScript",
                            css: "CSS",
                            html: "HTML",
                            typescript: "TypeScript",
                            jsx: "React JSX",
                            tsx: "React TSX",
                            json: "JSON",
                            markdown: "Markdown",
                            python: "Python",
                        },
                    }),
                    diffSourcePlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    tablePlugin(),
                    imagePlugin({
                        imageUploadHandler: uploadImageToSupabase,
                        imageAutocompleteSuggestions: ["https://picsum.photos/200/300"],
                    }),
                    toolbarPlugin({
                        toolbarClassName: "",
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <BoldItalicUnderlineToggles />
                                <BlockTypeSelect />
                                <InsertImage />
                                <InsertCodeBlock />
                                <CreateLink />
                                <InsertTable />
                                <ListsToggle />
                            </>
                        ),
                    }),
                ]}
                {...props}
                ref={editorRef}
            />
        </div>
    );
};

export default InitializedMDXEditor;

/* Why is it so hard to override Radix MDXEditor themes? Very confusing */
