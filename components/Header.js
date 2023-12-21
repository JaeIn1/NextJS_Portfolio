import Link from "next/link";
import DarkMoodeToogleButton from "./dark-mode-toogle-button";
import Image from "next/image";
import reactIcon from "../public/react.png";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"} legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={reactIcon} width={30} height={30} />
              <span className="ml-3 text-xl">JaeIn Portfolio</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href={"/projects"} legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Project</a>
            </Link>
            <Link href={"https://velog.io/@ysy06053"} legacyBehavior>
              <a className="mr-5 hover:text-gray-900" target="_blank">
                Blog
              </a>
            </Link>
          </nav>
          <DarkMoodeToogleButton />
        </div>
      </header>
    </>
  );
}
