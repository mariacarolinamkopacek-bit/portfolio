/* ==========================================
   translations.js
   All user-facing text in PT and EN.
   NEVER hardcode text directly in index.html —
   always add it here and reference via data-i18n.
   ========================================== */

const translations = {

  /* ---- PORTUGUÊS (padrão) ---- */
  pt: {
    // Navegação
    nav_about:        "Sobre",
    nav_projects:     "Projetos",
    nav_skills:       "Habilidades",
    nav_achievements: "Conquistas",
    nav_contact:      "Contato",

    // Hero
    hero_name:     "Maria Carolina Kopacek",
    hero_title:    "Engenheira Mecânica",
    hero_subtitle: "Inventora &amp; Maker",
    hero_cta:      "Ver meu trabalho",

    // Sobre
    about_heading:   "Sobre",
    about_bio:       "Engenheira Mecânica formada pela UFRGS, com forte interesse em projeto mecânico e automobilismo. Trabalhei com desenvolvimento de suspensão para veículos de competição Fórmula SAE, projetos na área de óleo e gás, segurança do trabalho e fabricação de instrumentos musicais. Sou apaixonada por resolver problemas das mais diversas naturezas — da análise de elementos finitos à luthieria.",
    about_bio2:      "Além da engenharia, construo guitarras e baixos do zero, faço trabalhos em pirografia, desenhos realistas a lápis e projetos de marcenaria.",
    about_available: "Disponível para projetos freelance",

    // Projetos
    projects_heading:   "Projetos",
    filter_all:         "Todos",
    filter_engineering: "Engenharia",
    filter_maker:       "Maker",
    filter_motorsport:  "Motorsport",
    cat_engineering:    "Engenharia",
    cat_maker:          "Maker",
    cat_motorsport:     "Motorsport",
    card_read_more:     "Ver projeto →",

    proj_sae_title:       "Suspensão Fórmula SAE — RS Racing UFRGS",
    proj_sae_desc:        "Desenvolvimento completo de geometria de suspensão, usinagem de manga em alumínio 7075-T6 e liderança da equipe. 7º lugar nacional em 2023.",
    proj_kll_title:       "Simulações de Veículo Completo — KLL SAF Holland",
    proj_kll_desc:        "Geometrias de suspensão para caminhões e ônibus. Análise de elementos finitos e fadiga com documentação Fraunhofer-Gesellschaft.",
    proj_simeros_title:   "End Fittings para Dutos Submarinos — Simeros",
    proj_simeros_desc:    "Projeto completo e dimensionamento de conectores para dutos submarinos. Análise numérica com Abaqus CAE.",
    proj_luthieria_title: "Luthieria — Guitarras e Baixos Customizados",
    proj_luthieria_desc:  "Construção de instrumentos elétricos a partir de madeira bruta. Customizações com pirografia e técnica japonesa shou sugi ban.",
    proj_arte_title:      "Arte Manual — Pirografia e Retratos a Lápis",
    proj_arte_desc:       "Retratos realistas a lápis e pirografia sobre madeira, incluindo a técnica shou sugi ban.",
    proj_rsracing_title:  "RS Racing UFRGS — Fórmula SAE",
    proj_rsracing_desc:   "5 anos na equipe: liderança de suspensão, projeto de peças usinadas, aquisição de dados e competições nacionais.",

    // Habilidades
    skills_heading:   "Habilidades",
    skills_software:  "Software",
    skills_technical: "Técnico",
    skills_languages: "Idiomas",

    skill_suspension:    "Geometria de Suspensão",
    skill_fea:           "Análise de Elementos Finitos",
    skill_fatigue:       "Análise de Fadiga",
    skill_dynamics:      "Dinâmica Veicular",
    skill_manufacturing: "Desenhos de Fabricação",
    skill_data:          "Aquisição de Dados",
    skill_luthiery:      "Luthieria",
    skill_pyrography:    "Pirografia",
    skill_woodwork:      "Marcenaria",

    lang_pt:               "Português",
    lang_en:               "Inglês",
    lang_de:               "Alemão",
    lang_cs:               "Tcheco",
    lang_native:           "Nativo",
    lang_advanced:         "Avançado",
    lang_pre_intermediate: "Pré-Intermediário",
    lang_beginner:         "Iniciante",

    // Conquistas
    achievements_heading: "Conquistas",

    ach_sae_title:       "7º Lugar Nacional — Fórmula SAE Brasil",
    ach_sae_desc:        "Equipe RS Racing UFRGS. Pilota de Skidpad em 2022.",
    ach_fia_title:       "FIA Girls on Track — Engenheiras e Mecânicas",
    ach_fia_desc:        "Programa da FIA no Autódromo de Tarumã, com a Copa Truck.",
    ach_segers_title:    "Curso Motorsport Performance Engineering",
    ach_segers_desc:     "Ministrado por Jorge Segers, com visita aos boxes da Porsche Cup em Interlagos.",
    ach_teatro_title:    "Guitarrista e Vocalista — Teatro Bruno Kiefer",
    ach_teatro_desc:     "Grupo Peccátu, em cartaz por mais de um mês na Casa de Cultura Mário Quintana.",
    ach_militar_title:   "Sub-Tenente e Chefe de Percussão",
    ach_militar_desc:    "Banda do Colégio Militar de Porto Alegre.",
    ach_factories_title: "Visitas Técnicas Internacionais",
    ach_factories_desc:  "Lamborghini (Itália), BMW (Alemanha), Scania (Brasil) e Canton Fair (China).",

    // Contato
    contact_heading:      "Contato",
    contact_sub:          "Tem um projeto em mente? Vamos conversar.",
    contact_email_btn:    "Enviar e-mail",
    contact_whatsapp_btn: "WhatsApp",
    contact_availability: "Disponível para projetos freelance e parcerias técnicas",

    // Footer
    footer_credit: "Projetado e desenvolvido por Maria Carolina Kopacek",
  },


  /* ---- ENGLISH ---- */
  en: {
    // Navigation
    nav_about:        "About",
    nav_projects:     "Projects",
    nav_skills:       "Skills",
    nav_achievements: "Achievements",
    nav_contact:      "Contact",

    // Hero
    hero_name:     "Maria Carolina Kopacek",
    hero_title:    "Mechanical Engineer",
    hero_subtitle: "Inventor &amp; Maker",
    hero_cta:      "See my work",

    // About
    about_heading:   "About",
    about_bio:       "Mechanical Engineer graduated from UFRGS with a strong interest in mechanical design and motorsport. I have worked on Formula SAE competition vehicle suspension, oil and gas product development, occupational safety, and musical instrument manufacturing. I'm passionate about solving problems across widely different fields — from finite element analysis to luthiery.",
    about_bio2:      "Beyond engineering, I build guitars and basses from raw wood, create pyrographic artwork, draw realistic pencil portraits, and design woodworking projects.",
    about_available: "Available for freelance projects",

    // Projects
    projects_heading:   "Projects",
    filter_all:         "All",
    filter_engineering: "Engineering",
    filter_maker:       "Maker",
    filter_motorsport:  "Motorsport",
    cat_engineering:    "Engineering",
    cat_maker:          "Maker",
    cat_motorsport:     "Motorsport",
    card_read_more:     "View project →",

    proj_sae_title:       "Formula SAE Suspension — RS Racing UFRGS",
    proj_sae_desc:        "Full suspension geometry development, machined aluminum 7075-T6 knuckles, and team leadership. 7th place nationally in 2023.",
    proj_kll_title:       "Full Vehicle Simulations — KLL SAF Holland",
    proj_kll_desc:        "Suspension geometry for trucks and buses. Finite element and fatigue analysis using Fraunhofer-Gesellschaft documentation.",
    proj_simeros_title:   "Subsea Pipeline End Fittings — Simeros",
    proj_simeros_desc:    "Full design and dimensioning of connectors for subsea pipelines. Numerical analysis with Abaqus CAE.",
    proj_luthieria_title: "Luthiery — Custom Guitars and Basses",
    proj_luthieria_desc:  "Complete manufacture of electric instruments from raw wood. Customization with pyrographic designs and Japanese shou sugi ban technique.",
    proj_arte_title:      "Manual Art — Pyrography and Pencil Portraits",
    proj_arte_desc:       "Realistic pencil portraits and pyrographic work on wood, including the shou sugi ban technique.",
    proj_rsracing_title:  "RS Racing UFRGS — Formula SAE",
    proj_rsracing_desc:   "5 years on the competition team: suspension leadership, machined part design, data acquisition, and national competitions.",

    // Skills
    skills_heading:   "Skills",
    skills_software:  "Software",
    skills_technical: "Technical",
    skills_languages: "Languages",

    skill_suspension:    "Suspension Geometry",
    skill_fea:           "Finite Element Analysis",
    skill_fatigue:       "Fatigue Analysis",
    skill_dynamics:      "Vehicle Dynamics",
    skill_manufacturing: "Manufacturing Drawings",
    skill_data:          "Data Acquisition",
    skill_luthiery:      "Luthiery",
    skill_pyrography:    "Pyrography",
    skill_woodwork:      "Woodworking",

    lang_pt:               "Portuguese",
    lang_en:               "English",
    lang_de:               "German",
    lang_cs:               "Czech",
    lang_native:           "Native",
    lang_advanced:         "Advanced",
    lang_pre_intermediate: "Pre-Intermediate",
    lang_beginner:         "Beginner",

    // Achievements
    achievements_heading: "Achievements",

    ach_sae_title:       "7th Place Nationally — Formula SAE Brazil",
    ach_sae_desc:        "RS Racing UFRGS team. Skidpad Driver in 2022.",
    ach_fia_title:       "FIA Girls on Track — Engineers and Mechanics",
    ach_fia_desc:        "FIA program at Tarumã Racetrack, with Copa Truck.",
    ach_segers_title:    "Motorsport Performance Engineering Course",
    ach_segers_desc:     "Led by Jorge Segers, with a visit to the Porsche Cup paddock at Interlagos.",
    ach_teatro_title:    "Guitarist and Vocalist — Bruno Kiefer Theater",
    ach_teatro_desc:     "Theater group Peccátu, performed for over a month at Casa de Cultura Mário Quintana.",
    ach_militar_title:   "Second Lieutenant and Percussion Leader",
    ach_militar_desc:    "Band of the Porto Alegre Military School.",
    ach_factories_title: "International Technical Visits",
    ach_factories_desc:  "Lamborghini (Italy), BMW (Germany), Scania (Brazil), and Canton Fair (China).",

    // Contact
    contact_heading:      "Contact",
    contact_sub:          "Have a project in mind? Let's talk.",
    contact_email_btn:    "Send email",
    contact_whatsapp_btn: "WhatsApp",
    contact_availability: "Available for freelance projects and technical partnerships",

    // Footer
    footer_credit: "Designed and built by Maria Carolina Kopacek",
  }
};
