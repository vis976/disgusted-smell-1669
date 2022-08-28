import { Badge, Box, Image } from '@chakra-ui/react'
import axios from "axios";
import { useEffect, useState } from "react";

function DataLocalApi() {
 const [data, setData] = useState([]);
  function getData() {
    return axios("http://localhost:8080/articles");
  }
  useEffect(() => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div>
      {/* {data.map((e) => {
        return (
          <div>
            <h3>{e.title}</h3>
           <h4>{e.url}</h4>
          </div>
        );
      })} */}
    </div>
  );
}

  export default DataLocalApi