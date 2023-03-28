interface IListContent {
  icon: string;
  text: string;
  highlightText: string;
}

function AboutLine({ icon, text, highlightText }: IListContent) {
  return (
    <div>
      {icon}{" "}
      <span className="text-lg font-bold uppercase tracking-wide xl:text-2xl">
        {highlightText}
      </span>
      <p className="text-sm md:text-base xl:text-base">{text}</p>
    </div>
  );
}

export default AboutLine;
