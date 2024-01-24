import  { useState, useEffect } from 'react';
import { Location, User } from "../../utils/interfaces/interface";
import { addUserDistance } from "./function";
import UserCard from '../../../global/styles/components/cards/UserCard';
import { UserCardContainer } from '../../../global/styles/styled-component/style.userCardsConteiner';
import { Title } from '../../../global/styles/styled-component/styled-global';
import { SideNav } from '../../../global/styles/styled-component/style.sideNav';
import Filters from './filters/Filters';
import { useAppSelector } from '../../../../rtk/hooks';
import axios from 'axios';

export default function UsersPage() {
 
  const [location, setLocation] = useState<Location | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [distanceRange, setDistanceRange] = useState<number>(1000);
  const [age , setAge] = useState<number>(100)
  const {users:data,loading,error}= useAppSelector((state) => state.users);
  const [messi , setMessi] = useState()
  
  useEffect(() => {
    const fetchData = async()=>{

      try{
          const response = await axios.get('https://data.gov.il/api/3/action/datastore_search', {
         params: {
          resource_id: '5c78e9fa-c2e2-4771-93ff-7f400a12f7ba',}})
           if (response.status === 200){
             setUsers(response.data.result.records)
            console.log(messi);}
         }
      catch (error){
             console.log(error)
      }
    }
    fetchData()
  
  }, [messi]);
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
      const updatedUsers = addUserDistance(data, location.latitude, location.longitude)
        .filter(user => user.distance as number <= distanceRange && 
          user.age <= age);
        setUsers(updatedUsers);
      
    }
  }, [ data, distanceRange,age]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;
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
       {users ? <Filters dis={distanceRange} setDis={setDistanceRange}
        users={users} age={age} setAge={setAge} />  :""}
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
