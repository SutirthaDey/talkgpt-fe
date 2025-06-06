import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm"; // for tables, strikethrough, etc.

export const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-3xl font-bold text-gray-900 mt-6 mb-3">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl font-semibold text-gray-800 mt-5 mb-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl font-medium text-gray-700 mt-4 mb-2">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-lg font-semibold text-gray-600 mt-3 mb-1">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-base font-medium text-gray-500 mt-2">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-sm font-medium text-gray-400">{children}</h6>
        ),

        p: ({ children }) => (
          <p className="text-gray-800 leading-relaxed my-2">{children}</p>
        ),

        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-400 bg-blue-50 text-blue-900 italic px-4 py-2 my-3 rounded">
            {children}
          </blockquote>
        ),

        ul: ({ children }) => (
          <ul className="list-disc ml-6 my-2 text-gray-800">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal ml-6 my-2 text-gray-800">{children}</ol>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,

        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {children}
          </a>
        ),

        hr: () => <hr className="my-4 border-gray-300" />,

        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-100">{children}</thead>
        ),
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => (
          <tr className="border-t border-gray-300">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold bg-gray-200">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2 text-gray-800">
            {children}
          </td>
        ),

        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              customStyle={{ borderRadius: "8px", padding: "1em" }}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-200 text-sm px-1 py-0.5 rounded font-mono text-red-700">
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
