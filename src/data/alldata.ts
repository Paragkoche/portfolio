import { AiMl, Backend, DataAnalytics, Frontend, PromptEng, devOps } from "./images";

export const projects: any[] = [
    {
        title: "brush.ish",
        description:
            `brush.ish is a modern portfolio and e-commerce website built for a Berlin-based visual artist to showcase and sell original paintings. I developed the backend logic and made key frontend improvements to ensure a smooth, responsive user experience. The site is built with Next.js for fast rendering, Sanity as a flexible headless CMS for easy content management, and Server Functions to handle backend operations like data fetching and contact forms. The result is a visually engaging, scalable platform that supports both artistic storytelling and online sales.`,
        src: "water.jpg",
        link: "https://brush-ish.vercel.app/",
        color: "#C2491D",
        logo: "https://i.postimg.cc/KjVPjCVF/7d66dce7cca69632752d272c1fc231e3925f6789-4418x1171.webp",
    },
    {
        title: "The Kapda project",
        description:
            "The Kapda Project is a full-featured e-commerce website focused on fashion and lifestyle products. I was responsible for building the entire backend infrastructure and implementing the complete frontend logic to ensure a seamless shopping experience. The site supports dynamic product listings, user interactions, and smooth navigation across pages. Using modern web technologies, I developed a scalable and maintainable system that powers both the visual aesthetics and core functionality of the platform.",
        src: "rock.jpg",
        link: "https://thekapdaproject.vercel.app/",
        color: "#BBACAF",
        logo: "https://i.postimg.cc/MpwwNHP0/svgviewer-png-output.png",
    },
    {
        title: "Tripe users",
        description:
            "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
        src: "tree.jpg",
        link: "https://tripusers.com/",
        color: "#977F6D",
        logo: "https://i.postimg.cc/y8KJjV0t/af989bf94799e9a6fe43c8b88747f5b78decae01-1354x344.webp",
    },
];

export type skillsType = {
    name: string,
    desc: string,
    image: React.FC
}
export const Skills: skillsType[] = [
    {
        name: "Frontend",
        desc: "Welcome to the frontend wonderland! Here, I transform boring code into interactive and eye-catching websites using HTML, CSS, and JavaScript. I promise to make your website as appealing as your favorite coffee shop. Whether it's React or Angular, I’m your go-to for making user interfaces that wow!",
        image: Frontend
    },
    {
        name: "Backend",
        desc: "Dive into the server room with me, where I ensure everything works seamlessly behind the scenes. With Node.js, Express, and Python, I build reliable backends that keep your data flowing smoothly. Think of me as the maestro conducting a symphony of data, making sure everything plays in perfect harmony.",
        image: Backend
    },
    {
        name: "Prompt Engineering",
        desc: "Ever wondered how to make AI sound human? That's where I come in! I create prompts that turn your AI from robotic to conversational, just like your friendly neighborhood barista. It’s all about giving machines a touch of personality, one prompt at a time.",
        image: PromptEng
    },
    {
        name: "DevOps",
        desc: "In the world of DevOps, I ensure your code gets from development to production faster than you can say 'continuous integration.' With Docker, Kubernetes, and cloud services, I make deployment a breeze. Your software will run smoother than butter on a hot pancake!",
        image: devOps
    },
    {
        name: "Data Analytics",
        desc: "Let me be your data detective. Using Python, SQL, and visualization tools, I uncover hidden insights and patterns in your data, turning numbers into narratives. I’m on a mission to make your data tell a story that’s both insightful and compelling.",
        image: DataAnalytics
    },
    {
        name: "AI/ML",
        desc: "From training machines to recognize patterns to making them smart enough to chat with you, I specialize in AI and machine learning. Whether it's TensorFlow or PyTorch, I'm here to bring your AI ideas to life. Let’s make some machine magic together!",
        image: AiMl
    }
];
;
