import { Slider } from "@mui/material";
import { findMinAndDistance } from "../function";
import { User } from "../../../utils/interfaces/interface";

interface Props {
  setDis: (range: number ) => void;
  dis: number ;
  users: User[] ;
  age: number ;
  setAge: (age: number) => void;
}

export default function Filters({ dis, setDis, users, age ,setAge }: Props) {
  const [_min, _max] = findMinAndDistance(users)

  function handleDistanceChange(_event: Event, newValue: number | number[]) {
    setDis(newValue as number);
  }

  function handleAgeChange(_event: Event, newValue: number | number[]) {
    setAge(newValue as number);
  }

  return (
    <div>
      <h2>
        מרחק
      </h2>
        <Slider
          value={dis}
          onChange={handleDistanceChange}
          valueLabelDisplay="on"
          min={0}
          max={1000}
        />
      <h2>
        גיל
      </h2>
        <Slider
          value={age}
          onChange={handleAgeChange}
          valueLabelDisplay="on"
          min={0}
          max={100}
        />

    </div>
  );
};