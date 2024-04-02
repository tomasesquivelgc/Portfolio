import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};
const ModalInfo = ({info}) => {
  return (
    <>
      <div className="self-center py-2">
        <h3 className="text-3xl pb-2">Title goes here</h3>
        <p className="">Some flavour text over here</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around w-full max-h-96 py-8">
        {info.map((info) => (
          <Tilt
          options={defaultOptions}
          className="md:w-1/4 w-full relative border border-magnolia bg-prussiaBlue h-24 md:h-auto" key={info.title}>
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img className="max-h-full min-h-full max-w-none" src={info.image} alt={info.title} />
            </div>
            <div className="absolute bottom-0 w-full bg-night opacity-75 h-full p-4 max-h-full">
              <h2 className="">{info.title}</h2>
              <p>{info.description}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </>
    
  )
}

export default ModalInfo;