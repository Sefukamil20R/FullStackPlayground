import React from "react";
import SectionsFourFiveSixData from './SectionsFourFiveSixData';
import SectionsFourFiveSixLink from './SectionsFourFiveSixLink';
// import AppleYoutube from "./YouTube/AppleYoutube";

const SectionsFourFiveSix = ({}) => {
    return (<div>

    <SectionsFourFiveSixLink heghlightWrapper="fourth-heghlight-wrapper" leftComponent={true} rightComponent={true}/>

    {/* method II */}


        {/* Rendering SectionFourFiveSixLinks with each section's Data */}
        {/* <SectionFourFiveSixLinks {...SectionFourFiveSixData.sectionFourData} /> */}

        
        <SectionsFourFiveSixLink {...SectionsFourFiveSixData.sectionFiveData}/>   
        <SectionsFourFiveSixLink {...SectionsFourFiveSixData.sectionSixData}/>
        {/* <AppleYoutube/> */}
      </div>);
};
export default SectionsFourFiveSix;
