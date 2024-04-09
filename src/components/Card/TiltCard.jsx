import propTypes from 'prop-types';

const Card = ({ title, icon }) => (
  <div
    className="flex flex-col items-center w-full h-full"
  >
    <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-lg justify-center shadow-lg overflow-hidden p-2 flex bg-gradient-to-br from-richBlack via-argBlue to-magnolia">
      <img className="w-full h-full object-cover m-auto" src={icon} alt={title} loading="lazy" />
    </div>
    <h3 className="text-center text-lg md:text-xl font-chivo text-magnolia opacity-80 py-3">{title}</h3>
  </div>

);

export default Card;

Card.propTypes = {
  title: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
