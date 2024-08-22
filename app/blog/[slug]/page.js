// blog/[slug]/page.js
import BlogPost from "../BlogPost";

export default function BlogPostPage({ params }) {
  return (
    <div className="bg-black h-full w-full">
      <BlogPost slug={params.slug} />;
    </div>
  );
}
