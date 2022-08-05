import { getAge } from "./functions";

const logotext = "HAYDEN ROSS";
const meta = {
    title: "Hayden Ross",
    description: "Je suis Hayden Ross _ Développeur full-stack",
};

const introdata = {
    title: "Je suis Hayden Ross, et j'aime:",
    animated: {
        first: "Créer",
        second: "Programmer",
        third: "Composer",
        fourth: "Jouer"
    },
    description: "Créateur et inventif depuis mon plus jeune âge, j'adore autant programmer des sites web ou des jeux vidéos que de composer ou jouer de la musique.",
    your_img_url: "images/concertRossh.jpg",
};


const dataabout = {
    title: "Qui suis-je?",
    aboutme: `Je m'apelle Hayden Ross, j'ai ${getAge("may 29 2003")} ans et j'adore créer. Créateur et inventif depuis mon plus jeune âge, j'adore autant programmer des sites web ou des jeux vidéos que de composer ou jouer de la musique.`,
};

const worktimeline = [{
    jobtitle: "Collège O'Sullivan de Québec",
    where: "Québec",
    date: "2021 - 2022",
},
{
    jobtitle: "Collège des Compagnons",
    where: "Québec",
    date: "2015 - 2020",
},
];

const skills = [{
    name: "Javascript",
    value: 65,
},
{
    name: "React",
    value: 48,
},
{
    name: "PHP",
    value: 58,
},
{
    name: "CSS",
    value: 81,
},
{
    name: "GDScript",
    value: 83,
},
];

const services = [{
    title: "Programmation",
    description: "Web | Apps | Jeux vidéo",
},
{
    title: "Jeux Vidéo",
    description: "Créer | Jouer | Inventer",
},
{
    title: "Musique",
    description: "Composer | Interpréter | Écouter",
},
];

const dataportfolio = [
{
    title: "Colnet Programmation II",
    img: "images/imagesPortfolio/colnetDatabase.png",
    desctiption: "Projet de PHP en programmation II. Permet à l'utilisateur de se créer un compte et de s'y connecté avec de la validation en PHP. Lorsque l'utilisateur est connecté, il peut créer des groupes, des étudiants et afficher toute sorte de données. (Le bouton Voir le projet permet principalement de voir le visuel du projet. Le coté backend ne marche pas)",
    technologies: "HTML, CSS, PHP",
    link: "https://colnet.rossh2905.com/accueil.php",
    github: "https://github.com/rossh2905/colnet",
},
{
    title: "Lancement entreprise site WordPress",
    img: "images/imagesPortfolio/int2tp02.jpg",
    desctiption: "Refonte d'un site de la formation professionnelle des navigateurs en WordPress Divi pour le cours d'intégration II..",
    technologies: "WordPress, Divi",
    link: "https://tp02.rossh2905.com/",
},
{
    title: "Maquette LinkedIn",
    img: "images/imagesPortfolio/maquetteLinkedIn.jpg",
    desctiption: "Maquette mode sombre de LinkedIn incluant une barre de navigation, les invitations et plus encore.",
    technologies: "HTML, CSS, Bootstrap",
    link: "https://linkedin.rossh2905.com/maquette.html",
    github: "https://github.com/rossh2905/linkedin",
},
{
    title: "Metallica site WordPress",
    img: "images/imagesPortfolio/int2tp03.jpg",
    desctiption: "Refonte du site de Metallica en WordPress Divi pour le cours d'intégration II.",
    technologies: "WordPress, Divi",
    link: "https://tp03.rossh2905.com/",
},
{
    title: "Dashboard React",
    img: "images/imagesPortfolio/dashboardReact.jpg",
    desctiption: "Dashboard fait en React et React Boostrap. Les données sont pris de plusieurs fichers json. ",
    technologies: "React, HTML, CSS, React Boostrap",
    link: "https://tp02int3.rossh2905.com/paper-dashboard-react",
    github: "https://github.com/rossh2905/dashboard",
},
{
    title: "Portfolio React",
    img: "images/imagesPortfolio/portfolio.jpg",
    desctiption: "Ce site web. Fait en React et React Boostrap est mon portfolio personnel. On y retrouve plusieurs des projets que j'ai fait.",
    technologies: "React, HTML, CSS, React Boostrap",
    link: "https://portfolio.rossh2905.com",
    github: "https://github.com/rossh2905/portfolio",
},
];

const contactConfig = {
    YOUR_EMAIL: "rossh2905@gmail.com",
    YOUR_FONE: "(418) 945-2064",
    description: "*J'ai tendance à répondre plus vite par mail que par téléphone.",
    YOUR_SERVICE_ID: "service_yqapjyw",
    YOUR_TEMPLATE_ID: "template_17cvx6l",
    YOUR_USER_ID: "9VUtNk5jG5NPoIGVN",
};

const socialprofils = {
    github: "https://github.com/rossh2905",
    facebook: "https://www.facebook.com/profile.php?id=100003074858172",
    linkedin: "https://www.linkedin.com/in/hayden-ross-bb2524228/",
    instagram: "https://www.instagram.com/hayden_ross333/",
    spotify: "https://open.spotify.com/",
    email: "mailto:rossh2905@gmail.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};