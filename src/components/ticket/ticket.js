import React, {useState} from 'react';
import Select from 'react-select'
import { useParams } from "react-router-dom";
import styles from './ticket.module.css';

function Ticket(){

    const params = useParams()

    const optionsMovie = [
      { value: "Avengers: Endgame", label: "Avengers: Endgame" },
      { value: "Back to the Future", label: "Back to the Future" },
      { value: "Coco", label: "Coco" },
      { value: "Forrest Gump", label: "Forrest Gump" },
      { value: "Harry Potter and the Sorcerer's Stone", label: "Harry Potter and the Sorcerer's Stone" },
      { value: "Interstellar", label: "Interstellar" },
      { value: "Monsters, Inc.", label: "Monsters, Inc." },
      { value: "My Neighbor Totoro", label: "My Neighbor Totoro" },
      { value: "Spirited Away", label: "Spirited Away" },
      { value: "Star Wars: Episode IV - A New Hope", label: "Star Wars: Episode IV - A New Hope" },
      { value: "Star Wars: Episode V - The Empire Strikes Back", label: "Star Wars: Episode V - The Empire Strikes Back" },
      { value: "The Dark Knight", label: "The Dark Knight" },
      { value: "The Godfather", label: "The Godfather" },      
      { value: "The Godfather Part II", label: "The Godfather Part II" },
      { value: "The Lion King", label: "The Lion King" },
      { value: "The Lord of the Rings: The Fellowship of the Ring", label: "The Lord of the Rings: The Fellowship of the Ring" },
      { value: "The Lord of the Rings: The Return of the King", label: "The Lord of the Rings: The Return of the King" },
      { value: "The Matrix", label: "The Matrix" },
      { value: "Toy Story", label: "Toy Story" },
      { value: "Toy Story 3", label: "Toy Story 3" },
      { value: "Up", label: "Up" },
      { value: "WALL·E", label: "WALL·E" },
    ];

    const optionsFuncion = [
      { value: '2024-04-10 14:00', label: '10/04/2024 14:00' }, { value: '2024-04-10 16:00', label: '10/04/2024 16:00' }, { value: '2024-04-10 18:00', label: '10/04/2024 18:00' }, { value: '2024-04-10 20:00', label: '10/04/2024 20:00' },
      { value: '2024-04-11 14:00', label: '11/04/2024 14:00' }, { value: '2024-04-11 16:00', label: '11/04/2024 16:00' }, { value: '2024-04-11 18:00', label: '11/04/2024 18:00' }, { value: '2024-04-11 20:00', label: '11/04/2024 20:00' },
      { value: '2024-04-12 14:00', label: '12/04/2024 14:00' }, { value: '2024-04-12 16:00', label: '12/04/2024 16:00' }, { value: '2024-04-12 18:00', label: '12/04/2024 18:00' }, { value: '2024-04-12 20:00', label: '12/04/2024 20:00' },
      { value: '2024-04-13 14:00', label: '13/04/2024 14:00' }, { value: '2024-04-13 16:00', label: '13/04/2024 16:00' }, { value: '2024-04-13 18:00', label: '13/04/2024 18:00' }, { value: '2024-04-13 20:00', label: '13/04/2024 20:00' },
    ]

    const optionsSeat = [
      { value: 'F1A1', label: 'Fila 1 - Asiento 1' }, { value: 'F1A2', label: 'Fila 1 - Asiento 2' }, { value: 'F1A3', label: 'Fila 1 - Asiento 3' }, { value: 'F1A4', label: 'Fila 1 - Asiento 4' },
      { value: 'F2A1', label: 'Fila 2 - Asiento 1' }, { value: 'F2A2', label: 'Fila 2 - Asiento 2' }, { value: 'F2A3', label: 'Fila 2 - Asiento 3' }, { value: 'F2A4', label: 'Fila 2 - Asiento 4' },
      { value: 'F3A1', label: 'Fila 3 - Asiento 1' }, { value: 'F3A2', label: 'Fila 3 - Asiento 2' }, { value: 'F3A3', label: 'Fila 3 - Asiento 3' }, { value: 'F3A4', label: 'Fila 3 - Asiento 4' },
      { value: 'F4A1', label: 'Fila 4 - Asiento 1' }, { value: 'F4A2', label: 'Fila 4 - Asiento 2' }, { value: 'F4A3', label: 'Fila 4 - Asiento 3' }, { value: 'F4A4', label: 'Fila 4 - Asiento 4' },
    ]

    let defaultMovie = optionsMovie[0];
    if(params.movie!==undefined){
        defaultMovie = optionsMovie.find(o => o.label === params.movie);
    }

    const [step, setStep] = useState(1);
    const [movie, setMovie] = useState(defaultMovie);
    const [funcion, setFuncion] = useState(optionsFuncion[0]);
    const [seat, setSeat] = useState(optionsSeat[0]);
    const [description, setDescription] = useState("Selecciona una función");  
    const [ticket, setTicket] = useState(optionsFuncion[0].label);    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [msgError, setMsgError] = useState("");

    const selectStyles = {
      control: styles => ({ ...styles, backgroundColor: 'none', textAlign: 'left', padding: "8px 0 8px 0;", border: '3px solid #554F95', borderRadius: '10px;'}),
      option: (styles) => { return {...styles, backgroundColor: '#282c34', color: '#ffffff', textAlign: 'left',  cursor: 'pointer', fontSize: '0.6em'}; },
      menu: (provided) => ({ ...provided, background: '#282c34', zIndex: "9999 !important" }),
      singleValue:(provided) => ({...provided, color: 'white', fontSize: '0.8em', padding:'5px', }),     
    };

    const changeMovie = (selected) => {
        setMovie(optionsMovie[selected]);
    };

    const changeFuncion = (selected) => {  
        setFuncion(optionsFuncion[selected]);   
        setTicket(selected);
    };

    const changeSeat = (selected) => {
        setSeat(optionsSeat[selected]);
    };

    const checkPhone = () => {
       if(phone.length===3){
          setPhone(phone+" - ");
       }
       if(phone.length===9){
          setPhone(phone+" - ");
       }
    };

    const reset = () => {
        setMovie(optionsMovie[0]);
        setFuncion(optionsFuncion[0]);
        setSeat(optionsSeat[0]);
    }

    const prevStep = () => {
        setStep(step-1);
        if(step===2){
            setDescription("Selecciona una función");
            setMsgError("");
        }
    }

    const nextStep = () => {        
        if(step===1){           
            setDescription("Completa tu información personal");            
            const temp = ticket.split(" ");
            setTicket(temp[0]+" a las "+temp[1]);
            setStep(step+1);
        }
        if(step===2){
            if(name.length<4){            
               setMsgError("El nombre debe tener mínimo de 4 caracteres");
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
               setMsgError("El email tiene formato inválido");
            }  
            else if(phone.length<15){            
              setMsgError("El teléfono debe tener 9 caracteres");
            }       
            else{
               setStep(step+1);
            }
        } 
    }

    return(
        <div className="ticket">  
          <div className={styles.background} style={{ backgroundImage: `url("` + process.env.PUBLIC_URL + '/background/background.jpg' + `")`, backgroundSize: "cover", backgroundColor: 'transparent', backgroundRepeat : 'no-repeat' }} > </div>
             <h3 className={styles.header} style={{ display: step === 3 ? "none" : "block" }}> Comprar ticket </h3>
             <p className={styles.text} style={{ display: step === 3 ? "none" : "block" }}> {description} </p>
             <div className={styles.form}>  

               <div id="step1" style={{ display: step === 1 ? "block" : "none" }}>   
                 <div className={styles.row}> 
                    <div className={styles.selectTitle}> <p>Seleccione pelicula</p> </div>
                    <Select className={styles.select} options={optionsMovie} styles={selectStyles} value={movie} onChange={e => changeMovie(e.value)} isSearchable={false}/>
                 </div>  
                 <div className={styles.row}> 
                    <div className={styles.selectTitle}> <p>Seleccione función</p> </div>
                    <Select className={styles.select} options={optionsFuncion} styles={selectStyles} value={funcion} onChange={e => changeFuncion(e.value)} isSearchable={false}/>
                 </div> 
                 <div className={styles.row}> 
                    <div className={styles.selectTitle}> <p>Seleccione asiento</p> </div>
                    <Select className={styles.select} options={optionsSeat} styles={selectStyles} value={seat} onChange={e => changeSeat(e.value)} isSearchable={false}/>
                 </div> 
                 <div className={styles.menu1}> 
                     <div className={styles.continue} onClick={nextStep}> Continuar </div>
                 </div>
                 <div className={styles.menu2}> 
                    <div className={styles.reset} onClick={reset}> Reinciar </div>
                 </div>
              </div>

              <div id="step2" style={{ display: step === 2 ? "block" : "none" }}>  
                <div className={styles.row}> 
                  <div className={styles.selectTitle}> <p>Nombre completo</p> </div>
                  <input type="text" className={styles.input} value={name} onChange={(e) => {setName(e.target.value)}}></input>
                </div>
                <div className={styles.row}> 
                  <div className={styles.selectTitle}> <p>E-mail</p> </div>
                  <input type="text" className={styles.input} value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                </div>
                <div className={styles.row}> 
                  <div className={styles.selectTitle}> <p>Teléfono</p> </div>
                  <input type="text" className={styles.input} value={phone} onChange={(e) => {setPhone(e.target.value)}} onKeyUp ={checkPhone} maxLength="15"></input>
                </div>
                <div className={styles.menu1}> 
                     <p className={styles.error}>{msgError}</p>
                     <div className={styles.finish} onClick={nextStep}> Finalizar </div>
                 </div>
                 <div className={styles.menu2}> 
                    <div className={styles.back} onClick={prevStep}> Volver </div>
                 </div>
              </div> 

              <div id="step3" style={{ display: step === 3 ? "block" : "none" }}>  
                <div className={styles.row}> 
                  <div className={styles.final}> 
                     <p className={styles.finalHead}>Comprar ticket</p>
                     <p className={styles.finalTitle}>¡Felicitaciones {name}!</p> 
                     <img className={styles.ticket} src={process.env.PUBLIC_URL + '/icons/buy-ticket.png'} alt="ticket"/>
                     <p className={styles.finalDescription}>Tu entrada para la función {ticket} ha sido canjeada</p> 
                     <p className={styles.finalFooter}>¡Te esperamos!</p> 
                  </div>                  
                </div>             
              </div> 

            </div>
        </div>
    )  
}

export default Ticket