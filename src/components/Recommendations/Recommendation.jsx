import { useState } from "react";

function Recommendation({ name, title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border border-night p-4 bg-prussiaBlue hover:border-argBlue hover:cursor-pointer transition-all duration-300 ease-in-out w-[600px] min-h-[260px] flex flex-col justify-between rounded-xl`}
      style={{ height: expanded ? "auto" : undefined }}
    >
      <div>
        <h4 className="text-2xl text-argBlue mb-2 hover:text-magnolia">
          {name}
        </h4>
        <h5 className="text-xl italic text-magnolia mb-4">{title}</h5>

        <p
          className={`text-magnolia text-sm ${
            expanded ? "" : "line-clamp-4"
          } transition-all duration-300`}
        >
          {description}
        </p>
      </div>

      {description.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-argBlue mt-2 text-sm hover:text-magnolia self-start"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default Recommendation;
