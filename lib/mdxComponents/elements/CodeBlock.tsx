import CodeHighlight from "@components/CodeHighlight/code-highlight";
interface Props {
  childNodes: any;
}

const CodeBlock = ({ childNodes }: Props) => {
  const mdxClassName = childNodes.children.props.className;
  const mdxCode = childNodes.children.props.children;
  const [, lang] = mdxClassName.match(/language-(.+)/);

  return <CodeHighlight code={mdxCode} lang={lang} />;
};

export default CodeBlock;
