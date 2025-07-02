"use client"

import React, { memo, useMemo, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import slugify from "slugify"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import "katex/dist/katex.min.css"
import "highlight.js/styles/github-dark.css"

interface CodeBlockProps {
  children: string
  className?: string
  inline?: boolean
}

const CodeBlock = memo(({ children, className = "", inline = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false)
  const language = className.replace("language-", "") || "text"
  const cleanContent = (typeof children === "string" ? children : children?.toString())?.trim()

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(cleanContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (inline) {
    return (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground border">
        {cleanContent}
      </code>
    )
  }

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-muted border-b">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {language}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="bg-background p-4 overflow-x-auto text-sm text-foreground font-mono">
        <code className={className}>{cleanContent}</code>
      </pre>
    </div>
  )
})
CodeBlock.displayName = "CodeBlock"

interface MarkdownRendererProps {
  children: string
  id?: string
  className?: string
}

const MarkdownRenderer = memo(({ children, id, className }: MarkdownRendererProps) => {
  const processedContent = useMemo(() => children.trim(), [children])

  return (
    <div
      id={id}
      className={`markdown-content prose prose-neutral dark:prose-invert max-w-none bg-transparent ${className || ""}`}
  >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeKatex,
          [rehypeHighlight, { detect: true, ignoreMissing: true }],
          rehypeRaw,
        ]}
        components={{
          h1: ({ node, children }) => {
            const text = children?.toString() || ""
            const slug = slugify(text, { lower: true, strict: true })
            return <h1 id={slug} className="group scroll-mt-24 text-3xl font-bold">{children}</h1>
          },
          h2: ({ node, children }) => {
            const text = children?.toString() || ""
            const slug = slugify(text, { lower: true, strict: true })
            return <h2 id={slug} className="group scroll-mt-24 text-2xl font-semibold">{children}</h2>
          },
          h3: ({ node, children }) => {
            const text = children?.toString() || ""
            const slug = slugify(text, { lower: true, strict: true })
            return <h3 id={slug} className="group scroll-mt-24 text-xl font-medium">{children}</h3>
          },
          h4: ({ children }) => <h4 className="text-lg font-medium">{children}</h4>,
          h5: ({ children }) => <h5 className="text-base font-medium">{children}</h5>,
          h6: ({ children }) => <h6 className="text-sm font-medium text-muted-foreground">{children}</h6>,

          p: ({ children }) => {
            const isComplex = React.Children.toArray(children).some(
              (child) => typeof child === "object"
            )
            return isComplex ? <div className="my-4">{children}</div> : (
              <p className="mb-5 leading-relaxed text-muted-foreground">{children}</p>
            )
          },

          ul: ({ children }) => <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,

          code: ({ inline, className, children, ...props }) => (
            <CodeBlock inline={inline} className={className} {...props}>
              {String(children).replace(/\n$/, "")}
            </CodeBlock>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/50 py-2 rounded-r">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="my-6 w-full overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="w-full border-collapse">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
          th: ({ children }) => (
            <th className="border px-4 py-3 text-left font-semibold">{children}</th>
          ),
          td: ({ children }) => <td className="border px-4 py-3">{children}</td>,

          hr: () => <hr className="my-8 border-border" />,

          img: ({ src, alt = "", title }) => (
            <figure className="my-6">
              <img
                src={src || "/placeholder.svg"}
                alt={alt}
                title={title}
                className="rounded-lg border border-border mx-auto max-w-full"
                loading="lazy"
                decoding="async"
              />
              {title && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                  {title}
                </figcaption>
              )}
            </figure>
          ),

          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          del: ({ children }) => <del className="line-through text-muted-foreground">{children}</del>,

          input: ({ type, checked, disabled }) =>
            type === "checkbox" ? (
              <input
                type="checkbox"
                checked={checked}
                disabled={disabled}
                readOnly
                className="mr-2 accent-primary"
              />
            ) : (
              <input type={type} disabled={disabled} readOnly />
            ),

          video: ({ src, title }) => (
            <figure className="my-6 rounded-lg overflow-hidden border border-border">
              <video
                src={src}
                className="w-full max-w-3xl mx-auto"
                controls
                title={title || "Video"}
              />
              {title && (
                <figcaption className="text-center text-sm text-muted-foreground mt-2">{title}</figcaption>
              )}
            </figure>
          ),

          iframe: ({ src, title }) => (
            <div className="my-6 aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe
                src={src}
                title={title || "Embedded content"}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
})
MarkdownRenderer.displayName = "MarkdownRenderer"

export default MarkdownRenderer
