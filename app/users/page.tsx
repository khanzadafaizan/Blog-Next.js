import User from "./components/Users";
import { TUsers } from "./usersdata/users";
export default async function Home () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TUsers[] = await response.json();
  return (
    <>
      <div className="flex flex-col text-center w-full py-16 bg-orange-100">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-amber-700">
          Our Users
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 pb-20">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably have not
          heard of them.
        </p>
      </div>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-2">
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
