import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Titre from '../components/Titre';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        
            <div className='mainContainer'>
                <Header/>
                <Titre text="BIENVENUE AUX FINS GOURMETS"/>
                <section class="container">
                <div class= "choix">
                    <h4 class="titreChoix">
                    <NavLink className="navigations" to="/recettes/sucre">
  SUCRE
</NavLink>
                    </h4>
                </div>
                <div class= "choix">
                    <h4 class="titreChoix">
                
<NavLink className="navigations" to="/recettes/sale">
  SALE
</NavLink>

                    
                    </h4>
                </div>
                <div class= "choix">
                    <h4 class="titreChoix">
                 
<NavLink className="navigations" to="/recettes/surprise">
  SURPRISE
</NavLink>
                  </h4>
                </div>
            </section>
            
                <Footer/>
            </div>
       
    );
};

export default Home;



