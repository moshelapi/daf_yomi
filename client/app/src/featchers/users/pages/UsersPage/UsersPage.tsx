import  { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { Location, User } from "../../utils/interfaces/interface";
import { addUserDistance, findMinDistance } from "./function";
import { GET_ALL_USERS } from "../../../global/apolloclient/graphQL_querys";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserCard from '../../../global/styles/components/cards/UserCard';
import { UserCardContainer } from '../../../global/styles/styled-component/style.userCardsConteiner';
import { Title } from '../../../global/styles/styled-component/styled-global';
import { Slider } from '../../../global/styles/components/cards/Slider';
import { SideNav } from '../../../global/styles/styled-component/style.sideNav';
import Filters from './filters/Filters';
import { useAppSelector } from '../../../../rtk/hooks';

export default function UsersPage() {
  
  const Navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [location, setLocation] = useState<Location | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [distanceRange, setDistanceRange] = useState([0, 1000000]);
  // const dataa = useAppSelector((state) => state.users);
  // console.log(dataa);

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
      const updatedUsers = addUserDistance(data.getAllUsers, location.latitude, location.longitude)
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
    <>
    <div style={{}}>
      {/* <Button onClick={()=>{Navigate("/addUser")}}>
        add user
      </Button> */}
      <Title>מצא חברותא באזור  שלך</Title>
      </div>
    <div style={{display: "flex"}}>
       <SideNav>
        <Title>סנן</Title>
       {users ? <Filters users={users}/>  :""}
       </SideNav>
      <UserCardContainer>
        {users  ? users.map((user: User) => (    
          <UserCard key={user.id} user={user} />
        )) : 'Loading users...'}
      </UserCardContainer>
    </div>
    </>
  );
}
