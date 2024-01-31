// TeamComponent.js
import React, { useEffect, useState } from "react";
import TextHeader from "../../UI/textHeader";
import { fetchTeamData } from "./helpers/teamThunk";

const TeamComponent = () => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = await fetchTeamData();
        setTeam(teamData);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);

  if (!team) {
    // Можно добавить загрузочный индикатор или другое сообщение
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-800">
      <div className='sticky bg-opacity-90 top-0 flex justify-between items-center py-3 md:h-24 px-5 bg-zinc-200 dark:bg-stone-950'>
        <TextHeader text="Team" color="text-zinc-950 dark:text-gray-300" size="text-sm md:text-xl" />
      </div>
      <div className="self-center w-10/12 xl:w-full p-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {Object.values(team).map((employee, index) => (
          <div key={index} className="flex flex-col items-center p-4 text-center space-y-4">
            <img className="h-48 object-cover my-2 rounded-full" src={employee.profilePicture} alt={`${employee.name}'s profile`} />
            <div className="space-y-1">
              <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-blue-700/10  text-blue-700 dark:text-blue-800 bg-blue-100 dark:bg-blue-300">
                {employee.position}
              </span>
              <h2 className="text-xl font-semibold text-black dark:text-white">{employee.name}</h2>
              <p className="font-medium text-gray-600 dark:text-gray-400">{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamComponent;