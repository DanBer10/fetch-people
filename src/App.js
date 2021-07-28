import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchData = () => {
  return axios
    .get("https://randomuser.me/api/?results=20")
    .then((res) => {
      const { results } = res.data;
      console.log(results);
      return results;
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchData().then((apiPeople) => {
      setPeople(apiPeople);
    });
  }, []);

  return (
    <div className="App">
      {people.map((person, personIdx) => (
        <div key={personIdx} className="people-list">
          <h4>
            {person.name.first} {person.name.last}
          </h4>
          <h5>Age: {person.dob.age}</h5>
          <h5>Phone: {person.phone}</h5>
          <h5>Country: {person.location.country}</h5>
          <h5>City: {person.location.city}</h5>
          <img src={person.picture.large} alt="didnt find pic" />
        </div>
      ))}
    </div>
  );
}

export default App;
