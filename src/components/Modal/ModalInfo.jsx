const ModalInfo = ({info}) => {
  return (
    <>
      <div className="self-center py-2">
        <h3 className="text-3xl pb-2">Title goes here</h3>
        <p className="">Some flavour text over here</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around w-full max-h-96 py-8">
        {info.map((info) => (
          <div className="md:w-1/4 w-full relative border border-magnolia bg-prussiaBlue h-28 md:h-auto flex md:flex-col" key={info.title}>
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img className="max-h-full min-h-full max-w-none" src={info.image} alt={info.title} />
            </div>
            <div className="absolute bottom-0 w-full bg-night opacity-75 h-full md:h-1/2 p-4 max-h-full">
              <h2 className="">{info.title}</h2>
              <p>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
    
  )
}

export default ModalInfo;