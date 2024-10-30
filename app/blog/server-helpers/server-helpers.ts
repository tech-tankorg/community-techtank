import { Blogs_Schema } from "@utils/types/zod-schema-types";
import { client } from "@sanity/lib/client";
import groq from "groq";
import { IS_PROD } from "@utils/constants";

export const getAllArticles = async () => {
  const query = groq`*[_type == "blog"] | order(scheduled_date desc){
            title,
            scheduled_date,
            "slug": slug.current,
            featured_content,
            "category":category->name,
            authors[]->{
                name,
                author_title,
                author_image->{name,aspect_ratio,alt_text,"url":cloudinary_image.url,"width":cloudinary_image.width,"height":cloudinary_image.height}
            },
            description,
            seo_image->{name,aspect_ratio,alt_text,"url":cloudinary_image.url,"width":cloudinary_image.width,"height":cloudinary_image.height}
        }`;

  const blog = await client.fetch(
    query,
    {},
    {
      next: { revalidate: IS_PROD ? 3600 : 0 },
    }
  );

  return Blogs_Schema.parse(blog);
};

export const getFeaturedArticles = async () => {
  const query = groq`*[_type == "blog" && featured_content == true] | order(scheduled_date desc){
            title,
            scheduled_date,
            "slug": slug.current,
            featured_content,
            "category":category->name,
            authors[]->{
                name,
                author_title,
                author_image->{name,aspect_ratio,alt_text,"url":cloudinary_image.url,"width":cloudinary_image.width,"height":cloudinary_image.height}
            },
            description,
            seo_image->{name,aspect_ratio,alt_text,"url":cloudinary_image.url,"width":cloudinary_image.width,"height":cloudinary_image.height}
        }`;

  const sanityResult = await client.fetch(
    query,
    {},
    {
      next: { revalidate: IS_PROD ? 3600 : 0 },
    }
  );
  const blog = Blogs_Schema.parse(sanityResult);

  return blog[0];
};
