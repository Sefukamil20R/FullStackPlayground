import React from "react";
const SectionOneTwoThreeLinks = ({ WrapperName, newAlert, mainTitle, titleWrapper, black, descrWrapper, grey, fromTxt, orderTxt, ipodCaption, linksWrapper, descriptionTxt }) => {
    return (<section className={WrapperName}>
        <div className="container">
          {newAlert && (<div className="new-alert">New</div>)}

          {titleWrapper && <div className={`title-wraper bold ${black}`}>{mainTitle}</div>}
          
          {descrWrapper && (<div> <div className={`description-wrapper ${black}`}>
    {descriptionTxt}  </div> <div className={`price-wrapper ${grey}`}> {fromTxt}
          </div>
                  
          </div>)}

          

          {linksWrapper && (<div className="links-wrapper">
            <ul>
              <li><a href="">Learn more</a></li>
              <li><a href="">{orderTxt}</a></li>
            </ul>
          </div>)}

          {ipodCaption && (<div className="ipod-caption row">
              <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
              </div>
            </div>)}
        </div>
      </section>);
};
export default SectionOneTwoThreeLinks;
