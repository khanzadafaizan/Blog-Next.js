// comment
import Comments from "./components/Comments";
import { TComments } from "./commentsdata/comments";
export default async function Home () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments: TComments[] = await response.json();
  if (!comments) {
    return <div> comments are not fond</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {comments.map((comment) => (
            <Comments key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
}
