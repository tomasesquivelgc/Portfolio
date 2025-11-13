function Recommendation ({ name, title, description }) {
  return (
    <div className="border border-night p-4 bg-prussiaBlue hover:border-argBlue hover:cursor-pointer transition-all duration-300 ease-in-out">
      <h4 className="text-2xl text-argBlue mb-2 hover:text-magnolia">
        {name}
      </h4>
      <h5 className="text-xl italic text-magnolia mb-4">{title}</h5>

      <p className="text-magnolia">{description}</p>
    </div>
  );
}

export default Recommendation;