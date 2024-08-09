import webDesignerBanner from "../assets/img/web-design-job-banner.jpg"
import aspDeveloperBanner from "../assets/img/programmer-job-banner.jpg"
import chatSupportBanner from "../assets/img/chat-support-job-banner.jpg"
import productionSpecialistBanner from "../assets/img/production-specialist-job-banner.jpg"
import juniorProgrammerBanner from "../assets/img/junior-programmer-banner.jpg"
import customerSupportBanner from "../assets/img/customer-support-banner.jpg"


const jobs = [
    {
        id: 1,
        jobName: "Web Designer",
        salaryMinimum: 16000,
        salaryMaximum: 18000,
        datePosted: "August 6, 2024",
        setUp: "Office-based",
        employmentType: "Full-time",
        experience: 0,
        description: "Primary duties include conceptualizing and implementing creative ideas for client websites, as well as creating visual elements that are in line with our clients' branding and specifications. Plans, executes, and develops websites with an understanding of graphic and web design. Creates the look, layout, feel, functionality, and features of all the websites being developed. Maintains and upgrades services.",
        requirements: [
            "A relevant bachelor’s degree or diploma in a related field.",
            "Proficiency in graphic design software including Adobe Photoshop, Adobe Illustrator, and other visual design tools.",
            "Proficiency in front-end development web programming languages such as HTML and CSS, JQuery, and JavaScript.",
            "Good understanding of content management systems.",
            "Portfolio of graphic designs/ completed projects",
            "Good understanding of search engine optimization principles.",
            "Proficient understanding of cross-browser compatibility issues.",
            "Excellent visual design skills.",
            "Up-to-date experience with international web protocols, standards, and technologies.",
            "Creative and open to new ideas.",
            "Adaptable and willing to learn new techniques."
        ],
        imageBanner: webDesignerBanner
    },
    {
        id: 2,
        jobName: "ASP.NET Web Developer",
        salaryMinimum: 35000,
        salaryMaximum: 45000,
        datePosted: "August 7, 2024",
        setUp: "Office-based",
        employmentType: "Full-time",
        experience: 3,
        description: "We are seeking a highly skilled and experienced .NET Web Developer to join our dynamic team. The ideal candidate will have a strong background in designing, developing, and maintaining software applications using the .NET framework. This role requires a deep understanding of C#, ASP.NET, and related technologies, along with a passion for delivering high-quality software solutions.",
        requirements: [
            "Proficiency in C#, ASP.NET Web Forms & Web API",
            "Strong understanding of SQL and database design.",
            "Experience with front-end technologies such as HTML, CSS, JavaScript.",
            "Excellent problem-solving skills and attention to detail.",
            "Strong communication and teamwork abilities.",
            "Ability to work in a fast-paced and dynamic environment.",
            "Familiarity with DevOps practices and CI/CD pipelines",        
        ],
        imageBanner: aspDeveloperBanner
    },
    {
        id: 3,
        jobName: "English Chat Support",
        salaryMinimum: 16000,
        salaryMaximum: 18000,
        datePosted: "August 8, 2024",
        setUp: "Home-based",
        employmentType: "Full-time",
        experience: 1,
        description: "The English Chat Support position is responsible for facilitating interactive and creative communication with customers/subscribers through Instant Messaging and/or SMS with the goal of providing a personalized experience that meets the subscriber's/user’s needs.",
        requirements: [
            "Must be a native level English speaker.",
            "Familiar with customs and everyday language idioms commonly used in the United States or the United Kingdom.",
            "Excellent English communication skills, both conversational and creative.",
            "Able to work in a virtual team environment with minimal supervision.",
            "Capable of working flexible hours and demonstrating commitment to the job.",
            "With a reliable internet connection and computer/laptop.",
            "Experience in customer service and/or business process/technology support is not required, but an advantage.",
        ],
        imageBanner: chatSupportBanner
    },
    {
        id: 4,
        jobName: "Junior Programmer",
        salaryMinimum: 16000,
        salaryMaximum: 18000,
        datePosted: "August 2, 2024",
        setUp: "Office-based",
        employmentType: "Full-time",
        experience: 0,
        description: "Support the entire application lifecycle (concept, design, test, release and support\nProduce fully functional web applications writing clean code\nDevelop application programming interfaces (APIs) to support mobile functionality or third-party software\nGather specific requirements and suggest solutions\nTroubleshoot and debug to optimize performance\nDesign interfaces to improve user experience\nEnsure new and legacy applications meet quality standards\ntay up-to-date with new technology trends\nCommunicate with users to understand their needs and experiences",
        requirements: [
            "A Bachelor's Degree in Computer Science",
            "In-depth knowledge of HTML5, CSS and Javascript",
            "In-depth knowledge in ReactJS (has experience with Material-UI or other design systems)",
            "Familiar with Async/Promises and State Management",
            "In-depth knowledge of programming languages PHP + Laravel",
            "Strong knowledge in MySQL",
            "Experience with third-party libraries and API",
            "Excellent analytical skills with a good problem-solving attitude",
            "Ability to perform in a team environment",
            "Ability to multitask and Excellent interpersonal skills.",
            "Proven work experience as a Web developer is a plus",
            "Proven work experience as a Mobile developer is a plus",
            "Proven work experience as a Full-stack developer is an exceptional plus"
        ],
        imageBanner: juniorProgrammerBanner
    },
    {
        id: 5,
        jobName: "Digital Media Product Specialist",
        salaryMinimum: 14000,
        salaryMaximum: 16000,
        datePosted: "August 9, 2024",
        setUp: "Office-based",
        employmentType: "Full-time",
        experience: 2,
        description: "NMS is looking for a creative candidate for a new job opening as a Digital Media Production Specialist, with a specific focus playing a crucial role in researching, creating and developing captivating media content using Artificial Intelligence.",
        requirements: [
            "Combination of work experience and training in generating digital media.",
           " Demonstrated expertise: Creating Images, Content and Profiles with the help of AI Technology.",
            "Ability to work under tight deadlines and manage multiple projects simultaneously."
        ],
        imageBanner: productionSpecialistBanner
    },
    {
        id: 6,
        jobName: "Customer Support",
        salaryMinimum: 16000,
        salaryMaximum: 18000,
        datePosted: "August 5, 2024",
        setUp: "Office-based",
        employmentType: "Full-time",
        experience: 1,
        description: "If you are dedicated to providing exceptional customer support, we welcome you to apply for this exciting opportunity in our Operations team. The scope of this role encompasses calls, emails, moderation and live chat. Preference for a neutral accent without any strong regional accents, or American/British accent.",
        requirements: [
            "Customer Support or Service experience minimum of 1 year.",
            "Exceptional oral and written communication skills in English",
            "Familiarity with Google Sheets is advantageous.",
            "Preference for a neutral accent without any strong regional accents, or American or British accent",
            "Above average typing speed is a plus.",
            "Able to adhere and work on a rotating shift schedule, including weekends or holidays, if required.",
            "Strong problem-solving abilities and a customer-focused mindset",
            'Ability to work independently in a team-oriented and fast-paced environment',
            "Good time management and multi-tasking skills"
        ],
        imageBanner: customerSupportBanner
    },
    
]

export default jobs