import React from "react";
import SectionOneTwoThreeLinks from './SectionOneTwoThreeLinks';
import SectionOneTwoThreeData from './SectionOneTwoThreeData';
const SectionOneTwoThree = ({}) => {
    return (<div>

    {/* method I */}
        {/* <SectionOneTwoThreeLinks   WrapperName ="first-hightlight-wrapper" newAlert = "New" mainTitle ="iPad Pro" />
        
        <SectionOneTwoThreeLinks
          WrapperName= "second-hightlight-wrapper"
          descriptionTxt="Twice the speed. Twice the storage."
          linksWrapper= {true}
          newAlert="New"
          mainTitle= "MacBook Air"
          titleWrapper= "title-wraper"
         />
        
        
        <SectionOneTwoThreeLinks   WrapperName= "third-hightlight-wrapper"
            linksWrapper= {true}  mainTitle= "iPhone 11 Pro"/> */}



        {/* method II*/}
        {/* {SectionOneTwoThreeData.map((section, index) => (
          <SectionOneTwoThreeLinks WrapperName={section.WrapperName}
            newAlert={section.newAlert}
            mainTitle={section.mainTitle}
            titleWrapper={section.titleWrapper}
            orderTxt={section.orderTxt}
            descriptionTxt={section.descriptionTxt}
            fromTxt={section.fromTxt}
            {...section}

            />
          ))} */}

        {/* method III */}
      
              {SectionOneTwoThreeData.map((section, index) => (<SectionOneTwoThreeLinks key={index} {...section}/>))} 


      </div>);
};
export default SectionOneTwoThree;
