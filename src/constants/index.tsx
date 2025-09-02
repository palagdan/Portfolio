export const navLinks = [
    {
        name: "Experience",
        link: "experience",
    },
    {
        name: "Projects",
        link: "projects",
    },
];

export const experience = [
    {
        title: "Jul 2024 - Present",
        content: (
            <div>
                <span className=" text-lg font-bold mb-8 text-white">
                    Fullstack Developer | KBSS-CVUT
                </span>
                <br/>
                <span className="text-sm text-gray-500">Prague, Czech Republic</span>
                <br/>
                <span className="text-sm mb-8 text-white">Develop knowledge-based information systems using Semantic Web technologies.
                    Implemented a mini-framework to configure RDF modules using annotations. Localized the application by implementing parameterized messages using message IDs.
                </span>
            </div>
        ),
    },
    {
        title: "September 2024 - January 2025",
        content: (
            <div>
                <span className=" text-lg font-bold mb-8 text-white">
                    Frontend Developer | Prosaz x FIT CVUT
                </span>
                <br/>
                <span className="text-sm text-gray-500">Prague, Czech Republic</span>
                <br/>
                <span className="text-sm mb-8 text-white">Designed and developed the frontend for the worker service of the firm Prosaz using React and TypeScript.
                    Focused on creating a user-friendly interface and ensuring efficient, maintainable code, while adhering to
                    modern frontend development best practices.
                </span>
            </div>
        ),
    }
]

export const resumeLink = "https://www.dropbox.com/scl/fi/003ypv66ukotz1kh28mqg/daniil_palagin_cv.pdf?rlkey=q9g1ij4kb1xh7k2xn9wix614s&st=vdpjohfr&dl=0"

export const projects = [
    {
        title: "CLI Poker Game",
        description:
            "This is a Python-based implementation of a Texas Hold'em game, allowing players to experience the excitement of one of the most popular poker variations.",
        link: "https://github.com/palagdan/Poker-CLI",
        image: "poker-cli.png"
    },
    {
        title: "Ascii Art Converter",
        description: "This command-line program converts images into ASCII art with various customization options. Users can load JPG or PNG files, apply filters such as inversion and brightness adjustments, and flip images both horizontally and vertically. The tool allows for saving processed images to files or displaying them directly in the console. It features several predefined ASCII tables for rendering, offering a choice of styles to enhance the artistic output. Built in Scala, this program showcases a practical application of image processing techniques in a command-line interface.",
        link: "https://github.com/palagdan/Ascii_Art_Converter",
        image: "ascii_art_converter.png"
    },
    {
        title: "Virtual filesystem server",
        description:
            "This project implements a straightforward HTTP server capable of serving various content types. It supports static file retrieval via the GET method, directory listing, and script execution (e.g., shell, C, C++). Users can configure network parameters, directory access restrictions, and logging options through a configuration file. The server also includes functionality for saving static files using the POST method and allows for graceful shutdown via a designated address or method. Developed in C++, the project includes a comprehensive build system using Makefile, complete with documentation generation and testing capabilities.",
        link: "https://github.com/palagdan/virtual-filesystem-server",
        image: "virtual_filesystem.png"
    },
    {
        title: "Robot AI",
        description:
            "The project involves a maze containing various targets. A group of robots is tasked with collecting these targets in the shortest time possible. Each robot can carry only one target at a time to the designated collection point. The robots can operate in different modes, allowing them to communicate with one another and share information about the targets.",
        link: "https://github.com/palagdan/robo",
        image: "robot_ai.png"
    },
    {
        title: "Tech Blog",
        description:
            "Designed and built a tech blog using Flask and SQLAlchemy. Implemented user registration, authentication, and blog post management. Integrated interactive features like comments and search capabilities.",
        link: "https://github.com/palagdan/Tech-Blog",
        image: "blog.png"
    },
    {
        title: "Drake",
        description:
            "The Drake is a board game for two players inspired by the successful game The Duke. Essentially, it is a simplified version of The Duke played on a smaller game board with fewer pieces, and some of its rules have been adjusted to facilitate easier programming of the game. The Drake has several possible versions based on various modifications and expansions that can enhance the so-called basic version.",
        link: "https://github.com/palagdan/drake",
        image: "drake.png"
    },
];

