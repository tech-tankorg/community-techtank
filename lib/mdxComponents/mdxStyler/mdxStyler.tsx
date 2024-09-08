import React from "react";
import * as mdx from "@mdx-js/react";
import Paragraph from "../elements/Paragragh";
import Anchor from "../elements/Anchor";
import Blockquote from "../elements/Blockquote";
import OrderedList from "../elements/orderedList";
import UnorderedList from "../elements/unorderedList";
import HeaderII from "../elements/HeaderII";
import HeaderIII from "../elements/HeaderIII";
import CodeBlock from "../elements/CodeBlock";
import Code from "../elements/Code";
import Images from "../elements/Image";
import Video from "../elements/video";

import Aside from "../customElements/Aside/Aside";
import Expanded from "../customElements/Expanded/Expanded";

type MDXcomponent = React.ComponentProps<typeof mdx.MDXProvider>["components"];

export const COMPONENTS: MDXcomponent = {
  a: (props: any) => <Anchor childNodes={props} />,
  blockquote: (props: any) => <Blockquote childNodes={props} />,
  code: (props: any) => <Code childNodes={props} />,
  h2: (props: any) => <HeaderII childNodes={props} />,
  h3: (props: any) => <HeaderIII childNodes={props} />,
  img: (props: any) => <Images childNodes={props} />,
  p: (props: any) => <Paragraph childNodes={props} />,
  pre: (props: any) => <CodeBlock childNodes={props} />,
  ol: (props: any) => <OrderedList childNodes={props} />,
  ul: (props: any) => <UnorderedList childNodes={props} />,
  Video: (props: any) => <Video {...props} />,
  Aside: (props: any) => <Aside {...props} />,
  Expanded: (props: any) => <Expanded {...props} />,
};
