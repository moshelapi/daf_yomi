import  { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { Location, User } from "../../utils/interfaces/interface";
import { addUserDistance, findMinDistance } from "./function";
import { GET_ALL_USERS } from "../../../global/apolloclient/graphQL_querys";
import UserCard from "../../../global/templats/cards/UserCard";
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UsersPage() {
  const Navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log(data);
  const [location, setLocation] = useState<Location | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [distanceRange, setDistanceRange] = useState([0, 100]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }
    );
  }, []);

  useEffect(() => {
    if (location && data) {
      const updatedUsers = addUserDistance(data.users, location.latitude, location.longitude)
        .filter(user => user.distance >= distanceRange[0] && user.distance <= distanceRange[1]);
      setUsers(updatedUsers);
    }
  }, [ data, distanceRange]);

  function handleDistanceChange(_event: Event, newValue: number | number[]) {
    setDistanceRange(newValue as number[]);
  }


  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Button onClick={()=>{Navigate("/addUser")}}>
        add user
      </Button>
      <div style={{ width: 300, margin: "0 auto 3rem" }}>
        <Slider
          value={distanceRange}
          onChange={handleDistanceChange}
          valueLabelDisplay="auto"
          min={findMinDistance(users)}
          max={40}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        {users ? users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        )) : 'Loading users...'}
      </div>
    </div>
  );
}
