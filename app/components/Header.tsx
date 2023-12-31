import Image from "next/image"
export default function Header (){
    return(
        <header className="text-gray-600 body-font bg-orange-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/pictures/blog_logo.png"
              width={100}
              height={100}
              alt={"images"}
            ></Image>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="./users" className="mr-5 hover:text-gray-600 text-amber-700">
              Users
            </a>
            <a href="./gallery" className="mr-5 hover:text-gray-600 text-amber-700">Gallery</a>
            <a className="mr-5 hover:text-gray-600 text-amber-700">Third Link</a>
            <a className="mr-5 hover:text-gray-600 text-amber-700">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-amber-400 border-0 py-1 px-3 focus:outline-none hover:text-gray-600 text-amber-700 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </header>
    )
}