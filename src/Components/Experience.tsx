import { Timeline, useMatches } from "@mantine/core";
import { IconCertificate, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from "@tabler/icons-react";
import { Text } from "@mantine/core";
import { ExperienceInfo } from "../User";

const TimeLineItem = (items:any)=> {
    const size=useMatches({
      xs:15,
      md:20,
    })
    return items.map((item: any, index: number) => <Timeline.Item data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" key={index}
    className="pt-12 !mb-2 sm-mx:!p-1"
    bullet={<IconCertificate className="!text-bgColor" size={20}/>}>
        <div className="border shadow-[0_0_10px_0_#64FFDA50] flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2">
            <div className="flex gap-2 items-center">
                <img className="rounded-lg w-16 md-mx:w-14" src={`/${item.company}.png`} alt="comany" />  
             <div className="flex flex-col">
              <div className="text-White  text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base ">{item.title}</div>
              <div className="text-lg  font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs">{item.company} &#x2022; {item.date}</div>
             </div>

            </div>
            <div className="text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs">
              {item.desc}
            </div>
            <div className="text-lg font-medium text-textColor
            md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1"><div className="font-semibold text-White">Skills:</div>
            <div className="flex gap-1 flex-wrap">
            {
              item.skills.map((skill:any, index:number)=><div key={index}> 
              &#x2022; {skill} </div>)
            }
            </div>
            </div>
        </div>
      </Timeline.Item>)

}

const Experience = () => {
  const size=useMatches({
      xs:15,
      md:20,
    })
    const dot=useMatches({
      xs:25,
      md:30,
    })
  return <div className="px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 my-10 mb-28 font-mono" id="Certificates">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl 
      mb-10 font-bold text-center text-White">
        <span className="text-primaryColor">04.&nbsp;</span>Certificates
      </h1>
      <Timeline color="#64FFDA" active={5} bulletSize={dot} lineWidth={2}>
       {
        TimeLineItem(ExperienceInfo)
       }
       <Timeline.Item bullet={<IconCertificate className="!text-bgColor"
        size={20}/>}></Timeline.Item>
      </Timeline>
    </div>
}
export default Experience;
