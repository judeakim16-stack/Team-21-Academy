/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WeekLesson {
  week: number;
  titleEN: string;
  titleFR: string;
  summaryEN: string;
  summaryFR: string;
  contentEN: string;
  contentFR: string;
  objectivesEN: string[];
  objectivesFR: string[];
  excerciseEN: string;
  excerciseFR: string;
  quotes: {
    text: string;
    author: string;
  };
}

export const curriculumLessons: WeekLesson[] = [
  {
    week: 1,
    titleEN: "Foundations of Servant Leadership",
    titleFR: "Les Fondements du Leadership Serviteur",
    summaryEN: "Introduction to the core principles of leading by serving others first, shifting focus from control to empowerment.",
    summaryFR: "Introduction aux principes fondamentaux du leadership par le service, passant du contrôle à la responsabilisation.",
    objectivesEN: [
      "Understand the key difference between traditional hierarchical leadership and servant leadership.",
      "Identify the 10 critical characteristics defined by Robert K. Greenleaf.",
      "Begin applying active stewardship in daily interactions."
    ],
    objectivesFR: [
      "Comprendre la différence clé entre le leadership hiérarchique traditionnel et le leadership serviteur.",
      "Identifier les 10 caractéristiques critiques définies par Robert K. Greenleaf.",
      "Commencer à appliquer une gestion responsable (stewardship) au quotidien."
    ],
    contentEN: `Servant leadership is a philosophy and set of practices that enriches the lives of individuals, builds better organizations and ultimately creates a more just and caring world. 

Unlike traditional leadership, which focuses on the accumulation and exercise of power by those at the 'top of the pyramid', servant leadership shifts the focus entirely to others. The servant-leader is servant first. It begins with the natural feeling that one wants to serve, to serve first. Then, conscious choice brings one to aspire to lead.

The 10 key principles we explore are:
1. Listening: A deep commitment to listening intently to others.
2. Empathy: Striving to understand and empathize with others.
3. Healing: Recognizing the potential to heal oneself and others.
4. Awareness: General awareness and self-awareness are critical.
5. Persuasion: Relying on persuasion rather than positional authority.
6. Conceptualization: Dream great dreams and look beyond day-to-day realities.
7. Foresight: Understanding lessons from the past, realities of the present, and consequences of decisions.
8. Stewardship: Holding local and global communities in trust for the greater good.
9. Commitment to the growth of people: Treating employees as unique individuals.
10. Building community: Recreating local communities within organizations.`,
    contentFR: `Le leadership serviteur est une philosophie et un ensemble de pratiques qui enrichissent la vie des individus, construisent de meilleures organisations et créent finalement un monde plus juste et plus bienveillant.

Contrairement au leadership traditionnel, axé sur l'accumulation et l'exercice du pouvoir par ceux qui se trouvent au « sommet de la pyramide », le leadership serviteur déplace entièrement l'attention vers les autres. Le leader-serviteur est d'abord serviteur. Cela commence par le sentiment naturel que l'on veut servir, servir d'abord. Ensuite, un choix conscient amène à aspirer à diriger.

Les 10 principes clés que nous explorons sont :
1. L'écoute : Un engagement profond à écouter attentivement les autres.
2. L'empathie : S'efforcer de comprendre et de compatir avec autrui.
3. La guérison : Reconnaître le potentiel de guérison en soi et chez les autres.
4. La conscience : La conscience générale et la conscience de soi sont cruciales.
5. La persuasion : S'appuyer sur la persuasion plutôt que sur l'autorité hiérarchique.
6. La conceptualisation : Rêver de grands rêves et regarder au-delà des réalités quotidiennes.
7. La clairvoyance : Comprendre les leçons du passé, les réalités du présent et les conséquences des décisions.
8. La gestion responsable (Stewardship) : Prendre soin des communautés locales et globales pour le bien commun.
9. L'engagement envers la croissance des personnes : Traiter les collaborateurs comme des individus uniques.
10. Construire la communauté : Recréer des communautés locales au sein des organisations.`,
    excerciseEN: "Keep a daily journal logging how many times you sought to control a situation versus how many times you actively chose to support and empower someone else.",
    excerciseFR: "Tenez un journal quotidien où vous notez combien de fois vous avez cherché à contrôler une situation contre combien de fois vous avez choisi de soutenir et responsabiliser autrui.",
    quotes: {
      text: "The servant-leader is servant first... It begins with the natural feeling that one wants to serve, to serve first.",
      author: "Robert K. Greenleaf"
    }
  },
  {
    week: 2,
    titleEN: "Active Listening & Deep Empathy",
    titleFR: "Écoute Active & Empathie Profonde",
    summaryEN: "Developing the communication habit of listening to understand, rather than listening to reply.",
    summaryFR: "Développer l'habitude de communication qui consiste à écouter pour comprendre, plutôt qu'écouter pour répondre.",
    objectivesEN: [
      "Master the technique of summarizing and reflecting back arguments.",
      "Observe non-verbal cues in professional environments.",
      "Eliminate toxic conversational disruptions and interruptions."
    ],
    objectivesFR: [
      "Maîtriser la technique de synthèse et de restitution des arguments.",
      "Observer les signaux non verbaux dans les environnements professionnels.",
      "Éliminer les interruptions et perturbations verbales toxiques."
    ],
    contentEN: `Communication is the lifeblood of leadership. In servant leadership, listening is the primary mechanism. Active listening requires focused attention. It is not passive silence; it is an active, seeking process.

When you practice active listening, you suspend judgment. You do not think about your counter-argument while the other person is speaking. Instead, you focus on their words, tone, and body language. 

To demonstrate empathy, validate the speaker's emotional state. Saying: 'It sounds like you felt really overwhelmed when that project deadline shifted' connects deeply. It affirms the human being behind the employee, fostering trust and psychological safety.`,
    contentFR: `La communication est le moteur du leadership. Dans le leadership serviteur, l'écoute en est le mécanisme principal. L'écoute active exige une attention concentrée. Ce n'est pas un silence passif, c'est un processus proactif de recherche.

Lorsque vous pratiquez l'écoute active, vous suspendez votre jugement. Vous ne pensez pas à votre contre-argument pendant que l'autre personne parle. Vous vous concentrez sur ses mots, son ton et son langage corporel.

Pour faire preuve d'empathie, validez l'état émotionnel de l'interlocuteur. Dire : « On dirait que vous vous êtes senti submergé lorsque l'échéance du projet a changé » crée un lien profond. Cela affirme l'être humain derrière le collaborateur, favorisant la confiance et la sécurité psychologique.`,
    excerciseEN: "In your next three discussions, enforce a 3-second pause after the other person finishes talking before you formulate or utter your reply.",
    excerciseFR: "Lors de vos trois prochaines discussions, imposez-vous une pause de 3 secondes après que votre interlocuteur a fini de parler avant de formuler ou prononcer votre réponse.",
    quotes: {
      text: "Most people do not listen with the intent to understand; they listen with the intent to reply.",
      author: "Stephen R. Covey"
    }
  },
  {
    week: 3,
    titleEN: "Emotional Intelligence (EQ) in Leadership",
    titleFR: "L'Intelligence Émotionnelle (QE) dans le Leadership",
    summaryEN: "The role of self-awareness, emotional regulation, and social synergy in leading robust teams.",
    summaryFR: "Le rôle de la conscience de soi, de la régulation émotionnelle et de la synergie sociale dans la gestion d'équipes solides.",
    objectivesEN: [
      "Map out personal emotional triggers.",
      "Create mechanisms for emotional self-regulation during high-stress situations.",
      "Foster social awareness and relational empathy with cross-functional partners."
    ],
    objectivesFR: [
      "Cartographier ses propres déclencheurs émotionnels.",
      "Créer des mécanismes d'autorégulation émotionnelle en situation de fort stress.",
      "Développer la conscience sociale et l'empathie relationnelle avec des partenaires transversaux."
    ],
    contentEN: `Emotional intelligence (EQ) is the capacity to recognize our own feelings and those of others, for motivating ourselves, and for managing emotions well in ourselves and in our relationships. 

According to Daniel Goleman, EQ consists of five components:
1. Self-awareness: Knowing one's strengths, weaknesses, drives, values, and impact on others.
2. Self-regulation: Controlling or redirecting disruptive impulses and moods.
3. Motivation: A passion to work for reasons that go beyond money or status.
4. Empathy: Understanding other people's emotional makeup.
5. Social skill: Proficiency in managing relationships and building networks.

A leader with high EQ maintains composure during storms, preventing knee-jerk panic from destabilizing the organization.`,
    contentFR: `L'intelligence émotionnelle (QE) est la capacité de reconnaître nos propres sentiments et ceux des autres, de nous motiver et de bien gérer les émotions en nous-mêmes et dans nos relations.

Selon Daniel Goleman, le QE comprend cinq composants :
1. La conscience de soi : Connaître ses forces, ses faiblesses, ses moteurs, ses valeurs et son impact sur les autres.
2. L'autorégulation : Contrôler ou rediriger les impulsions et les humeurs perturbatrices.
3. La motivation : Une passion pour le travail qui dépasse l'argent ou le statut.
4. L'empathie : Comprendre la sensibilité émotionnelle des autres.
5. Les compétences sociales : Maîtrise de la gestion des relations et de l'établissement de réseaux.

Un leader doté d'un QE élevé garde son calme pendant les tempêtes, évitant ainsi qu'une panique irréfléchie ne déstabilise l'organisation.`,
    excerciseEN: "In a stressful moment, practice the 'STOP' method: Stop, Take a breath, Observe your internal feeling, and Proceed mindfully.",
    excerciseFR: "Dans un moment stressant, appliquez la méthode « STOP » : S'arrêter, Prendre une respiration, Observer son sentiment interne, et Poursuivre en pleine conscience.",
    quotes: {
      text: "What anxiety does is it robs us of our conceptual capability, and anxiety is contagious.",
      author: "Dr. Edwin Friedman"
    }
  },
  {
    week: 4,
    titleEN: "Vision & Strategic Goal Setting",
    titleFR: "Vision & Fixation d'Objectifs Stratégiques",
    summaryEN: "Crafting a compelling vision of the future and decomposing it into actionable, practical targets.",
    summaryFR: "Élaborer une vision d'avenir inspirante et la décomposer en objectifs concrets et actionnables.",
    objectivesEN: [
      "Differentiate between mission, vision, and operational metrics.",
      "Draft a servant-led, patient, multi-year plan for your community/business.",
      "Use OKRs (Objectives and Key Results) without sacrificing human values."
    ],
    objectivesFR: [
      "Différencier la mission, la vision et les indicateurs opérationnels.",
      "Rédiger un plan pluriannuel axé sur le service pour votre communauté/entreprise.",
      "Utiliser les OKR (Objectifs et Résultats Clés) sans sacrifier les valeurs humaines."
    ],
    contentEN: `Great leaders inspire action by showing people a bigger 'Why'. Setting goals is not just about drawing up performance matrices; it is about clarifying where the team is going, why the destination matters, and how every member contributes uniquely.

For a servant-leader, strategic planning is characterized by foresight. This means realizing that planning is not a purely mechanistic layout, but are guidelines that must leave room for individual adaptation, learning, and systemic balance, ensuring long-term welfare.`,
    contentFR: `Les grands leaders inspirent l'action en montrant aux gens un « Pourquoi » plus grand. Fixer des objectifs ne se limite pas à concevoir des tableaux de bord de performance ; il s'agit de clarifier où l'équipe va, pourquoi la destination importe et comment chaque membre y contribue de manière unique.

Pour un leader-serviteur, la planification stratégique est caractérisée par la clairvoyance. Cela implique de réaliser que la planification n'est pas un schéma purement mécanique, mais des lignes directrices qui doivent laisser de la place à l'adaptation individuelle, à l'apprentissage et à l'équilibre systémique.`,
    excerciseEN: "Draft a one-sentence personal leadership vision explaining who you serve, how you serve them, and what ultimate change you hope to inspire.",
    excerciseFR: "Rédigez une vision personnelle de leadership en une phrase, expliquant qui vous servez, comment vous les servez et quel changement ultime vous espérez inspirer.",
    quotes: {
      text: "Leadership is the capacity to translate vision into reality.",
      author: "Warren Bennis"
    }
  },
  {
    week: 5,
    titleEN: "Psychological Safety & Safe Environments",
    titleFR: "Sécurité Psychologique & Environnements Sûrs",
    summaryEN: "Fostering environments where vulnerability is celebrated and mistakes are treated as learning assets.",
    summaryFR: "Favoriser des environnements où la vulnérabilité est encouragée et où les erreurs sont traitées comme des sources d'apprentissage.",
    objectivesEN: [
      "Understand Amy Edmondson's principles of psychological safety.",
      "Execute safe post-mortem project reviews without individual blame.",
      "Encourage dissenting viewpoints during board/team reviews."
    ],
    objectivesFR: [
      "Comprendre les principes de sécurité psychologique d'Amy Edmondson.",
      "Réaliser des revues de projet post-mortem positives, sans blâmer les individus.",
      "Encourager les points de vue divergents lors des réunions d'équipe."
    ],
    contentEN: `Psychological safety is the belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes. In a database of high-performing teams at Google (Project Aristotle), psychological safety sat firmly as the absolute foundation of success.

When employees feel safe, they take calculated, innovative risks. They speak up when they notice errors before those errors turn into catastrophes. They admit when they are struggling, which prevents quiet burnout and strategic failures.`,
    contentFR: `La sécurité psychologique est la conviction que l'on ne sera ni puni ni humilié pour avoir exprimé des idées, des questions, des préoccupations ou des erreurs. Dans l'étude des équipes performantes de Google (Projet Aristote), la sécurité psychologique s'est révélée être la base absolue du succès.

Lorsque les collaborateurs se sentent en sécurité, ils prennent des risques calculés et innovants. Ils s'expriment lorsqu'ils constatent des erreurs avant qu'elles ne se transforment en catastrophes. Ils admettent leurs difficultés, ce qui prévient l'épuisement professionnel silencieux.`,
    excerciseEN: "At your next meeting, explicitly invite the quietest member to share their thoughts first, or state a personal mistake first to break tribal defensiveness.",
    excerciseFR: "Lors de votre prochaine réunion, invitez explicitement le membre le plus silencieux à exprimer son avis en premier, ou partagez vous-même une erreur commise.",
    quotes: {
      text: "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
      author: "Brené Brown"
    }
  },
  {
    week: 6,
    titleEN: "Strategic Intuition & Foresight",
    titleFR: "Intuition Stratégique & Clairvoyance",
    summaryEN: "Harnessing historic patterns, systems thinking, and structural signals to navigate volatile futures.",
    summaryFR: "Exploiter les schémas historiques, la pensée systémique et les signaux structurels pour naviguer dans un avenir instable.",
    objectivesEN: [
      "Analyze historical organizational crises to detect recurring patterns.",
      "Differentiate between immediate tactical reaction and strategic foresight.",
      "Create robust backup plans for major strategic objectives."
    ],
    objectivesFR: [
      "Analyser les crises organisationnelles historiques pour détecter des schémas récurrents.",
      "Différencier la réaction tactique immédiate de la clairvoyance stratégique.",
      "Créer des plans de secours solides pour les objectifs stratégiques majeurs."
    ],
    contentEN: `Foresight is the lead that the leader has. The moment a leader loses that lead and begins reacting to events, they are a leader in name only. Strategic intuition is not a magical crystal ball; it is the synthesis of historic variables combined with present realities.

True foresight understands how decisions cascade through complex human networks. It evaluates environmental, mental, and financial costs five steps ahead, preventing current shortcuts from becoming future traps.`,
    contentFR: `La clairvoyance est l'avance dont dispose le leader. Dès qu'un leader perd cette avance et commence à réagir aux événements, il n'est plus leader que de nom. L'intuition stratégique n'est pas une boule de cristal magique ; c'est la synthèse de variables historiques combinées aux réalités du présent.

La véritable clairvoyance comprend comment les décisions se répercutent à travers des réseaux humains complexes. Elle évalue les coûts environnementaux, mentaux et financiers avec cinq étapes d'avance.`,
    excerciseEN: "Identify a major upcoming decision of your team. Map out its secondary and tertiary effects on paper across three distinct timelines: 1 month, 1 year, 5 years.",
    excerciseFR: "Identifiez une décision majeure à venir de l'équipe. Cartographiez ses effets secondaires et tertiaires à 1 mois, 1 an, et 5 ans.",
    quotes: {
      text: "Foresight is the lead that the leader has. If they lose this lead, they are leadership-deficient.",
      author: "Robert K. Greenleaf"
    }
  },
  {
    week: 7,
    titleEN: "Conflict Resolution & Mindful Mediation",
    titleFR: "Résolution des Conflits & Médiation Consciente",
    summaryEN: "Navigating disagreements constructive-first, preserving human respect and team unity through collaborative mediation.",
    summaryFR: "Naviguer dans les désaccords de manière constructive, en préservant le respect humain et la cohésion d'équipe.",
    objectivesEN: [
      "Identify the five conflict handling modes of Thomas-Kilmann.",
      "Establish safe structures for mediating emotional disputes between staff members.",
      "Transform high-tension arguments into collaborative puzzle-solving exercises."
    ],
    objectivesFR: [
      "Identifier les cinq modes de gestion des conflits de Thomas-Kilmann.",
      "Mettre en place des structures de médiation saines pour les différends émotionnels entre collaborateurs.",
      "Transformer les arguments à haute tension en exercices de résolution collective de problèmes."
    ],
    contentEN: `Conflict is of itself not toxic; it is the indicator that diversity of thought is present. Toxic conflict arises when disputes drift from ideas into personal character strikes.

To resolve conflict, a servant-leader holds the space. They listen to all sides without bias, search for the underlying motivations, and help parties land on a shared, mutually respectful path forward.`,
    contentFR: `Le conflit n'est pas toxique en soi ; c'est l'indicateur de la présence d'une diversité de pensées. Le conflit toxique survient lorsque les différends passent des idées aux attaques personnelles.

Pour résoudre un conflit, le leader-serviteur préserve l'espace de parole. Il écoute toutes les parties de manière impartiale, cherche les motivations profondes et aide à trouver un chemin commun respectable.`,
    excerciseEN: "In your next disagreement, instead of defending your argument, ask: 'Can you help me understand what underlying worry is driving your concern?'",
    excerciseFR: "Lors de votre prochain désaccord, plutôt que de défendre votre idée, demandez : « Pouvez-vous m'aider à comprendre quelle inquiétude profonde motive vos craintes ? »",
    quotes: {
      text: "Peace is not the absence of conflict, but the ability to cope with it.",
      author: "Mahatma Gandhi"
    }
  },
  {
    week: 8,
    titleEN: "The Might of Humility in Management",
    titleFR: "La Force de l'Humilité dans le Management",
    summaryEN: "The quiet power of relinquishing personal ego to spotlight and empower team efforts.",
    summaryFR: "La force tranquille d'abandonner l'ego personnel pour mettre en lumière et dynamiser les efforts d'équipe.",
    objectivesEN: [
      "Spot and actively eliminate personal defensive reactions to constructive criticism.",
      "Give public praise and credit where credit is due while absorbing failures.",
      "Create mechanisms for transparent peer audits."
    ],
    objectivesFR: [
      "Repérer et éliminer activement les réactions défensives face aux critiques constructives.",
      "Attribuer publiquement les mérites aux équipes tout en assumant personnellement les échecs.",
      "Créer des mécanismes d'évaluations transparentes par les pairs."
    ],
    contentEN: `Humility is not feeling meek or having low self-esteem; it is knowing your strengths and weaknesses objectively, and focusing on others' capability. Classic leaders seek credit; humble leaders seek impact.

By stepping back, the humble leader lets the team step into their potential, which prevents bottle-necking organizational growth through a single person's micromanagement or egotistic choices.`,
    contentFR: `L'humilité n'est pas de la soumission ou une faible estime de soi ; c'est l'évaluation objective de ses propres forces et faiblesses, et la focalisation sur la capacité des autres. Les leaders classiques cherchent la gloire ; les leaders humbles cherchent l'impact.

En s'effaçant, le leader humble permet à l'équipe de se déployer pleinement.`,
    excerciseEN: "Write a short thank-you note highlighting a specific team member’s quiet but essential contribution that often goes unnoticed by senior leaders.",
    excerciseFR: "Écrivez un court mot de remerciement soulignant la contribution discrète mais essentielle d'un membre de l'équipe qui passe souvent inaperçue.",
    quotes: {
      text: "Humility is not thinking less of yourself, it's thinking of yourself less.",
      author: "C.S. Lewis"
    }
  },
  {
    week: 9,
    titleEN: "Coaching Leadership Style & Questioning Techniques",
    titleFR: "Le Style de Leadership Coach & Techniques de Questionnement",
    summaryEN: "Guiding employees to find answers themselves rather than dictating solutions directly.",
    summaryFR: "Guider les collaborateurs pour qu'ils trouvent eux-mêmes des réponses plutôt que d'imposer directement des solutions.",
    objectivesEN: [
      "Deploy the GROW coaching model (Goal, Reality, Options, Will).",
      "Draft open-ended questions that trigger critical thinking.",
      "Resist the immediate urge to solve other people's immediate dilemmas."
    ],
    objectivesFR: [
      "Déployer le modèle de coaching GROW (Objectif, Réalité, Options, Volonté).",
      "Élaborer des questions ouvertes qui déclenchent la pensée critique.",
      "Résister à l'envie immédiate de résoudre les dilemmes des autres à leur place."
    ],
    contentEN: `Giving solutions is easy but transient. Giving solutions creates dependency on you. Coaching leadership builds individual autonomy. Rather than dictating actions, you ask powerful, non-threatening, open questions that prompt the employee to evaluate their own options and own the outcome.`,
    contentFR: `Donner des solutions est facile mais éphémère. Cela crée une dépendance envers vous. Le leadership de coaching renforce l'autonomie. Au lieu de dicter des actions, vous posez des questions ouvertes puissantes qui incitent le collaborateur à évaluer ses options et assumer le résultat.`,
    excerciseEN: "When someone asks you 'What should I do?', reply with 'What options have you considered so far, and which looks most promising?'",
    excerciseFR: "Quand quelqu'un vous demande « Que dois-je faire ? », répondez : « Quelles options avez-vous envisagées jusqu'à présent, et laquelle semble la plus prometteuse ? »",
    quotes: {
      text: "A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you always knew you could be.",
      author: "Tom Landry"
    }
  },
  {
    week: 10,
    titleEN: "Radical Candor & Mindful Feedback Loops",
    titleFR: "La Franchise Radicale & Boucles de Feedback Consciencieuses",
    summaryEN: "Combining deep personal care with direct challenger dialogue to drive growth.",
    summaryFR: "Allier une sincère bienveillance personnelle à des défis directs pour stimuler la progression.",
    objectivesEN: [
      "Differentiate between Radical Candor, Obnoxious Aggression, and Ruinous Empathy.",
      "Apply the SBI (Situation-Behavior-Impact) model to structure feedback.",
      "Build a recurrent calendar for receiving and delivering radical candor."
    ],
    objectivesFR: [
      "Différencier la franchise radicale, l'agression détestable et l'empathie ruineuse.",
      "Appliquer le modèle SBI (Situation-Comportement-Impact) pour structurer vos retours.",
      "Établir un calendrier régulier pour échanger du feedback avec honnêteté."
    ],
    contentEN: `Kim Scott's 'Radical Candor' is about Caring Personally while Challenging Directly. Ruinous empathy is when you hesitate to tell someone they are making fatal errors because you want to preserve immediate comfort, which ultimately hurts their long-term growth and organizational health.`,
    contentFR: `La "Franchise Radicale" de Kim Scott consiste à Témoigner d'une bienveillance personnelle tout en Défiant directement. L'empathie ruineuse survient lorsque vous hésitez à signaler des erreurs fatales par souci de confort à court terme, ce qui nuit au développement futur.`,
    excerciseEN: "Deliver one critical feedback point today using the Situation-Behavior-Impact method, and frame it around helping that person grow.",
    excerciseFR: "Donnez un retour constructif aujourd'hui en utilisant la méthode Situation-Comportement-Impact, en le formulant de manière à aider l'autre à s'améliorer.",
    quotes: {
      text: "Radical Candor is doing what you need to do to help people succeed—even if it's uncomfortable.",
      author: "Kim Scott"
    }
  },
  {
    week: 11,
    titleEN: "Empowering Others & Effective Delegation",
    titleFR: "Responsabiliser Autrui & Délégation Efficace",
    summaryEN: "Relinquishing controls to make sure your team has authentic ownership of operational vectors.",
    summaryFR: "Abandonner le contrôle pour s'assurer que votre équipe a la pleine responsabilité des leviers opérationnels.",
    objectivesEN: [
      "Identify the 7 levels of delegation.",
      "Assign roles based on specific individual competencies and career aspirations.",
      "Avoid the systemic trap of duplicate micromanagement."
    ],
    objectivesFR: [
      "Identifier les 7 niveaux de délégation.",
      "Attribuer des rôles en fonction des compétences et des aspirations professionnelles.",
      "Éviter le piège systémique du micro-management inutile."
    ],
    contentEN: `Delegation is not dumps or abdication. Genuine delegation is about entrusting responsibility, authority, and resources to another, while holding clear mutual targets. It builds team capacity, ensuring that they can lead in your absence.`,
    contentFR: `Déléguer n'est pas rejeter ses responsabilités ou abandonner ses équipes. La véritable délégation consiste à confier des responsabilités, de l'autorité et des ressources à autrui, tout en fixant des objectifs mutuels clairs.`,
    excerciseEN: "Choose one task you currently hold. Explicitly delegate it completely, using a meeting to establish boundaries, resources, and weekly milestone checks.",
    excerciseFR: "Sélectionnez une tâche que vous effectuez actuellement. Déléguez-la entièrement, en clarifiant les limites, les ressources et des points d'étape hebdomadaires.",
    quotes: {
      text: "As we look ahead into the next century, leaders will be those who empower others.",
      author: "Bill Gates"
    }
  },
  {
    week: 12,
    titleEN: "Decision-Making Frameworks & Systems Thinking",
    titleFR: "Cadres de Décision & Pensée Systémique",
    summaryEN: "Using objective analytical arrays to execute highly logical organizational routes.",
    summaryFR: "Utiliser des grilles d'analyse objectives pour exécuter des décisions stratégiques logiques.",
    objectivesEN: [
      "Use Eisenhower Matrix & RAPID decision framework.",
      "Incorporate stakeholders before making critical top-level adjustments.",
      "Detect latent systemic bottlenecks in production schedules."
    ],
    objectivesFR: [
      "Utiliser la matrice d'Eisenhower et le cadre de décision RAPID.",
      "Associer les parties prenantes avant de prendre des grandes décisions.",
      "Détecter les goulots d'étranglement systémiques latents."
    ],
    contentEN: `Decisions must be made with high logical accuracy. A servant-leader understands systems thinking—how pulling lever A might inadvertently create damage in zone B. By adopting frameworks like RAPID (Recommend, Agree, Perform, Input, Decide), you remove organizational noise and execute projects with confidence.`,
    contentFR: `Les décisions doivent être prises avec une grande rigueur. Un leader-serviteur recourt à la pensée systémique pour comprendre comment actionner un levier peut impacter une autre zone. L'utilisation du cadre RAPID permet d'éliminer les flous organisationnels.`,
    excerciseEN: "Classify your current tasks inside the Eisenhower Matrix to separate immediate fires from valuable strategic items.",
    excerciseFR: "Classez vos tâches du jour dans la matrice d'Eisenhower pour séparer les urgences immédiates des actions stratégiques de fond.",
    quotes: {
      text: "A bad style of decision making can ruin a brilliant strategic plan.",
      author: "Peter Drucker"
    }
  },
  {
    week: 13,
    titleEN: "Leading with Grace through Change",
    titleFR: "Diriger avec Bienveillance à travers le Changement",
    summaryEN: "Navigating deep changes, minimizing friction and mental exhaustion in teams.",
    summaryFR: "Naviguer dans les transitions majeures, en minimisant les frictions et l'épuisement mental.",
    objectivesEN: [
      "Deploy Kotter's 8-Step Change Model.",
      "Understand and actively validate the human change curve.",
      "Overcommunicate the 'Why' behind major corporate or structural resets."
    ],
    objectivesFR: [
      "Déployer le modèle de changement en 8 étapes de Kotter.",
      "Comprendre et valider la courbe humaine du changement.",
      "Surcommuniquer le « Pourquoi » derrière les réorganisations structurelles."
    ],
    contentEN: `Change is painful because humans naturally crave predictability. Leadership during transition requires high warmth. You must validate the grief and worry of loss of familiarity, while keeping focus fixed on the positive promise of the future.`,
    contentFR: `Le changement est éprouvant car l'humain recherche naturellement la prévisibilité. Diriger pendant les transitions requiert beaucoup de chaleur. Il faut accueillir les doutes liés à la perte des repères, tout en gardant l'accent sur les opportunités d'avenir.`,
    excerciseEN: "Hold a team check-in specifically dedicated to discussing upcoming organizational shifts, focusing purely on addressing doubts without placing blame.",
    excerciseFR: "Organisez un point d'équipe dédié aux futurs changements organisationnels, axé sur l'écoute active des doutes de chacun.",
    quotes: {
      text: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
      author: "Charles Darwin"
    }
  },
  {
    week: 14,
    titleEN: "Time Stewardship & Cognitive Performance",
    titleFR: "Gestion Responsable du Temps & Performance Cognitive",
    summaryEN: "Guiding teams away from constant distraction to deep focused performance.",
    summaryFR: "Éloigner les équipes de la distraction permanente pour les guider vers une concentration de haut niveau.",
    objectivesEN: [
      "Protect team's 'Deep Work' hours.",
      "Limit empty meetings by creating rigorous agenda guidelines.",
      "Help team members balance high output with emotional restoration."
    ],
    objectivesFR: [
      "Protéger les plages horaires de « Deep Work » (travail de fond) de l'équipe.",
      "Limiter les réunions superflues en imposant des ordres du jour clairs.",
      "Aider l'équipe à concilier forte productivité et ressourcement personnel."
    ],
    contentEN: `Time is our most scarce resource. Servant leaders do not exploit time; they protect it. By eliminating useless status-update meetings and replacing them with quick, asynchronous communications, you save your team's mental energy for complex, creative tasks.`,
    contentFR: `Le temps est notre ressource la plus précieuse. Les leaders-serviteurs ne l'exploitent pas ; ils le protègent. En supprimant les points inutiles au profit d'échanges asynchrones rapides, vous préservez l'énergie mentale créatrice de l'équipe.`,
    excerciseEN: "Initiate a 'No-Meeting Day' once a week within your department or project team, and monitor the positive shift in operational output.",
    excerciseFR: "Instaurez une « Journée sans réunion » par semaine au sein de votre service ou projet, et observez l'amélioration de la productivité.",
    quotes: {
      text: "Time is what we want most, but what we use worst.",
      author: "William Penn"
    }
  },
  {
    week: 15,
    titleEN: "Ethical Integrity & Clear Morals",
    titleFR: "Intégrité Éthique & Valeurs Morales Claires",
    summaryEN: "Anchoring decisions in ethical standards, building reputation and trust.",
    summaryFR: "Ancrer chaque décision dans des normes éthiques élevées, pour bâtir une réputation et une confiance durables.",
    objectivesEN: [
      "Recognize biases and potential ethical blind spots in planning stages.",
      "Design an environment of complete financial and operational transparency.",
      "Execute safe channels for reporting misconduct."
    ],
    objectivesFR: [
      "Reconnaître les biais et angles morts éthiques dès la phase de planification.",
      "Concevoir un environnement de transparence financière et opérationnelle totale.",
      "Mettre en place des canaux sécurisés et bienveillants pour signaler les dérives."
    ],
    contentEN: `Integrity is doing the right thing when nobody is watching. Servant leaders carry high alignment between public speech and private metrics. This absolute alignment is what builds enduring organizational trust, protecting the brand's long-term reputation.`,
    contentFR: `L'intégrité consiste à agir correctement même lorsque personne ne regarde. Les leaders-serviteurs veillent à une parfaite cohérence entre les discours publics et les pratiques internes. Cet alignement total est le fondement de la confiance.`,
    excerciseEN: "Conduct an anonymous team culture audit to assess trust scores and check if there are invisible ethical friction spots.",
    excerciseFR: "Réalisez un sondage anonyme sur la culture d'équipe pour évaluer le niveau de confiance et identifier d'éventuels points de friction éthique.",
    quotes: {
      text: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
      author: "Oprah Winfrey"
    }
  },
  {
    week: 16,
    titleEN: "Building High-Performance Collaborations",
    titleFR: "Bâtir des Collaborations de Haute Performance",
    summaryEN: "Structuring frameworks that foster robust teamwork, eliminating communication barriers.",
    summaryFR: "Structurer des cadres d'échange fluides qui stimulent le travail collectif et abattent les silos.",
    objectivesEN: [
      "Apply Lencioni's Five Dysfunctions of a Team model.",
      "Align shared team rewards based on joint outcomes.",
      "Foster accountability through regular peer-to-peer performance alignments."
    ],
    objectivesFR: [
      "Appliquer le modèle des Cinq Dysfonctions d'une Équipe de Lencioni.",
      "Aligner les gratifications sur les résultats collectifs de l'équipe.",
      "Stimuler la responsabilisation mutuelle par des rituels réguliers."
    ],
    contentEN: `Collaboration fails when teams compete internally. An effective servant leader aligns individual motivations toward a unified objective. By identifying and eliminating Lencioni's dysfunctions—Lack of Trust, Fear of Conflict, Lack of Commitment, Avoidance of Accountability, and Inattention to Results—you create an unstoppable collaborative ecosystem.`,
    contentFR: `La collaboration échoue lorsque les équipes entrent en rivalité interne. Le leader-serviteur aligne les motivations de chacun sur un but commun. En éliminant la peur du conflit ou le manque de confiance, vous libérez la puissance de l'esprit d'équipe.`,
    excerciseEN: "Review Lencioni’s 5 elements with your team. Honestly co-evaluate which level needs immediate focus.",
    excerciseFR: "Analysez les 5 dysfonctions de Lencioni avec votre équipe. Évaluez ensemble avec franchise le niveau qui nécessite le plus d’attention.",
    quotes: {
      text: "Not finance. Not strategy. Not technology. It is teamwork that remains the ultimate competitive advantage.",
      author: "Patrick Lencioni"
    }
  },
  {
    week: 17,
    titleEN: "Diversity, Equity, and Inclusion (DEI)",
    titleFR: "Diversité, Équité et Inclusion (DEI)",
    summaryEN: "Valuing varied perspectives as core assets, building empathetic networks.",
    summaryFR: "Valoriser la diversité des perspectives comme un atout stratégique, et inclure chacun pleinement.",
    objectivesEN: [
      "Identify microaggressions and hidden structural blocks built into recruitment systems.",
      "Adapt internal operations to accommodate diverse physical, neurological, and cultural needs.",
      "Foster inclusive discussions where minority perspectives are actively validated."
    ],
    objectivesFR: [
      "Identifier les biais et les barrières structurelles invisibles de recrutement.",
      "Adapter l'environnement de travail aux besoins neurologiques, physiques et culturels.",
      "Animer des ateliers participatifs où les voix minoritaires sont authentiquement sollicitées."
    ],
    contentEN: `Diversity is being invited to the party; inclusion is being asked to dance. Servant leadership is intrinsically inclusive. Because you prioritize the growth and well-being of all people, you seek out diverse voices to counteract organizational groupthink, unlocking real creative potential.`,
    contentFR: `La diversité, c'est être invité à la fête ; l'inclusion, c'est être invité à danser. Le leadership serviteur est intrinsèquement inclusif. En plaçant l'épanouissement humain au premier plan, vous recherchez les voix différentes pour contrer la pensée unique.`,
    excerciseEN: "Review a recent development cycle. Actively solicit design ideas or general inputs from a department with which you rarely collaborate directly.",
    excerciseFR: "Passez en revue un projet récent. Sollicitez activement les conseils ou idées d'un service avec lequel vous n'avez que très peu de liens habituellement.",
    quotes: {
      text: "Diversity is a fact, but inclusion is a choice we make every single day.",
      author: "Nellie Borrero"
    }
  },
  {
    week: 18,
    titleEN: "Strategic Scaling & Stewardship",
    titleFR: "Mise à l'Échelle Stratégique & Stewardship",
    summaryEN: "Scaling operations without losing the close proximity to human goals.",
    summaryFR: "Multiplier l'impact et développer les activités tout en restant proche des valeurs humaines de départ.",
    objectivesEN: [
      "Maintain strict standards of high quality while throughput is doubled.",
      "Design systems that preserve the unique close-knit corporate culture.",
      "Evaluate financial pathways that build self-sustaining growth loops."
    ],
    objectivesFR: [
      "Garantir des critères de qualité constants lors d'un accroissement rapide d'activité.",
      "Concevoir des mécaniques pour entretenir la complicité humaine d'origine.",
      "Analyser les options d'investissement créatrices de croissance durable."
    ],
    contentEN: `Scaling represents the ultimate test. Many organizations lose their core identity when they scale up. Strategic steward leadership builds infrastructure where delegation, clear values, and repeatable operating metrics work together to keep the core flame burning.`,
    contentFR: `Le changement d'échelle est le test ultime. Beaucoup de structures s'égarent en grandissant. Le leadership de gestion responsable (stewardship) conçoit un cadre où les délégations de pouvoir, les valeurs fortes et les processus fluides s'allient pour garder l'esprit initial intact.`,
    excerciseEN: "In a scaling blueprint, identify the absolute core values that are non-negotiable and must survive regardless of size.",
    excerciseFR: "Dans votre projet de développement, formulez les trois valeurs humaines fondamentales et non négociables qui devront être préservées.",
    quotes: {
      text: "Stewardship is the commitment to being accountable for a well-being that we did not personally create.",
      author: "Peter Block"
    }
  },
  {
    week: 19,
    titleEN: "Crisis Stewardship & Resilience",
    titleFR: "Gestion Responsable de Crise & Résilience",
    summaryEN: "Guiding organizations through high-stakes challenges while protecting people's peace.",
    summaryFR: "Guider l'organisation face aux tempêtes majeures tout en abritant le moral et la sérénité des personnes.",
    objectivesEN: [
      "Formulate rapid, clear communications during emergency scenarios.",
      "Maintain personal mental hygiene during continuous high-stress operations.",
      "Translate crisis threats into structural pivot opportunities."
    ],
    objectivesFR: [
      "Formuler des messages clairs et rassurants en cas d'urgence opérationnelle.",
      "Veiller à sa propre hygiène de vie mentale face à des pressions fortes continues.",
      "Orienter le traitement des imprévus vers des opportunités de réinvention."
    ],
    contentEN: `Crises reveal character. When trouble strikes, a servant leader does not retreat. They stand as a calm, protective shield for the team, digesting complexity and delivering clear direction with patience and reassurance.`,
    contentFR: `Les crises sont d'excellents révélateurs. Face à l'imprévu, le leader-serviteur ne se dérobe pas. Il fait rempart pour l'équipe, absorbe la panique et insuffle une sérénité rassurante pour prendre de bonnes décisions.`,
    excerciseEN: "Draft an urgent-scenario communication checklist focusing on three things: Absolute Truth, Reassuring Care, and Immediate Steps.",
    excerciseFR: "Rédigez une liste de réflexes de communication d'urgence axée sur : Vérité factuelle, Empathie et Plan d'action immédiat.",
    quotes: {
      text: "I am not afraid of storms, for I am learning how to sail my ship.",
      author: "Louisa May Alcott"
    }
  },
  {
    week: 20,
    titleEN: "Resource Stewardship & Financial Wisdom",
    titleFR: "Gestion des Ressources & Sagesse Financière",
    summaryEN: "Aligning budgets with priorities without sacrificing human values.",
    summaryFR: "Maîtriser les budgets et investissements de façon cohérente, sans jamais sacrifier le capital humain.",
    objectivesEN: [
      "Distribute spending in strict congruence with internal philosophies.",
      "Eliminate systemic wastes in operations.",
      "Evaluate long-term ROI considering social and ecological values."
    ],
    objectivesFR: [
      "Répartir les enveloppes budgétaires en parfaite adéquation avec la philosophie d'entreprise.",
      "Identifier et couper les dépenses superflues qui pèsent sur l'efficacité.",
      "Mesurer le retour sur investissement sous l’angle écologique et social."
    ],
    contentEN: `Financial resource is fuel for the mission. Stewardship means treating all funds, time, and physical equipment with deep care. By avoiding unnecessary waste and aiming investments directly at areas that cultivate human potential and systemic stability, you craft a legacy of enduring resilience.`,
    contentFR: `La ressource financière est le carburant de votre mission. Gérer de façon responsable implique d'administrer chaque budget, heure de travail et outil avec respect. En investissant sur les leviers humains, vous ancrez l'organisation de façon pérenne.`,
    excerciseEN: "Analyze the current budget of your group. Check if there is direct alignment between top budgets and human welfare objectives.",
    excerciseFR: "Analysez le budget actuel de votre département. Vérifiez l’alignement réel entre les budgets financiers importants et les valeurs d'épanouissement humain.",
    quotes: {
      text: "The budget is not just a collection of numbers, but an expression of our values and aspirations.",
      author: "Jacob Lew"
    }
  },
  {
    week: 21,
    titleEN: "Legacy & Succession Planning",
    titleFR: "Héritage & Planification de la Succession",
    summaryEN: "Designing systems that thrive long after your personal tenure completes.",
    summaryFR: "Établir des structures saines destinées à prospérer durablement bien après votre départ.",
    objectivesEN: [
      "Identify and mentor three potential successors.",
      "Write clean documentation outlining critical operational loops.",
      "Cultivate a sustainable culture where values are shared organically."
    ],
    objectivesFR: [
      "Identifier et former trois successeurs potentiels au sein de votre collectif.",
      "Produire des documentations et manuels opératoires clairs pour les processus clés.",
      "Cultiver une transmission bienveillante de la culture et des valeurs clés."
    ],
    contentEN: `The ultimate measure of servant leadership is what happens when you leave. If the team collapses when you depart, your leadership was based on dependency, not development. True success is creating a platform of self-sustaining excellence, where independent leaders arise naturally.`,
    contentFR: `L'indicateur absolu du leadership serviteur réside dans ce qu’il advient de l’organisation après votre départ. Si tout s'effondre, c'est que votre leadership a créé de la dépendance plutôt que du développement. Le vrai succès est d'ouvrir la voie à d'autres leaders.`,
    excerciseEN: "Create a list of your daily tasks. Write a quick execution blueprint for a teammate to manage them confidently for a week.",
    excerciseFR: "Listez vos tâches stratégiques clés. Rédigez un guide d’action pour qu'un collègue puisse les piloter en pleine confiance durant une semaine.",
    quotes: {
      text: "Success without a successor is a failure. Your legacy is built through the leaders you leave behind.",
      author: "Dr. Myles Munroe"
    }
  }
];
