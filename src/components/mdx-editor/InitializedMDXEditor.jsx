"use client";

import "@mdxeditor/editor/style.css";
import {
    MDXEditor,
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
    directivePlugin,
    frontmatterPlugin,
    KitchenSinkToolbar,
    InsertImage,
} from "@mdxeditor/editor";
// import { uploadImageToSupabase } from "@/utils/supabase/uploadImage";

const uploadImageToSupabase = () => null;

const InitializedMDXEditor = ({ editorRef, ...props }) => {
    return (
        <MDXEditor
            contentEditableClassName="prose prose-slate max-w-none dark:prose-invert prose-headings:font-title prose-p:text-base prose-img:rounded-md"
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
                    },
                }),
                diffSourcePlugin(),
                frontmatterPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                tablePlugin(),
                imagePlugin({
                    imageUploadHandler: uploadImageToSupabase,
                    imageAutocompleteSuggestions: ["https://picsum.photos/200/300"],
                }),
                toolbarPlugin({
                    toolbarContents: () => (
                        <KitchenSinkToolbar>
                            <InsertImage />
                        </KitchenSinkToolbar>
                    ),
                }),
            ]}
            {...props}
            ref={editorRef}
        />
    );
};

export default InitializedMDXEditor;
