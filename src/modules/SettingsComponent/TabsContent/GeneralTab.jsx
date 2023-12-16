import React from "react";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const General = () => {
    return(
        <div className="space-y-6">
            <p className="text-gray-600 dark:text-zinc-300 text-sm">
                Customize general account settings and configure preferences to tailor your experience.
            </p>
            <div>
                <p className="text-zinc-950 dark:text-gray-300 font-semibold text-lg md:text-lg">Apperance</p>
            </div>
            <SaveTabsBtn />
        </div>
    );
}

export default General;