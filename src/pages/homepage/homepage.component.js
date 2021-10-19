import React from "react";
import Deals from "../../child-components/deals/deals.component";
import Directory from '../../child-components/directory/directory.component'

function Homepage(){
    return(
        <div className="homepage-component">
       
        <Directory/>
        <Deals/>
        </div>
    )
}
export default Homepage;