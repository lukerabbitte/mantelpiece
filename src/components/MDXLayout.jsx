import { MDXRemote } from "next-mdx-remote/rsc";

const MDXLayout = (props) => {
    const components = {
        h1: (props) => (
            <h1 {...props} className="font-bold">
                {props.children}
            </h1>
        ),
        li: (props) => (
            <li {...props} className="text-primary">
                {props.children}
            </li>
        ),
    };
    return (
        <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
            <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
        </div>
    );
};

export default MDXLayout;
