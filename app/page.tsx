import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import { TPost } from "./data/posts";

export default async function Home(){
  const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
  const posts: TPost[] = await response.json();
  return(
    <>
    <Header />
    <section className="text-gray-600 body-font ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {posts.map((post) => <Post key={post.id} post={post} />)}
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}