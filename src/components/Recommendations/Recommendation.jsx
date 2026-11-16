function Recommendation({ name, title, description }) {
  return (
    <div className="border border-white/10 bg-prussiaBlue hover:border-argBlue p-6 w-[600px] self-start flex flex-col rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_40px_rgba(76,168,234,0.22)] transition-all duration-300 ease-in-out">
      <h4 className="text-2xl text-argBlue mb-2">
        {name}
      </h4>
      <h5 className="text-xl italic text-magnolia/80 mb-4">{title}</h5>

      <p className="text-magnolia text-base">
        {description.reduce((nodes, part) => {
          const word = typeof part === "string" ? part : part.text;
          const highlighted = typeof part !== "string";
          nodes.push(
            <span
              key={`${word}-${nodes.length}`}
              className={highlighted ? "font-semibold text-argBlue" : undefined}
            >
              {word}
            </span>,
          );
          return nodes;
        }, [])}
      </p>
    </div>
  );
}

export default Recommendation;
