import { type } from "os";
import { TComments } from "../../commentsdata/comments";
type Params = {
  id: number;
};
type CommentDetailsProps = {
  params: Params;
};

export default async function CommentDetails(props: CommentDetailsProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${props.params.id}`
  );
  let currentComment: TComments = await response.json();
  if (!currentComment) {
    return <h3>Comments are not found</h3>;
  }
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">
                {currentComment.id}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {currentComment.name}
              </h2>
              <a className="text-indigo-500 inline-flex items-center mt-4">
                {currentComment.email}
              </a>
              <p className="leading-relaxed">{currentComment.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
