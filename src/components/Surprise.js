import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Surprise = () => {
    return (
        <div>
            <Navbar/>
                    {/* ///////////////////////SURPRISE//////////////////////////////////////// */}
    <h1 class="titrePage" id="surprise">NOS RECETTES SURPRISES</h1>
        <h2>Les fourneaux c'est bien, mais les surprises c'est mieux ! Surprenez votre moitié !</h2>
    <div class="container">
            <p>Pour vous changer les idées, pourquoi ne pas cuisiner de bonnes petites surprises ? Que vous soyez cuistot débutant ou chef aguerri, on a de quoi faire pour vous régaler. Vous aurez ainsi grand plaisir à préparer nos meilleures recettes! À vos fourneaux. </p>
    </div>  
        <h2 class="titreArticle">Baguette surprise</h2>
    <section class="article1">
        <img src="../../../img/surprise/baguette.jpeg" className="image1"></img>
            <ol class="list">
                <li>Dans un saladier, écrasez le fromage frais avec une pincée de sel et un tour de moulin à poivre.</li><br/>
                <li>Emincez finement les tomates mi-séchées et les crevettes, ajoutez-les au fromage frais.</li><br/>
                <li>Pelez le concombre puis coupez-le en tronçons et évidez le coeur. Remplissez-les de fromage frais.</li><br/>
                <li>Fendez soigneusement la baguette en 2 dans la longueur. Garnissez de tronçons de concombre fourré puis refermez le pain. Enroulez la baguette très serrée dans du film alimentaire et réservez au réfrigérateur pour au moins 2 h.</li><br/>
                <li>Au moment de servir l'apéritif, déballez la baguette surprise et tranchez-la finement à l'aide d'un couteau à dents.</li><br/>
            </ol>
    </section>
        <h1 class="titreArticle">Gauffres salées surprise</h1>
    <section class="article1">
            <ol class="list">
                <li>Faites fondre le beurre à feu doux dans une casserole ou au micro-ondes. Réservez.</li><br/>
                <li>Cassez les œufs au dessus d’un saladier et battez-les en omelette. Ajoutez la farine et la levure puis délayez avec le lait et le beurre fondu, jusqu’à obtenir une pâte lisse et homogène. Salez et poivrez puis laissez reposer 30 min.</li><br/>
                <li>Faites chauffer le gaufrier puis versez une petite louche de pâte dans l’appareil et faites cuire 3 à 4 min.</li><br/>
                <li>Faites cuire les autres gaufres jusqu’à épuisement de la pâte. Ouvrez les gaufres en deux dans l’épaisseur et tartinez-les de fromage frais. Servez avec quelques feuilles de roquette.</li><br/>
            </ol>
        <img src="../../../img/surprise/gauffres.jpg" className="image1"></img>
    </section>
        <h1 class="titreArticle">Melon surprise</h1>
    <section class="article1">
        <img src="../../../img/surprise/melon.jpg" className="image1"></img>
            <ol class="list">
                <li>Lavez tous les fruits et égouttez-les. </li><br/>
                <li>Coupez les melons en deux, retirez les graines et récupérez la chair à l'aide d'une cuillère parisienne pour obtenir de petites boules. </li><br/>
                <li>Coupez les fraises en lamelles dans la longueur. Pelez et émincez l'oignon rouge. Détaillez les tomates en tranches fines. Pelez et râpez le gingembre. Pressez le fruit de la passion.</li><br/>
                <li>Préparer la sauce en mélangeant l'huile et le vinaigre, sel et poivre. </li><br/>
                <li>Versez sur les fruits préparés et mélangez bien. Répartissez dans les coques évidés de melon et servez frais.</li><br/>
            </ol>
    </section>
        <Footer/>
        </div>
    );
};

export default Surprise;