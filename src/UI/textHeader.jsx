const TextHeader = ({text, color = "text-black", size="text-lg", categoryTopic=false}) => {
    const textStyle = "font-bold " + color + " " + size + "" + (categoryTopic ? " px-6" : "");

    return(
        <p className={textStyle}>{text}</p>
    );
}

export default TextHeader;