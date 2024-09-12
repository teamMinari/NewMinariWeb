import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import { NotionRenderer } from "react-notion-x";

const NewNotion = () => {
    const [something, setSomething] = useState(null);

    useEffect(() => {
      const NOTION_ID = "44540191e49042e1b12dac3bb710b042";
      axios.get(`http://localhost:3001/notion?notion=${NOTION_ID}`).then((res) => {
        console.log(res.data);
        setSomething(res.data);
        console.log(something);
      });
    }, []);
    return (
        <div>
            {
              something ?
              <NotionRenderer recordMap={something} /> :
              <div>hi</div>
            }
        </div>
    );
};

export default NewNotion;