import CtaButton from "@/components/CtaButton";
import SocialIconTray from "@/components/SocialIconTray";

const BioText = () => {
    return (
        <div className="text-md xl:text-lg flex flex-col gap-4 items-center">
            <p>
                Caroline Kelly is a journalist and contributing writer at Hot Press Magazine,
                focusing on music and culture. Formerly, she was the Features Editor at The
                University Observer from 2022-2024. She grew up in Virginia and received her
                undergraduate degree at University College Dublin. Her work has also appeared in
                Extra.ie. She lives in Dublin.
            </p>

            <CtaButton href="/posts" text="Articles" arrowDirection="right"/>

            <SocialIconTray />
        </div>
    );
};

export default BioText;
