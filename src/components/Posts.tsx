// src/components/Posts.tsx

import Link from "next/link";
import { POSTS_QUERYResult } from "../../sanity.types";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (
    <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {posts.map((post) => (
        <li key={post._id}>
          <Link
            className="block p-4 hover:bg-blue-50"
            href={`/posts/${post?.slug?.current}`}
          >
            {post?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}