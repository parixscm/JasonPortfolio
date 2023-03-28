interface IListContent {
  icon: string;
  text: string;
  highlightText: string;
}

function AboutLine({ icon, text, highlightText }: IListContent) {
  return (
    <div className="text-center">
      {icon}{" "}
      <span className="text-lg font-semibold uppercase tracking-wide xl:text-2xl">
        {highlightText}
      </span>
      <p className="text-sm md:text-base xl:text-base">{text}</p>
    </div>
  );
}

export default AboutLine;
