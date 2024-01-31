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
      <div className="flex flex-col w-10/12 self-center">
        <div className="flex flex-col items-center sm:flex-row space-x-3 my-14 text-gray-800 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 md:w-48 h-full">
                <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <h1 className="text-center sm:text-start flex flex-col justify-center w-fit font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Meet the team of{' '}
                <span className="text-yellow-500 block sm:inline-block">Homer's Pub</span>
            </h1>
        </div>
        <div className=" p-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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
    </div>
  );
}

export default TeamComponent;