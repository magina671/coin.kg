import React,{useState, useEffect} from "react";
import HomeNews from '../news/news-home';
import "./home.css";
import API from '../../API';


const Home = (props) => {
  const [news, setNews] = useState([]);

  // useEffect(()=>{
  // },[]);

  return (
    <div className="main_wrapper">
        <HomeNews {...props}/>
    </div>
  );
};

export default Home