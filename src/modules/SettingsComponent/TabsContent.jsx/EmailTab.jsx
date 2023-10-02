import React from "react";
import TabInput from "../../../UI/tabInput";
import { userInformation } from "../../../common_data";

const Email = () => {
    return(
        <div className="w-1/2 space-y-4">
            <TabInput name="Email" placeholder={userInformation.generalInfo.email}/>
        </div>
    );
}

export default Email;