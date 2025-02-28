import * as React from "react";
import calculateCalories from "../utils/calculateCalories";
import { Gauge } from "./charts/Gauge";

const CaloriesCard = ({ activitiesData, weight }) => {
  let calories = 0;
  if (activitiesData) {
    activitiesData.map((activity) => {
      calories += calculateCalories(activity.type, weight, activity.duration);
    });
  }

  return (
    <>
      <div className="shadow-lg shadow-blue-500/50 hover:scale-110  bg-sky-950 rounded-[13px] lg:w-[450px] h-[250px] md:w-[420px] m-10 ">
        <div className="flex flex-col-reverse items-center justify-center flex-auto mt-4 md:flex-row">
          <div className="mt-7">
            <Gauge
              value={calories ? calories : 3000}
              size="large"
              showValue={true}
            />
          </div>
          <div className="flex-col items-center justify-center mt-4 md:flex">
            <h2 className="text-2xl text-center text-white md:pt-10 text-bold md:pl-14">
              Total Calories Burned
            </h2>
            <h2 className="hidden pl-10 text-3xl text-center text-blue-500 md:block text-bold pt-7">
              {calories ? calories : 3000} kCal
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaloriesCard;
