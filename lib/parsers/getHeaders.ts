export const getHeaders = (fileString: string) => {
  const regex = /^#{1,6} .+\n/gm;

  const headingLst = fileString.match(regex) || [];

  const formattedHeading = headingLst.map((heading) => {
    const process = heading
      .replace(/#/g, "")
      .replace(/:([a-zA-Z0-9_#]+):/g, "")
      .trim()
      .toLowerCase();
    const level = heading.match(/#/g)?.length || 1;

    return {
      heading: process,
      slug: process
        .toLowerCase()
        .replace(/:([a-zA-Z0-9_#]+):/g, "")
        .replace(/[^a-z0-9 ]/g, "")
        .trim()
        .replace(/[ ]/g, "-"),
      level: level,
    };
  });

  return formattedHeading;
};
