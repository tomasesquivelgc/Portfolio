import PropTypes from 'prop-types';

const ModalInfo = ({ info }) => (
  <>
    <div className="text-center py-2">
      <h3 className="text-3xl pb-2">{info.title}</h3>
      <p className="">{info.text}</p>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-around w-full max-h-96 py-8">
      {info.data.map((data) => (
        <div className="md:w-1/4 w-full relative border border-magnolia bg-prussiaBlue h-2/5 md:h-auto flex md:flex-col" key={info.title}>
          <div className="w-full h-full flex md:items-center md:justify-center overflow-hidden">
            <img className="max-h-full min-h-full max-w-none" src={data.image} alt={info.title} />
          </div>
          <div className="absolute bottom-0 w-full bg-night opacity-75 h-full md:h-1/2 p-4 max-h-full">
            <h2 className="">{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  </>

);

ModalInfo.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default ModalInfo;
