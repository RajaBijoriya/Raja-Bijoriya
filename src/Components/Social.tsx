import { socialLinks } from "../User";


const Social=()=>{
   
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a key={index} href={`${socialLink.link}`} target="blank" className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
          <div data-aos="fade-up-left" data-aos-duration="800">  < socialLink.icon className="-rotate-90" size={30} /></div>
        </a>
    })
        
    return <div className="flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-64 -left-48 rotate-90">
        {socialIcons}
        <hr className="border-[1.5px] w-40 rounded-full  bg-textColor border-textColor"/>
    </div>

    
}
export default Social;
