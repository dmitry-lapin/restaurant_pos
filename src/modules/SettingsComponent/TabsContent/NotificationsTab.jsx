import React from "react";
import SaveTabsBtn from "../../../UI/SaveChangesTabsBtn";

const Notifications = () => {
  const emailOptions = {
    "messages": "Get notified when someone sends you a message.",
    "team": "Get notified when someone joins the team.",
    "security changes": "Get notified when your security rules change.",
  };


  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-sm">
        We'll always let you know about important changes, but you pick what else you want to hear about.
      </p>
      <form className="space-y-12">
        <fieldset className="space-y-3">
          <legend className="font-medium capitalize">push notifications</legend>
          <div className="space-y-3 ml-5">
            {Object.entries(emailOptions).map(([label, content]) => (
              <div key={label} className="flex items-start gap-x-3">
                <input
                  id={`push-${label}`}
                  name="push-notifications"
                  type="checkbox"
                  className="h-4 w-4 mt-1 border hover:outline-2 accent-indigo-600 checked:bg-indigo-600 "
                />
                <div className="flex flex-col">
                  <label
                    htmlFor={`push-${label}`}
                    className="text-start text-sm font-medium capitalize"
                  >
                    {label}
                  </label>
                  <p className="text-gray-500 text-sm">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </fieldset>
        <SaveTabsBtn />
      </form>
    </div>
  );
};

export default Notifications;
