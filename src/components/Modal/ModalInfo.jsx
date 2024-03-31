const ModalInfo = ({info}) =>{
    return (
      <div className="flex">
        {info.map((info) => (
          <div className="w-1/3" key={info.title}>
            <img className="" src={info.image} alt={info.title} />
              <h2>{info.title}</h2>
              <p>{info.description}</p>
          </div>
        ))}
      </div>
      
    )
}

export default ModalInfo;