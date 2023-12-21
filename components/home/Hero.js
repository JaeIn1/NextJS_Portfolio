import Animation from "./Animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
          꾸준히 성정하고 목표 달성을 위해 포기하지 않는 프론트엔드 개발자,
          이재인입니다.
        </h1>
        <p className="text-xl text-gray-900">
          저는 항상 기술과 디자인이 만나는 지점에서 창의적인 솔루션을 찾아내는
          것에 큰 흥미를 느끼고 있는 주니어 프론트엔드 엔지니어입니다.
        </p>
        <br />
        <p className="text-xl text-gray-900 mb-8">
          프론트엔드에 대한 내 관심은 그저 기술을 사용하는 것 이상으로,
          사용자와의 상호작용을 통해 새로운 경험을 만들어내는 과정에 있습니다.
          새로운 기술이나 트렌드가 등장할 때마다, 제 눈은 항상 그것에 집중되어
          있습니다. 그리고 이러한 흥미로운 도전에 대응하기 위해 끊임없이
          학습하고 있습니다.
        </p>
        <p className="flex justify-center">
          <Link href={"/projects"} legacyBehavior>
            <a className="dark:text-white inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
        </p>
      </div>
      <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
