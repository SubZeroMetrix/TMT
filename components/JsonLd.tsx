/**
 * Renders a JSON-LD block. Structured data is the layer answer engines and LLM
 * crawlers read; without it they have to guess what this site is about.
 *
 * Content is our own, never user input, so dangerouslySetInnerHTML is safe here.
 * The `<` escape prevents a stray closing tag from breaking out of the script.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
