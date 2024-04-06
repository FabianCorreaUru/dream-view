import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from './billboard.module.css';
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Billboard(){

    const[Items, SetItems] = useState([]) 

    const Endpoint = 'https://raw.githubusercontent.com/wtuydev/test-json/main/films.json'

    useEffect(() =>{   
        AOS.init()
        axios.get(Endpoint).then(res => {
            SetItems(res.data.movies)            
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const Movies = Items.map((item,index) => {
        return(
            <div key={index} className={styles.column}>
              <div key={index} className={styles.movie} data-aos="flip-up">
                <p className={styles.title}>{item.title}</p>   
                <img className={styles.poster} src={item.poster} alt="poster"/>
                <Link to={`/ticket/${item.title}`}> <div className={styles.buy}>Comprar Ticket</div> </Link>
              </div>
            </div>
        )
    })

    return(
        <div className="Billboard">
            <h3 className={styles.header}> En cartelera </h3>
            <div className={styles.container}> {Movies} </div>
        </div>
    )
}

export default Billboard
