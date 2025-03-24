import { FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIconTray = () => {
    return (
        <ul className="flex flex-row gap-4 items-center justify-center">
            <li>
                <a
                    href="https://www.instagram.com/carolinewkelly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <FaInstagram className="w-6 h-6 hover:scale-110 hover:opacity-80 transition-all duration-400" />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/caroline-kelly-860313309/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <FaLinkedin className="w-6 h-6 hover:scale-110 hover:opacity-80 transition-all duration-400" />
                </a>
            </li>
        </ul>
    );
};

export default SocialIconTray;
