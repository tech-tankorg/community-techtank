export const Articles = [
  {
    id: 1,
    categoryTitle: "Newsletter",
    articleTitle: "The Future of AI",
    articleDescription:
      "Artificial intelligence is advancing rapidly, revolutionizing industries and everyday life. This article explores key advancements, ethical concerns, and the future impact of AI on society and business.",
    author: {
      name: "John Doe",
      title: "Content Writer",
    },
  },
  {
    id: 2,
    categoryTitle: "Newsletter",
    articleTitle: "Understanding Blockchain",
    articleDescription:
      "Blockchain is transforming industries beyond cryptocurrencies by offering decentralized and secure systems. This article breaks down blockchain’s key concepts and real-world applications.",
    author: {
      name: "Jane Smith",
      title: "Content Writer",
    },
  },
  {
    id: 3,
    categoryTitle: "Newsletter",
    articleTitle: "The Rise of Remote Work",
    articleDescription:
      "Remote work has become essential for many organizations. This article explores the benefits and challenges of remote work, along with strategies for successful implementation.",
    author: {
      name: "Mike Johnson",
      title: "Content Writer",
    },
  },
  {
    id: 4,
    categoryTitle: "Newsletter",
    articleTitle: "Sustainable Living Tips",
    articleDescription:
      "Sustainable living is key to preserving our planet. Discover practical tips to reduce your carbon footprint, conserve resources, and embrace eco-friendly habits.",
    author: {
      name: "Emily Davis",
      title: "Content Writer",
    },
  },
  {
    id: 5,
    categoryTitle: "Newsletter",
    articleTitle: "The Importance of Cybersecurity",
    articleDescription:
      "Cybersecurity is critical in today’s digital world. Learn best practices for protecting personal information and staying safe online amidst evolving cyber threats.",
    author: {
      name: "Chris Lee",
      title: "Content Writer",
    },
  },
  {
    id: 6,
    categoryTitle: "Newsletter",
    articleTitle: "The Power of Mindfulness",
    articleDescription:
      "Mindfulness offers mental clarity and stress reduction. This article covers mindfulness practices and how they contribute to improved well-being in everyday life.",
    author: {
      name: "Sophia Williams",
      title: "Content Writer",
    },
  },
  {
    id: 7,
    categoryTitle: "Newsletter",
    articleTitle: "The Impact of Social Media",
    articleDescription:
      "Social media has transformed communication and information sharing, with both positive and negative effects. Explore its influence on society and mental health.",
    author: {
      name: "Liam Brown",
      title: "Content Writer",
    },
  },
  {
    id: 8,
    categoryTitle: "Newsletter",
    articleTitle: "The Future of Renewable Energy",
    articleDescription:
      "Renewable energy is essential for combating climate change. This article discusses advancements in solar, wind, and other sustainable energy sources shaping the future.",
    author: {
      name: "Olivia Martinez",
      title: "Content Writer",
    },
  },
  {
    id: 9,
    categoryTitle: "Newsletter",
    articleTitle: "The Importance of Mental Health Awareness",
    articleDescription:
      "Mental health awareness is vital for overall well-being. Learn about the importance of reducing stigma, recognizing symptoms, and finding support for mental health challenges.",
    author: {
      name: "James Wilson",
      title: "Content Writer",
    },
  },
  {
    id: 10,
    categoryTitle: "Newsletter",
    articleTitle: "The Evolution of E-Commerce",
    articleDescription:
      "E-commerce has transformed the retail landscape. This article explores trends in online shopping, emerging technologies, and how e-commerce is shaping consumer behavior.",
    author: {
      name: "Emma Johnson",
      title: "Content Writer",
    },
  },
  {
    id: 11,
    categoryTitle: "Newsletter",
    articleTitle: "The Future of Space Exploration",
    articleDescription:
      "Space exploration is advancing rapidly with private companies and government agencies pushing boundaries. Discover how new missions are shaping humanity's future in space.",
    author: {
      name: "Ethan Clark",
      title: "Content Writer",
    },
  },
  {
    id: 12,
    categoryTitle: "Newsletter",
    articleTitle: "The Impact of Climate Change",
    articleDescription:
      "Climate change is causing global disruptions, from rising temperatures to extreme weather. Learn about its effects and the steps we can take to mitigate them.",
    author: {
      name: "Ava Taylor",
      title: "Content Writer",
    },
  },
  {
    id: 13,
    categoryTitle: "Newsletter",
    articleTitle: "The Role of Education in Social Mobility",
    articleDescription:
      "Education is a powerful tool for social mobility. This article examines the role of education in improving economic opportunities and reducing disparities.",
    author: {
      name: "Mia Adams",
      title: "Content Writer",
    },
  },
  {
    id: 14,
    categoryTitle: "Newsletter",
    articleTitle: "The Rise of Electric Vehicles",
    articleDescription:
      "Electric vehicles are becoming more mainstream as the future of transportation. Explore the benefits and challenges as we transition to a more sustainable future.",
    author: {
      name: "Noah King",
      title: "Content Writer",
    },
  },
  {
    id: 15,
    categoryTitle: "Newsletter",
    articleTitle: "The Digital Transformation of Healthcare",
    articleDescription:
      "Healthcare is undergoing a digital transformation with telemedicine, AI, and wearable devices revolutionizing care. Discover how technology is improving patient outcomes.",
    author: {
      name: "Isabella Thompson",
      title: "Content Writer",
    },
  },
];

export const dummyArticle = `Design on the web has changed drastically over the years; So much so that we now have the tools to build on ideas that we once thought were impossible. It's an exciting time to be a front-end developer, and I don't say this lightly! There was a time when structuring layouts on the web was very tedious, and implementing responsive layouts was not even a question in mind. Developers were forced to build multiples website to ensure that desktop and mobile users had a great user experience when visiting a website.

It's important to remember that user experience drives the design of user interfaces, and layout is a critical component of those interfaces. Therefore, as the complexity of those interfaces grows, so do the options for designing layouts for them.

Let's think about the following questions as they relate to responsive layouts:

- How does the layout of a page respond when the size of our viewport -- our canvas in which our website is built -- changes? At smaller screen sizes, are we putting more important information at the top or are we showing a zoomed-out version of the page?
- What happens to the size of elements on the page with a change in viewport size?

There was a time when questions like the ones above were difficult to answer, but the introduction of the responsive web, allowed us to begin uncovering the answers to those questions.

## A look at where we are

Tools such as media queries, flexbox, and CSS grid allowed developers to reshape layouts on the web to suit the devices of many users. Media queries brought us the ability to query the size of the viewport, thereby allowing us to modify the CSS properties on DOM elements with a change in viewport size. This addition meant that we could now show/hide and even re-order DOM elements based on the viewport size.

Let's imagine that this box is our viewport. As we make the size of this viewport smaller (dragging the slider), we begin to see a layout shift -- Elements that were once in rows are now put into columns, and elements that were once present are now hidden.

## Container queries

Container queries iterate on the idea of micro layouts, as they allow us to set a defined container and have the children query the size of the container. Similar to media queries, container queries allow us to modify the CSS properties on DOM elements, thereby allowing us to show/hide, re-order DOM elements, and modify other properties based on the size of a container. An important distinction to be aware of is that **media queries** allow us to query the size of the viewport, whereas **container queries** allow us to query the size of a defined container.

Container queries move us beyond considering only the viewport, and allow any component or element to respond to a defined container’s width -- Stephanie Eckles.

This solves a unique problem in that container queries allow us to develop components that are intrinsically responsive. This allows us to have confidence that we can build a component once, but use it anywhere. More specifically, a component that is used in the main section of a web page can now be put in a sidebar without adding any additional utility classes that target the component in the sidebar.

Let's check out the example below in which we've defined some components that make use of container queries.
`;
