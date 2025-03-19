import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

const MDXLayout = (props) => {
    const components = {
        h1: (props) => (
            <h1 {...props} className="text-lg font-semibold mt-4 mb-2">
                {props.children}
            </h1>
        ),
        h2: (props) => (
            <h2 {...props} className="text-lg font-medium mt-3 mb-2">
                {props.children}
            </h2>
        ),
        h3: (props) => (
            <h3 {...props} className="text-md font-medium mt-2 mb-2">
                {props.children}
            </h3>
        ),
        p: (props) => (
            <p {...props} className="my-4 text-foreground">
                {props.children}
            </p>
        ),
        ul: (props) => (
            <ul {...props} className="list-disc pl-6 my-4">
                {props.children}
            </ul>
        ),
        ol: (props) => (
            <ol {...props} className="list-decimal pl-6 my-4">
                {props.children}
            </ol>
        ),
        li: (props) => (
            <li {...props} className="mb-1">
                {props.children}
            </li>
        ),
        blockquote: (props) => (
            <blockquote {...props} className="border-l-4 border-muted pl-4 italic my-4">
                {props.children}
            </blockquote>
        ),
        code: (props) => (
            <code
                {...props}
                className="bg-muted text-foreground px-1 py-0.5 rounded font-mono text-sm"
            >
                {props.children}
            </code>
        ),
        pre: (props) => (
            <pre
                {...props}
                className="bg-muted text-foreground p-4 rounded-md overflow-x-auto my-4 font-mono text-sm"
            >
                {props.children}
            </pre>
        ),
        a: (props) => (
            <a
                {...props}
                className="text-primary underline hover:text-opacity-80 transition-colors"
                target={props.href?.startsWith("http") ? "_blank" : undefined}
                rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {props.children}
            </a>
        ),
        img: (props) => (
            <Image
                {...props}
                className="max-w-full h-auto my-4 rounded-md"
                alt={props.alt || "Image"}
            />
        ),
        hr: (props) => <hr {...props} className="my-8 border-t border-border" />,
        b: (props) => <b {...props}>{props.children}</b>,
    };

    return (
        <div className="max-w-prose mx-auto sm:px-4">
            <article className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-foreground">
                <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
            </article>
        </div>
    );
};

export default MDXLayout;
