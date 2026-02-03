import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Naitik Raj",
    },
    social: {
        github: "NAITIK74600",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Medical Assistant AI",
            description: "An intelligent medical assistant system powered by AI to help with medical queries, symptom analysis, and health recommendations. Built using Python and machine learning algorithms for accurate health insights.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            technologies: ["Python", "Machine Learning", "NLP", "AI"],
            github: "https://github.com/NAITIK74600/Medical-Assisstant-main",
            demo: "#"
        },
        {
            id: 2,
            title: "Medicine Recognition System",
            description: "A computer vision system that identifies medicines using image recognition. Helps users identify pills and medications through AI-powered image analysis, ensuring accurate medication identification.",
            image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop",
            technologies: ["Python", "OpenCV", "Computer Vision", "Deep Learning"],
            github: "https://github.com/NAITIK74600/Medicine-Recognition-System-main",
            demo: "#"
        },
        {
            id: 3,
            title: "Heart Disease Prediction",
            description: "Machine learning model to predict heart disease risk based on patient data. Uses classification algorithms to analyze health parameters and provide early warning signs of potential heart conditions.",
            image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&h=600&fit=crop",
            technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Jupyter"],
            github: "https://github.com/NAITIK74600/Heart-Disease-Prediction-main",
            demo: "#"
        },
        {
            id: 4,
            title: "Chatbot Using Langchain",
            description: "An intelligent conversational AI chatbot built with Langchain framework. Features natural language understanding, context-aware responses, and seamless integration with various LLM models.",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
            technologies: ["Python", "Langchain", "NLP", "OpenAI", "AI"],
            github: "https://github.com/NAITIK74600/Chatbot-Using-Langchain-main",
            demo: "#"
        },
        {
            id: 5,
            title: "End-to-End Chest Disease Classification",
            description: "Deep learning model for automated detection and classification of chest diseases from X-ray images. Implements CNN architecture for accurate medical image analysis and diagnosis assistance.",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop",
            technologies: ["Python", "TensorFlow", "CNN", "Deep Learning", "Medical AI"],
            github: "https://github.com/NAITIK74600/End-to-End-Chest-Disease-Classification-main",
            demo: "#"
        },
        {
            id: 6,
            title: "House Price Prediction",
            description: "Machine learning regression model to predict house prices based on various features like location, size, amenities, and market trends. Helps in real estate market analysis and decision making.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
            technologies: ["Python", "Scikit-learn", "Regression", "Data Analysis"],
            github: "https://github.com/NAITIK74600/House-Price-Prediction-main",
            demo: "#"
        }
 
    ],
    skills: [
        {
            title: "AI & Machine Learning",
            icon: <HiCode />,
            description: "Artificial Intelligence & ML",
            bgClass: "bg-purple-500/10",
            iconClass: "text-purple-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "TensorFlow", level: "Advanced", hot: true },
                { name: "Scikit-learn", level: "Advanced" },
                { name: "Langchain", level: "Intermediate", hot: true },
                { name: "OpenCV", level: "Intermediate" },
                { name: "NLP", level: "Intermediate" }
            ]
        },
        {
            title: "Data Science",
            icon: <HiDatabase />,
            description: "Data Analysis & Visualization",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Pandas", level: "Advanced", hot: true },
                { name: "NumPy", level: "Advanced" },
                { name: "Jupyter Notebook", level: "Advanced" },
                { name: "Data Analysis", level: "Advanced" }
            ]
        },
        {
            title: "Frontend Development",
            icon: <HiCode />,
            description: "Web Development",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "React", level: "Intermediate" },
                { name: "Next.js 15", level: "Intermediate", hot: true },
                { name: "TypeScript", level: "Intermediate" },
                { name: "TailwindCSS", level: "Advanced" },
                { name: "JavaScript", level: "Advanced" },
                { name: "HTML/CSS", level: "Advanced" }
            ]
        },
        {
            title: "Tools & Frameworks",
            icon: <HiCube />,
            description: "Development Tools & Libraries",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Jupyter Notebook", level: "Advanced", hot: true },
                { name: "Git & GitHub", level: "Advanced" },
                { name: "Google Colab", level: "Advanced" },
                { name: "Keras", level: "Intermediate" },
                { name: "Flask", level: "Intermediate" },
                { name: "Streamlit", level: "Intermediate" },
                { name: "Matplotlib", level: "Advanced" },
                { name: "Seaborn", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "MCA Student (AI & ML)",
            company: "Chandigarh University",
            period: "2024 - Present",
            location: "Chandigarh, India",
            description: "Pursuing Master of Computer Applications with specialization in Artificial Intelligence and Machine Learning. Focusing on advanced AI/ML concepts, deep learning, NLP, and real-world project implementations.",
            responsibilities: [
                "Building end-to-end machine learning projects including disease prediction and classification systems",
                "Implementing deep learning models for computer vision and NLP applications",
                "Working with frameworks like TensorFlow, Scikit-learn, and Langchain for AI solutions",
                "Developing intelligent chatbots and medical AI assistants using latest AI technologies",
                "Conducting data analysis and creating predictive models for various domains"
            ],
            technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "OpenCV", "Langchain", "Machine Learning", "Deep Learning", "NLP"]
        },
        {
            position: "AI/ML Projects & Research",
            company: "Self-Directed Learning",
            period: "2023 - Present",
            location: "Remote",
            description: "Actively building and deploying AI/ML projects spanning healthcare, data analysis, computer vision, and natural language processing. Focusing on practical implementations and real-world problem solving.",
            responsibilities: [
                "Developed 30+ machine learning projects including medical diagnosis systems and predictive models",
                "Built computer vision applications for medicine recognition and hand tracking",
                "Created conversational AI chatbots using Langchain and modern LLMs",
                "Implemented data analysis pipelines for e-commerce and restaurant data",
                "Worked on price prediction models for real estate, flights, and diamonds"
            ],
            technologies: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Data Analysis"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@NAITIK74600",
            link: `https://github.com/NAITIK74600`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "naitikraj74600@gmail.com",
            link: "mailto:naitikraj74600@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}