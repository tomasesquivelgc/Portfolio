const ModalInfo = ({info}) => {
  return (
    <div className="flex gap-4 justify-between w-full max-h-72">
      {info.map((info) => (
        <div className="w-1/3 relative border border-magnolia bg-prussiaBlue" key={info.title}>
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img className="max-h-full max-w-none" src={info.image} alt={info.title} />
          </div>
          <div className="absolute bottom-0 w-full bg-night opacity-80 p-4">
            <h2>{info.title}</h2>
            <p>{info.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ModalInfo;