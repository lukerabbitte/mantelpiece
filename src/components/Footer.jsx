import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="h-16 flex flex-row items-center justify-center">
            <footer className="bg-slate-400/20 rounded-xl h-1/2 w-fit flex flex-row items-center justify-center p-4">
                <ul className="flex flex-row gap-4 items-center justify-center">
                    <li>
                        <a href="https://www.instagram.com/carolinewkelly/" target="_blank">
                            <FaInstagram className="hover:scale-110 hover:opacity-80 transition-all duration-400" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/caroline-kelly-860313309/"
                            target="_blank"
                        >
                            <FaLinkedin className="hover:scale-110 hover:opacity-80 transition-all duration-400" />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
