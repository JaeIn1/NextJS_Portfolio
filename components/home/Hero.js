import Animation from "./Animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
          꾸준히 성장하고 목표 달성을 위해 포기하지 않는 프론트엔드 개발자,
          이재인입니다.
        </h1>
        <p className="text-xl text-gray-900">
          저는 항상 기술과 디자인이 만나는 지점에서 창의적인 솔루션을 찾아내는
          것에 큰 흥미를 느끼고 있는 주니어 프론트엔드 엔지니어입니다.
        </p>
        <br />
        <p className="text-xl text-gray-900 mb-8">
          새로운 기술이나 트렌드가 생길때마다 꾸준히 학습을 하며, 팀원들과의
          적극적인 소통으로 함께 성장할 수 있는 “환경”을 만들어 함께 나아갈 수
          있습니다.
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
