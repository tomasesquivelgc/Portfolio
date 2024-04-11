import propTypes from 'prop-types';

const Card = ({ title, icon, isInView, index }) => (
  <div
  style={{
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1 + 0.3}s`
  }}
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
