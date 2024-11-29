import React from "react";
import '../../src/Style/About.css'

const AboutSection = () => {
    return(
        <section className="flex justify-center items-center about">
            <div className="container_1">
                <h1 className="font-bold about_header text-center text-quicksand text-text-xl">QUI SOMMES NOUS ?</h1>
                <div className="container_2">
                    <p className="font-poppins text-text-lg text-justify">
                        Nous sommes <span className="font-bold">Iwefe Books</span>, notre mission est de permettre aux jeunes d'aujourd'hui, l'accès et le développement de la lecture.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        Notre objectif est de faciliter l'accès à des livres de qualités, qui favorisent l'éveil de l'esprit.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        Nous accompagnons  spécifiquement les jeunes de 18 à 35 ans, que ce soit élève, étudiant, entrepreneur, salarié, ou au chômage, l'accès à des livres qui leurs permettent d'améliorer leur vie et d'évoluer dans la connaissance.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        Le mot <span>Iwefe</span> signifie en Yoruba l'amour du livre : <span className="font-semibold">Iwe</span> : qui signifie <span className="text-blue underline">livre</span> papier et <span className="font-semibold">Ifè</span> qui signifie <span className="text-blue underline">l'amour</span>. Nous avons une histoire. Nous voudrions permettre à un nombre illimité de personnes de connaître leurs histoires, d'apprendre des histoires d'autres personnes pour enfin exprimer leurs propres histoires.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-blue text-justify">
                        Iwefe incarne des valeurs telles que : 
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">La passion :</span> Notre passion pour la lecture et la connaissance nous pousse à aller loin et à faire en sorte que tous ceux qui décident de nous suivre évoluent également dans leurs passions.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">La volonté d'aider :</span> Nous adorons trouver une solution a des problèmes. Cela constitue pour nous un moyen important d'impacter la vie des gens qui nous suivent.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">La Transparence :</span> Nous ne cachons rien. Nous ne cachons pas la vérité. Nous préférons des moyens souples pour gérer les conflits.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">L'accessibilité :</span> La diversité de nos canaux de communication permettent à nos abonnés de prendre facilement contact avec nous. Nous répondons aux messages.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">La Responsabilité sociale :</span> La protection de l'environnement et le développement durable est pour nous un élément très important qui fait partie de notre histoire. Nous fournissons des livres produits avec 80% de papier recyclé. Nous privilégions les emballages recyclables et durables. Nous encourageons nos abonnés à adopter des comportements responsables pour la protection de notre environnement et de notre santé.
                    </p>
                    <br />
                    <p className="font-poppins text-text-lg text-justify">
                        <span className="font-bold underline">Le sentiment d'appartenance :</span> Nous construisons une communauté libre et forte autour de la lecture. Nous mettons tout en œuvre pour  permettre à chaque membre de notre communauté l'accès et le développement de la connaissance à travers la lecture. Nous encourageons les membres de notre communauté à impacter. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection