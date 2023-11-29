import React from "react";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const General = () => {
    return(
        <div className="space-y-6">
            <p className="text-gray-600 text-sm">
                Customize general account settings and configure preferences to tailor your experience."
            </p>
            <div>
                <p className="font-semibold text-lg">Apperance</p>
            </div>
            <SaveTabsBtn />
        </div>
    );
}

export default General;