import { Timeline } from "antd";
import TimelineLabel from "./components/TimelineLabel";
import TimelineChild from "./components/TimelineChild";
import { createContext } from "react";

const Experience = () => {
  let Context = createContext();
  let itemStyle = {
    fontSize: "large",
  };
  const timelineItems = [
    {
      color: "blue",
      label: (
        <TimelineLabel
          link="https://3pc.com.au/"
          label="3rd Party Containers"
        />
      ),
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date="October 2017"
            name="Forklift Operator"
            description="I drove the horse"
          />
          <TimelineChild
            date="January 2020"
            name="Team Leader"
            description="I lead the team"
          />
        </>
      ),
    },
    {
      label: (
        <TimelineLabel link="https://newcold.com/" label="Newcold Advanced" />
      ),
      color: "blue",
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date="May 2022"
            name="Industrial Automation Operator"
            description="I ran the system"
          />
        </>
      ),
    },
    {
      label: (
        <TimelineLabel
          link="https://mugonat.com/"
          label="Mugonat Systems Inc"
        />
      ),
      color: "green",
      style: itemStyle,
      children: (
        <>
          <TimelineChild
            date="October 2022"
            name="Developer Intern"
            description="I learnt code"
          />
          <TimelineChild
            date="January 2023"
            name="Fullstack Developer"
            description="I write code"
          />
        </>
      ),
    },
  ];

  return (
    <>
      <h1 className=" font-semibold  lg:text-7xl text-3xl text-center">
        Work Experience
      </h1>

      <div className=" max-h-fit w-screen md:grid md:grid-flow-col overflow-hidden flex  flex-col  mt-20 mb-20">
        <div className=" flex flex-col md:flex-row  place-content-center place-items-center w-screen lg:text-7xl text-3xl gap-4  font-extralight">
          <Timeline
            mode="left"
            items={timelineItems}
            className=" w-auto"
            style={{
              padding: "1rem",
              flexGrow: 1,
              height: "fit-content",
            }}
          />
          <div
            className="flex place-content-center max-h-fit"
            style={{ width: "50vw" }}
          >
            <i className="timeline-writeup text-lg  md:pr-40 font-light text-center flex place-content-center md:place-items-center place-items-start">
              Hover On A Timeline Item To Learn More
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
