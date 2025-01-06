const BioText = () => {
    return (
        <div>
            <div className="text-2xl xl:text-4xl flex flex-col gap-4">
                <p>I am an author at Hot Press.</p>
                <p>
                    Find a selection of my articles <a href="/posts" className="font-bold underline">here</a>.
                </p>
            </div>
        </div>
    );
};

export default BioText;
