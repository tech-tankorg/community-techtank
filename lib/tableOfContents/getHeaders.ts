export const getHeaders = (fileString: string) => {
  const regex = /#{1}.+\n/g;

  const headingLst = fileString.match(regex) || [];

  const formattedHeading = headingLst.map((heading) => {
    const process = heading.replace(/#/g, "").trim().toLowerCase();
    const level = heading.match(/#/g)?.length || 1;

    return {
      heading: process,
      slug: process
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/[ ]/g, "-"),
      level: level,
    };
  });

  return formattedHeading;
};
