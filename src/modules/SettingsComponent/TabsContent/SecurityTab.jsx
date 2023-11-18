import React from "react";
import TabInput from "../../../UI/tabInput";
import { userInformation } from "../../../common_data";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const Profile = () => {
    return(
        <div className="flex flex-col w-1/2">
            <TabInput name="Change password" placeholder="Enter password here" disabled={false}/>
            <SaveTabsBtn/>
        </div>
    );
}

export default Profile;