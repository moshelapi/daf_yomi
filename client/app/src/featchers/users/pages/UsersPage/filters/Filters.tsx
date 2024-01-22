import { useState } from "react";
import { User } from "../../../utils/interfaces/interface";

export default function Filters ({users}:{users:User[]}){

    const [filter, setFilter] = useState('');
    const [filterType, setFilterType] = useState<'age' | 'title'>('age');
  
    const filteredUsers = users.filter((users) => {
      if (filterType === 'age') {
        return users.age.toString() === filter;
      } else if (filterType === 'title') {
        return users.title.toLowerCase().includes(filter.toLowerCase());
      }
      return true;
    });
  
    return (
      <div>
        <div>
          <label htmlFor="filterType">Filter by:</label>
          <select
            id="filterType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as 'age' | 'title')}
          >
            <option value="age">Age</option>
            <option value="title">Title</option>
          </select>
        </div>
  
        <div>
          <label htmlFor="filterValue">
            {filterType === 'age' ? 'Enter Age:' : 'Enter Title:'}
          </label>
          <input
            id="filterValue"
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
  
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <div>
                <img src={user.image || 'default.jpg'} alt={user.firstName} />
                <h2>
                  {user.firstName} {user.lastName}
                </h2>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <p>Title: {user.title}</p>
                {/* Add more user details as needed */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };