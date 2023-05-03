import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Sale = () => {
    return (
        <div>
            <Navbar/>
                   {/* ////////////////////////////SALE///////////////////////////////// */}
    <h1 class="titrePage" id="sale">NOS RECETTES SALEES</h1>
        <h2>Le confinement, c'est pour le moins éprouvant, On passe plus de temps à la maison !</h2>
    <div class="container">
        <p>Pour vous changer les idées, pourquoi ne pas cuisiner de bons petits plats ? Que vous soyez cuistot débutant ou chef aguerri, on a de quoi faire pour vous régaler. Vous aurez ainsi grand plaisir à préparer des tartes, des quiches, des gratins, des veloutés et autres mijotés ! À vos fourneaux. </p>
    </div>  
        <h1 class="titreArticle">Gratin de courgettes façon dauphinois</h1>
    <section class="article1">
        <img src="../../../img/sale/gratin.jpg" className="image1"></img>
            <ol class="list">
                <li>Préchauffer le four à 180°C. Beurrer un plat à four et frotter avec une gousse d’ail fendue. Passer le reste des gousses d’ail au presse-ail et réserver.</li><br/>
                <li>Laver et essuyer les courgettes et les pommes de terre. Couper les légumes en fines rondelles d’environ 3 mm.</li><br/>
                <li>Déposer une couche de pommes de terre au fond du plat, saler, poivrer et parsemer d’ail. Recouvrir d’une couche de courgettes, sel et poivre à nouveau. Renouveler l'opération jusqu’à épuisement des ingrédients.</li><br/>
                <li>Dans un bol, battre la crème fraîche et le lait avec du sel, du poivre et de la muscade. Verser la préparation sur les légumes et parsemer de fromage râpé.</li><br/>
                <li>Faire cuire au four environ 50 minutes.s</li><br/>
            </ol>
    </section>
        <h1 class="titreArticle">Cannelloni à la bolognaise</h1>
    <section class="article2">
            <ol class="list">
                <li>Peler et émincer l'oignon. Eplucher et couper la carotte en dés. Découper la mozzarella en morceaux..</li><br/>
                <li>Dans une cocotte, ajouter l'huile d'olive et faire chauffer l'oignon et la carotte pendant 3 minutes. Ajouter la viande hachée et faire cuire 10 minutes en remuant de temps en temps.  </li><br/>
                <li>Préchauffer le four à 180°C.</li><br/>
                <li>Verser 20 cl de coulis de tomates dans la cocotte, assaisonner et laisser frémir pendant 15 minutes.</li><br/>
                <li>Farcir les cannelloni de sauce bolognaise et les disposer dans un plat à gratin. Verser le coulis restant, parsemer de mozzarella et enfourner pour 40 minutes. Servir chaud.</li><br/>
            </ol>
        <img src="../../../img/sale/pates.jpg" className="image1"></img>
    </section>
        <h1 class="titreArticle">Couscous Royal</h1>
    <section class="article1">
        <img src="../../../img/sale/couscous.jpg" className="image1"></img>
            <ol class="list">
                <li>Peler et émincer les oignons et les gousses d'ail. Détailler l'agneau en gros morceaux. Dans le fond d'un faitout (ou d'une cocotte), faites revenir l'oignon, l'ail, l'agneau et le poulet avec un peu d'huile d'olive. </li><br/>
                <li>Eplucher et découper en rondelles le céleri, les carottes et les navets. Egoutter les pois chiches. Dans le faitout ou la cocotte, ajouter le céleri, les carottes, les navets, les pois chiches, le concentré de tomate, la harissa et le sel. Couvrir les ingrédients d'eau. Faire mijoter à couvert et à feu doux durant 1 heure. </li><br/>
                <li>Pendant ce temps, faire gonfler la semoule avec de l'eau bouillante selon les indications de la boîte. Dans une poêle, faire cuire les merguez pendant environ 10 minutes. </li><br/>
                <li>Dans un plat, verser la semoule. Ajouter le contenu du faitout et les merguez. Servir chaud. </li><br/>
            </ol>
    </section>
    <Footer/>
        </div>
    );
};

export default Sale;