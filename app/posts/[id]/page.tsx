import Image from "next/image";
import { TPost } from "@/app/data/posts";
type Params = {
  id: number;
};

type PostDetailProps = {
  params: Params;
};
export default async function PostDetail(props: PostDetailProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.id}`
  );
  const currentPost: TPost = await response.json();
  if (!currentPost) {
    return <div>no post found</div>;
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            src="/pictures/post-image1.jpg"
            width="1200"
            height="1200"
            alt={""}
          />
        </div>

        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed">{currentPost.id}</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {currentPost.title}
          </h1>
          <p className="mb-8 leading-relaxed">{currentPost.body}</p>
        </div>
      </div>
    </section>
  );
}
