import { useState, useEffect } from "react";
import axios from "axios";

import TitleItem from "./TitleItem";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const result = await axios.get(
          `${process.env.hostFull}/posts/titles/0`
        );

        if (result.status !== 200) {
          throw new Error("Error while fetching titles");
        }

        setTitles(result.data.bestTitles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTitles();
  }, []);

  const titleItems = titles.map((title, idx) => {
    if (idx > 20) return;

    return (
      <TitleItem key={title._id} id={title._id} counter={title.counter}>
        {title.name}
      </TitleItem>
    );
  });

  return <div className={`${styles.container}`}>{titleItems}</div>;
};

export default Sidebar;
