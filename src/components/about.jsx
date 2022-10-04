import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { uzeReplace } from "../hooks/uzeReplace";

const About = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  
  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list${search}`)
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, [search]);

  const onchangee = ({ target: { name, value } }) => {
    const aa = uzeReplace(name, value);
    navigate(`${aa}`);
  };

  return (
    <div>
      <h1>search</h1>
      <input
        type="text"
        placeholder="address"
        name="address"
        onChange={onchangee}
        defaultValue={query.get("address")}
      />
      <input
        type="text"
        placeholder="country"
        name="country"
        onChange={onchangee}
          defaultValue={query.get("country")}
      />
      <div>
        {data.map((value) => {
          return (
            <h1 key={value.id}>
              {value?.address}, {value?.country} - {value.user?.firstname}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default About;
