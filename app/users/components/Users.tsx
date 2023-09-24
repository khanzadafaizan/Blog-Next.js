import { TUsers } from "../usersdata/users";
type UserProps = {
  user: TUsers;
};
export default function User(props: UserProps) {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
         <div className="flex-grow">
          <h2 className="title-font font-medium text-amber-700">
            {props.user.name}
          </h2>
          <p className="text-gray-500">{props.user.title}</p>
          <a
            href={`/users/usersDetails/${props.user.id}`}
            className="text-indigo-500 inline-flex items-center"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
}
