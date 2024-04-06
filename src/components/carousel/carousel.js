import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from './carousel.module.css';
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Carousel(){

    const[Featured, SetFeatured] = useState([]) 
    const[Current, SetCurrent] = useState(0) 

    const Endpoint = 'https://raw.githubusercontent.com/wtuydev/test-json/main/films.json'

    useEffect(() =>{   
        AOS.init()
        axios.get(Endpoint).then(res => {
            SetFeatured(res.data.movies.filter(item => item.featured === true))            
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const prev = () => {
      if(Current>0){
          SetCurrent(Current-1);
      }  
    }

    const next = () => {
      if(Current<2){
          SetCurrent(Current+1);
      }      
    }

    const Carousel = Featured.map((item,index) => {
        return(
            <div key={index} style={{ display: index === Current ? "block" : "none" }}>
              <div className={styles.background} style={{ backgroundImage: `url("`+item.images[2]+`")`, alt: "background", backgroundSize: "cover", backgroundColor: 'transparent', backgroundRepeat : 'no-repeat' }} > </div>
              <div className={styles.featured}>
                <div className={styles.left}>
                   <div className={styles.rating}> 
                      <p className={styles.star}> &#9733; </p>
                      <p> <span className={styles.strong}> <big>{item.rating}</big></span>/10</p> 
                      <p className={styles.strong}>IMDB</p> 
                   </div> 
                   <img className={styles.poster} src={item.poster} alt="poster" data-aos="flip-up"/>
                </div> 
                <div className={styles.right}>
                    <div className={styles.container}>
                       <div className={styles.info}>
                          <h2 className={styles.title}>{item.title}</h2>  
                          <h5 className={styles.description}>{item.description}</h5> 
                       </div>
                    </div>    
                    <div className={styles.options}>   
                      <div className={styles.trailer}> 
                        <a href={item.url} target="_blank" rel="noreferrer"> 
                          <img src={process.env.PUBLIC_URL + '/icons/trailer.png'} alt="trailer"/>  
                          <p className={styles.txt}> Ver trailer </p> 
                        </a>
                      </div>            
                      <div className={styles.ticket}> 
                        <Link to={`/ticket/${item.title}`}> 
                         <img src={process.env.PUBLIC_URL + '/icons/ticket.png'} alt="ticket"/> 
                         <p className={styles.txt}> Comprar ticket </p>  
                        </Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        )
    })

    return(
        <div className={styles.carousel}>
           <div className={styles.arrowLeft} style={{ display: Current > 0 ? "block" : "none" }}> <img src={process.env.PUBLIC_URL + '/icons/arrow-left.png'} alt="prev" onClick={prev}/> </div>
           <div className={styles.arrowRight} style={{ display: Current < 2 ? "block" : "none" }}> <img src={process.env.PUBLIC_URL + '/icons/arrow-right.png'} alt="next" onClick={next}/> </div>
           {Carousel} 
        </div>
    )

}

export default Carousel;