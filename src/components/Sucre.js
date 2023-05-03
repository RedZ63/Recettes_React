import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sucre = () => {
    return (
        <div>
            <Navbar/>
             <h1 class="titrePage" id="sucre">NOS RECETTES SUCREES</h1>
    <h2 class="titreSucre2">Découvrez nos meilleurs recettes de gateaux et desserts pour se reconforter ! </h2>

    
            <p>Et si on se préparait un petit gâteau pour ne pas déprimer ? Les soirées sont parfois longues quand on ne peut plus sortir... Alors une petite touche sucrée peut largement améliorer votre soirée à la maison !
            Gâteau au yaourt, cookies, panna cotta, tiramisu, gâteau au chocolat, banana bread, crème brûlée, mousse au chocolat, crème vanille, pain perdu... Qu'est-ce qui vous ferait plaisir ?
            Bon appétit !</p>
  
        <h1 class="titreArticle">Les coockies à l'américaine</h1>
    <section class="article1">
        <img src="../../../img/sucre/coockies.jpg" className="image1"></img>   
            <ol class="list">
                <li>Préchauffez le four à 180°C.</li><br/>
                <li>Laissez ramollir le beurre à température ambiante ou réchauffez-le 20 secondes au micro-onde. Dans un saladier, malaxez-le ensuite avec le sucre.</li><br/>
                <li>Ajoutez l’œuf, le miel et les pépites de chocolat. Ensuite, versez progressivement la farine, la levure chimique et le sel. Mélangez bien.</li><br/>
                <li>Recouvrez une plaque de papier cuisson. A la main, formez des boules de pâte et disposez-les sur la plaque en les espaçant car elles s’étaleront lors de la cuisson.</li><br/>
                <li>Enfournez pendant 8 à 10 minutes. Il faut sortir les cookies lorsque les contours commencent à brunir. Dégustez les cookies à l'américaine tièdes ou froids.</li><br/>
            </ol>
    </section>
        <h1 class="titreArticle">Crème brulée</h1>
    <section class="article2">
            <ol class="list">
                <li>Préchauffez le four à 180°C.</li><br/>
                <li>Fendez la gousse de vanille et grattez-la avec la pointe d'un couteau pour récupérer les graines. </li><br/>
                <li>Fouettez le sucre avec les jaunes d’œufs jusqu’à ce que le ménage blanchisse. Ajoutez le lait, la crème liquide et les graines de vanille.</li><br/>
                <li>Mettez la préparation à cuire dans des ramequins au four pendant 40 à 50 minutes en surveillant la cuisson.</li><br/>
                <li>Une fois les crèmes brûlées refroidies, saupoudrez-les de cassonade et caramélisez-les avec un chalumeau. Servez aussitôt.</li><br/>
            </ol>
        <img src="../../../img/sucre/creme.jpg" className="image1"></img>
    </section>
        <h1 class="titreArticle">Flan à la vanille</h1>
    <section class="article1">
        <img src="../../../img/sucre/flan.jpg" className="image1"></img>
            <ol class="list">
                <li>Préchauffez le four à 180°C, beurrez le moule.</li><br/>
                <li>Fendez et grattez la gousse de vanille. Versez les grains et le lait dans une casserole. Faites frémir.</li><br/>
                <li>Dans un saladier, mélangez les oeufs et le sucre. Ajoutez la maïzena puis le lait. Mélangez.</li><br/>
                <li>Versez la préparation dans la casserole. Faites chauffer quelques minutes à feu doux en remuant constamment.</li><br/>
                <li>Etalez la pâte brisée dans le moule puis versez la préparation. Enfournez durant 45 minutes. Laissez refroidir le flan à la vanille avant de le déguster.</li><br/>
            </ol>
    </section>
    <Footer/>
        </div>
    );
};

export default Sucre;