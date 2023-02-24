import { useState,useEffect } from 'react';
import './relatednewssection.css'
import { BearerToken } from '../Tokens';
import { useQuery } from '../Hooks';

function RelatedNewsSection(props) {

    const [Data, setData] = useState([]);
    const query = useQuery();
    const catid = props.Cid
    const user_id = props.Uid
    const BToken = BearerToken();

    useEffect(()=>{
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+BToken);

    var formdata = new FormData();
    formdata.append("access_key", "5670");
    formdata.append("category_id", catid);
    formdata.append("offset", "0");
    formdata.append("limit", "10");
    formdata.append("user_id", user_id);
    formdata.append("language_id", "14");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://news.wrteam.in/Api/get_news_by_category", requestOptions)
      .then(response => response.json())
      .then(result => {
        setData(result.data)
      })
      .catch(error => console.log('error', error));

    },[])


  return (
    <div>
      {Data.length === 0 ? "loading"
                :

      <div id='RNews-main'>
                <nav id='PNews-cat-nav' className="navbar">  
                       <h4 id='nav-logo' ><b>Related News</b></h4> 
                </nav>
                {Data && Data.map((element)=>(
                <div id='RNews-card' className="card">
                    <img  id='RNews-image' src={element.image} className="card-img-top" alt="..."/>
                    <div className="RNews-card-body">
                    <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                    <h6 id='RNews-card-text' className="card-text">{element.title.slice(0,40)}...</h6>
                    </div>
                    {/* <>
                  {index<=3 ? 
                  <div id='RNews-card' className="card">
                  <img  id='RNews-image' src={element.image} className="card-img-top" alt="..."/>
                  <div className="RNews-card-body">
                  <button id='btnRNewsCatagory' className='btn btn-sm' type="button" >{element.category_name}</button>
                  <h6 id='RNews-card-text' className="card-text">{element.title.slice(0,40)}...</h6>
                  </div>
              </div>:null}
                  
                  </> */}
                </div>
                ))}

            </div>
            }
    </div>
  )
}

export default RelatedNewsSection
