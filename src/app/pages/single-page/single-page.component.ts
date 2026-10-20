import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  activeSection = 'accueil';
  activeTimeline = 'experience';
  currentYear = new Date().getFullYear();

  contactForm!: FormGroup;
  isSubmitting = false;

  profile = {
    firstName: 'Sondes',
    lastName: 'Affes',
    avatar: 'assets/images/sondes-profile.jpg'
  };

  stats = [
    { value: '3', label: "Années d'études" },
    { value: '10+', label: 'Projets réalisés' },
    { value: '5', label: 'Technologies maîtrisées' },
    { value: '2+', label: "Années d'expérience" }
  ];

  skillCategories = [
    {
      name: 'Développement Web & Frameworks',
      description: 'Technologies web et frameworks modernes avec langages associés.',
      icon: 'fas fa-globe-americas',
      skills: [
        { name: 'Dart', icon: 'fas fa-code', color: '#0284c7' },
        { name: 'HTML', icon: 'fab fa-html5', color: '#0284c7' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#0284c7' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#0284c7' },
        { name: 'PHP', icon: 'fab fa-php', color: '#0284c7' },
        { name: 'Laravel', icon: 'fab fa-laravel', color: '#0284c7' },
        { name: '.NET', icon: 'fab fa-microsoft', color: '#0284c7' },
        { name: 'ASP.NET Core', icon: 'fab fa-microsoft', color: '#0284c7' },
        { name: 'Blazor', icon: 'fab fa-microsoft', color: '#0284c7' },
        { name: 'Jakarta EE', icon: 'fas fa-coffee', color: '#0284c7' },
        { name: 'Spring Boot', icon: 'fas fa-leaf', color: '#0284c7' },
        { name: 'Flutter', icon: 'fas fa-mobile-alt', color: '#0284c7' },
        { name: 'React Native', icon: 'fab fa-react', color: '#0284c7' },
        { name: 'Ionic', icon: 'fas fa-mobile-alt', color: '#0284c7' },
        { name: 'Capacitor', icon: 'fas fa-mobile-alt', color: '#0284c7' },
        { name: 'FastAPI', icon: 'fas fa-rocket', color: '#0284c7' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#0284c7' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#0284c7' }
      ]
    },
    {
      name: 'Data & Intelligence Artificielle',
      description: "Technologies d'IA et de science des données.",
      icon: 'fas fa-brain',
      skills: [
        { name: 'Machine Learning', icon: 'fas fa-robot', color: '#0284c7' },
        { name: 'Deep Learning', icon: 'fas fa-project-diagram', color: '#0284c7' },
        { name: 'TensorFlow', icon: 'fas fa-brain', color: '#0284c7' },
        { name: 'PyTorch', icon: 'fas fa-fire', color: '#0284c7' },
        { name: 'Transformer', icon: 'fas fa-network-wired', color: '#0284c7' }
      ]
    },
    {
      name: 'Bases de données',
      description: 'Systèmes de gestion de bases de données.',
      icon: 'fas fa-database',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database', color: '#0284c7' },
        { name: 'NoSQL', icon: 'fas fa-database', color: '#0284c7' },
        { name: 'Oracle', icon: 'fas fa-database', color: '#0284c7' },
        { name: 'SQLite', icon: 'fas fa-database', color: '#0284c7' },
        { name: 'SQL Server', icon: 'fas fa-database', color: '#0284c7' }
      ]
    },
    {
      name: 'Business Intelligence & Informatique Décisionnelle',
      description: "Outils d'analyse et de reporting.",
      icon: 'fas fa-chart-bar',
      skills: [
        { name: 'Power BI', icon: 'fas fa-chart-line', color: '#0284c7' },
        { name: 'Talend', icon: 'fas fa-exchange-alt', color: '#0284c7' },
        { name: 'SSIS', icon: 'fas fa-database', color: '#0284c7' },
        { name: 'SSAS', icon: 'fas fa-cube', color: '#0284c7' }
      ]
    },
    {
      name: 'Méthodologies & Architectures',
      description: 'Méthodologies de développement, architectures et outils.',
      icon: 'fas fa-sitemap',
      skills: [
        { name: 'API REST', icon: 'fas fa-exchange-alt', color: '#0284c7' },
        { name: 'MVC', icon: 'fas fa-layer-group', color: '#0284c7' },
        { name: 'Nwidart', icon: 'fas fa-cubes', color: '#0284c7' },
        { name: 'JWT', icon: 'fas fa-key', color: '#0284c7' },
        { name: 'UML', icon: 'fas fa-diagram-project', color: '#0284c7' },
        { name: 'Agile / Scrum', icon: 'fas fa-users', color: '#0284c7' },
        { name: 'Microservices', icon: 'fas fa-cubes', color: '#0284c7' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#0284c7' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#0284c7' }
      ]
    },
    {
      name: 'DevOps',
      description: "Outils de déploiement, CI/CD et documentation d'API.",
      icon: 'fas fa-infinity',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker', color: '#0284c7' },
        { name: 'GitLab CI/CD', icon: 'fab fa-gitlab', color: '#0284c7' },
        { name: 'GitHub Actions', icon: 'fab fa-github', color: '#0284c7' },
        { name: 'Swagger', icon: 'fas fa-file-code', color: '#0284c7' }
      ]
    },
    {
      name: "Systèmes d'exploitation",
      description: "Systèmes d'exploitation et serveurs.",
      icon: 'fas fa-desktop',
      skills: [
        { name: 'Linux (Ubuntu)', icon: 'fab fa-ubuntu', color: '#0284c7' },
        { name: 'Windows Server', icon: 'fab fa-windows', color: '#0284c7' }
      ]
    }
  ];

  otherProjects = [
    {
      title: 'MediFlow',
      description: "Prédiction intelligente du temps d'attente aux urgences",
      fullDescription: "Solution intelligente dédiée à l'optimisation des services d'urgences hospitalières, permettant de prédire le temps d'attente des patients et d'analyser les facteurs influençant les délais de prise en charge.",
      image: 'assets/images/mediflow.png',
      media: {
        type: 'video',
        url: 'assets/videos/pfademofinal.mp4',
        poster: 'assets/images/mediflow.png',
        alt: "Démonstration MediFlow - Prédiction temps d'attente aux urgences"
      },
      technologies: ['Python', 'TensorFlow', 'TabTransformer', 'LLaMA 3', 'FastAPI', 'Ionic Vue', 'Capacitor', 'Machine Learning', 'Deep Learning'],
      features: ["prédiction du temps d'attente", 'analyse des données hospitalières', 'système de recommandation intelligent', 'API de prédiction en temps réel', 'application web', 'application mobile', 'tableaux de bord interactifs'],
      githubUrl: 'https://github.com/sondes/mediflow'
    },
    {
      title: 'EduFlow',
      description: 'Application mobile intelligente de gestion des présences académiques',
      fullDescription: "Application mobile multiplateforme dédiée à la gestion intelligente des présences universitaires, intégrant la reconnaissance faciale, l'OCR, les QR Codes, les notifications en temps réel et la gestion des cours, notes et emplois du temps.",
      image: 'assets/images/home.PNG',
      technologies: ['Flutter', 'Dart', 'Google ML Kit', 'Firebase', 'Face Detection', 'OCR / Text Recognition', 'QR Code', 'Provider', 'Material Design 3'],
      features: ['reconnaissance faciale', 'scan OCR', 'QR Code', 'notifications temps réel', 'gestion des cours', 'gestion des notes', 'emplois du temps'],
      githubUrl: 'https://github.com/sondes/eduflow'
    },
    {
      title: 'ShopFlow',
      description: 'Plateforme e-commerce Full Stack',
      fullDescription: "Développement en binôme d'une plateforme e-commerce moderne permettant la gestion des utilisateurs, produits, paniers, commandes et stocks, avec authentification sécurisée et architecture multicouche.",
      image: 'assets/images/shopflow.png',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Spring Security', 'JWT', 'Hibernate', 'JUnit', 'Mockito', 'Swagger / OpenAPI'],
      features: ['authentification et gestion des rôles', 'catalogue produits', 'recherche et filtres', 'panier et coupons', 'gestion des commandes et du stock', 'tableaux de bord analytiques', 'API REST'],
      githubUrl: 'https://github.com/sondes/shopflow'
    },
    {
      title: 'Maison H&S',
      description: 'Application Web de Gestion de Restaurant',
      fullDescription: "Développement en binôme d'une application web Full Stack permettant aux clients de consulter les menus, gérer leur panier et passer des commandes, avec un espace administrateur dédié à la gestion du restaurant.",
      image: 'assets/images/maison.PNG',
      technologies: ['ASP.NET Core Web API', 'Blazor', 'C#', 'Entity Framework Core', 'SQL Server', 'JWT', 'AutoMapper', 'xUnit'],
      features: ['gestion des menus et catégories', 'panier et commandes', 'paiement', 'suivi des commandes', 'authentification et gestion des rôles', 'gestion des utilisateurs', 'espace administrateur'],
      githubUrl: 'https://github.com/sondes/maison-hs'
    },
    {
      title: 'Système décisionnel hospitalier',
      description: 'Business Intelligence & Analyse des données hospitalières',
      fullDescription: "Conception d'une solution décisionnelle permettant d'exploiter les données hospitalières, d'analyser les indicateurs clés et de faciliter la prise de décision grâce à des tableaux de bord interactifs.",
      image: 'assets/images/1778259871351.png',
      technologies: ['SQL Server', 'SSIS', 'SSAS', 'Power BI', 'Flask', 'Chart.js', 'DAX'],
      features: ['Data Warehouse', 'processus ETL', 'cube OLAP', 'analyse multidimensionnelle', 'visualisations interactives', 'tableaux de bord Power BI'],
      githubUrl: 'https://github.com/sondes/systeme-hospitalier'
    },
    {
      title: 'Event Planner',
      description: "Application Web de Gestion d'Événements",
      fullDescription: "Développement d'une application web Full Stack permettant de créer et gérer des événements, de suivre les inscriptions des participants et de gérer automatiquement les quotas.",
      image: 'assets/images/eventPlanner.png',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'SweetAlert', 'DataTables'],
      features: ['gestion des rôles', 'authentification', "gestion des événements", "inscriptions des participants", 'suivi des quotas', 'base de données relationnelle', 'interface interactive'],
      githubUrl: 'https://github.com/sondes/event-planner'
    }
  ];

  experiences = [
    {
      period: 'Juillet 2026 – Août 2026',
      title: 'Stagiaire en Développement Logiciel — Stage de perfectionnement',
      company: 'Finlogik Offshore Solutions',
      location: 'Sfax, Tunisie',
      description: "Conception et développement d'une plateforme web de motivation des employés permettant la gestion des activités, le suivi des participations, l'attribution des points, les notifications et la gestion des primes.",
      missions: [
        'Analyse des besoins fonctionnels et identification des fonctionnalités nécessaires à une plateforme de motivation des employés.',
        "Conception et développement d'une application web permettant de centraliser la gestion des activités et des participations.",
        'Développement des fonctionnalités CRUD pour la gestion des activités.',
        "Mise en place d'un système de participation aux activités et de validation par les responsables.",
        "Développement d'un mécanisme d'attribution et de suivi des points des employés.",
        'Implémentation de la gestion des primes, des récompenses et du suivi des paiements.',
        "Mise en place de l'authentification JWT et de la gestion des accès selon les rôles des utilisateurs.",
        'Intégration des notifications par e-mail pour informer les utilisateurs des événements importants.',
        'Développement de tableaux de bord et de statistiques pour le suivi des activités et des performances.',
        'Conception et gestion de la base de données relationnelle avec Entity Framework Core.',
        'Réalisation de tests fonctionnels pour vérifier le bon fonctionnement de l\'application.'
      ],
      technologies: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'JWT', 'MailKit', 'Bootstrap'],
      media: {
        type: 'image',
        url: 'assets/images/finlogik.png',
        alt: 'Finlogik - Plateforme de motivation des employés'
      }
    },
    {
      period: 'Juillet 2025 – Août 2025',
      title: 'Stagiaire Développeuse Web — Stage professionnel',
      company: 'Web Vue',
      location: 'Sfax, Tunisie',
      description: 'Développement de modules ERP dédiés à la gestion des projets et des contacts. Conception et implémentation des fonctionnalités CRUD avec intégration des relations entre les différents modules.',
      missions: [
        "Participation au développement d'un ERP destiné à faciliter la gestion des projets et des contacts.",
        'Analyse des besoins fonctionnels et identification des fonctionnalités nécessaires pour chaque module.',
        'Développement des fonctionnalités CRUD pour la gestion des projets et des contacts.',
        'Conception et développement des interfaces web avec Laravel, HTML, CSS et JavaScript.',
        'Intégration des interfaces utilisateur avec les fonctionnalités côté serveur développées sous Laravel.',
        "Mise en place des relations entre les projets et les contacts afin d'assurer la cohérence des données.",
        "Gestion de la persistance des données à l'aide de SQLite.",
        'Réalisation de tests fonctionnels pour vérifier le bon fonctionnement des modules développés.'
      ],
      technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      media: {
        type: 'video',
        url: 'assets/videos/demo.mp4',
        poster: 'assets/images/webvue-erp.jpg',
        alt: 'Démonstration des modules ERP - Web Vue'
      }
    },
    {
      period: 'Février 2024 – Mai 2024',
      title: "Stagiaire Développeuse Web — Stage de fin d'études",
      company: 'Sifast',
      location: 'Sfax, Tunisie',
      description: "Création d'un site e-commerce basé sur PrestaShop avec intégration d'un chatbot.",
      missions: [
        "Participation au développement d'un site e-commerce basé sur PrestaShop.",
        'Configuration et personnalisation de la boutique en ligne selon les besoins du projet.',
        'Utilisation de PHP pour intervenir sur les fonctionnalités côté serveur.',
        'Développement et amélioration des interactions côté client avec JavaScript et jQuery.',
        "Intégration d'un chatbot afin de faciliter l'interaction avec les utilisateurs.",
        "Personnalisation des fonctionnalités de la plateforme pour améliorer l'expérience utilisateur.",
        'Réalisation de tests fonctionnels pour vérifier le bon fonctionnement des fonctionnalités intégrées.'
      ],
      technologies: ['PHP', 'JavaScript', 'jQuery', 'PrestaShop'],
      media: {
        type: 'video',
        url: 'assets/videos/pfesifast.webm',
        poster: 'assets/images/sifast-ecommerce.jpg',
        alt: 'Démonstration du site e-commerce - Sifast'
      }
    },
    {
      period: 'Juillet 2023 – Août 2023',
      title: "Stagiaire en Informatique Décisionnelle — Stage de fin d'année",
      company: 'IBS',
      location: 'Sfax, Tunisie',
      description: "Mise en place d'un système décisionnel destiné à accompagner l'analyse des données d'une entreprise commerciale.",
      missions: [
        "Participation à la mise en place d'un système décisionnel destiné à faciliter l'analyse des données d'une entreprise commerciale.",
        "Analyse des données commerciales afin d'identifier les indicateurs pertinents pour le suivi de l'activité.",
        "Préparation et organisation des données destinées à l'analyse décisionnelle.",
        "Création de mesures et d'indicateurs calculés à l'aide de DAX.",
        "Exploitation des données pour faciliter l'analyse des performances commerciales.",
        'Contribution à la visualisation des indicateurs et à la création de tableaux de bord décisionnels.',
        "Participation à la production d'informations utiles au suivi de l'activité et à la prise de décision."
      ],
      technologies: ['DAX', 'Power BI'],
      media: {
        type: 'image',
        url: 'assets/images/porteflio.PNG',
        alt: 'Dashboard Business Intelligence - IBS'
      }
    }
  ];

  education = [
    {
      period: 'Septembre 2024 – présent',
      degree: 'Cycle Ingénieur en Génie Informatique',
      school: 'Institut International de Technologie de Sfax (IIT)',
      location: 'Sfax, Tunisie',
      description: 'Formation en Génie Informatique, avec une spécialisation en Génie Logiciel et Informatique Décisionnelle.'
    },
    {
      period: 'Septembre 2021 – Juin 2024',
      degree: 'Licence en Sciences Informatiques',
      school: "Institut Supérieur de l'Informatique et Multimédia de Sfax",
      location: 'Sfax, Tunisie',
      description: 'Formation fondamentale en informatique et développement logiciel.'
    },
    {
      period: 'Septembre 2016 – Juillet 2021',
      degree: 'Baccalauréat – Section Sciences Expérimentales',
      school: 'Lycée 15 Novembre 1955',
      location: 'Sfax, Tunisie',
      description: "Diplôme de fin d'études secondaires avec mention."
    }
  ];

  certifications = [
    { name: 'Microsoft Azure AI-900', issuer: 'Microsoft', icon: 'fab fa-microsoft' },
    { name: 'Generative AI Professional', issuer: 'Oracle Cloud Infrastructure 2025', icon: 'fas fa-cloud' },
    { name: 'CCNA 1 & 2', issuer: 'Cisco Networking Academy', icon: 'fas fa-network-wired' },
    { name: 'HTML5, CSS3, JavaScript', issuer: 'Udemy', icon: 'fab fa-html5' },
    { name: 'SQL Database', issuer: 'Udemy', icon: 'fas fa-database' }
  ];

  languages = [
    { name: 'Arabe', level: 'Langue maternelle', score: 5 },
    { name: 'Français', level: 'Niveau professionnel', score: 4 },
    { name: 'Anglais', level: 'Niveau intermédiaire — B2 TOEIC', score: 3 }
  ];

  softSkills = [
    "Esprit d'analyse",
    'Résolution de problèmes',
    'Travail en équipe',
    'Communication',
    'Adaptabilité',
    'Autonomie'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeContactForm();
  }

  private initializeContactForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 100;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['accueil', 'apropos', 'competences', 'projets', 'contact'];
    const scrollPosition = window.pageYOffset + 150;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.menuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  switchTimeline(timeline: 'experience' | 'education'): void {
    this.activeTimeline = timeline;
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/800x400/e2e8f0/64748b?text=Image+non+disponible';
  }

  onVideoError(event: any): void {
    const videoElement = event.target;
    const posterUrl = videoElement.getAttribute('poster');
    if (posterUrl) {
      const imgElement = document.createElement('img');
      imgElement.src = posterUrl;
      imgElement.alt = 'Aperçu vidéo non disponible';
      imgElement.style.width = '100%';
      imgElement.style.height = '100%';
      imgElement.style.objectFit = 'cover';
      videoElement.parentNode.replaceChild(imgElement, videoElement);
    }
  }

  getSkillLevelText(level: number): string {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Avancé';
    if (level >= 70) return 'Intermédiaire';
    return 'Débutant';
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/files/cv_Sondes_AFFES.pdf';
    link.download = 'cv_Sondes_AFFES.pdf';
    link.click();
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
        this.contactForm.reset();
      } catch (error) {
        alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}


