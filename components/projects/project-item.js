import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tag.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <div className="m-30 flex flex-col w-full h-full">
        <div>
          <Image
            className="rounded-t-xl"
            src={imgSrc}
            alt="Cover Image"
            width={1050}
            height={300}
            layout="resposive"
            objectFit="none"
            quality={100}
          />
        </div>
        <div className="h-1/2 p-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <h3 className="mt-4 text-base">{description}</h3>
          <Link href={github} legacyBehavior>
            <a href={github}>
              <span className="flex">Github Link</span>
            </a>
          </Link>
          <p className="my-1 ">
            작업기간 : {start} ~ {end}
          </p>
          <div className="flex items-start mt-2">
            {tags.map((aTag) => (
              <h1
                className="px-2 py-1 mr-2 rounded-md bg-orange-200 dark:bg-sky-700 w-30"
                key={aTag.id}
              >
                {aTag.name}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
