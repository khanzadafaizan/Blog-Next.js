import { TUsers } from "../../../users/usersdata/users";
type Params = {
  id: number;
};
type UserDetailsProps = {
  params: Params;
};
export default async function UserDetails(props:UserDetailsProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.id}`
  );
  let currentUser: TUsers = await response.json();
  console.log(currentUser);
  if (!currentUser) {
    return <div>User details is not found.</div>;
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    {currentUser.id}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {currentUser.username}
                  </p>
                  <p className="leading-relaxed text-base">
                    {currentUser.email}
                  </p>
                  <p className="leading-relaxed text-base">
                    {currentUser.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
