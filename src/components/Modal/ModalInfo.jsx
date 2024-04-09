import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ModalInfo = ({ info }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (title) => {
    if (expandedItem === title) {
      return () => setExpandedItem(null);
    }
    return () => setExpandedItem(title);
  };

  return (
    <div className="overflow-scroll md:overflow-visible">
      <div className="text-center py-2">
        <h3 className="text-4xl pb-2">{info.title}</h3>
        <p className="text-xl">{info.text}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around w-full h-full md:max-h-96 py-8">
        {info.data.map((data, index) => (
          <motion.div
            className={`md:w-1/3 w-full border border-night p-1 hover:border-argBlue hover:cursor-pointer relative bg-prussiaBlue h-1/3 md:h-auto flex md:flex-col ${
              expandedItem === data.title ? 'md:h-auto' : ''
            } transition-all duration-500 ease-in-out`}
            key={data.title}
            onClick={handleExpand(data.title)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="w-full h-full flex md:items-center md:justify-center overflow-hidden">
              <img className="max-h-full min-h-full max-w-none" src={data.image} alt={info.title} loading="lazy" />
            </div>
            <motion.div
              className={`absolute bottom-0 right-0 md:left-0 h-full md:h-1/2 w-1/2 md:w-full bg-night p-4 ${
                expandedItem === data.title ? 'md:h-full w-full opacity-100' : 'opacity-80'
              } transition-all duration-500 ease-in-out`}
            >
              <h4 className="text-lg md:text-base lg:text-lg md:pt-2">{data.title}</h4>
              <p className="text-argBlue pb-2 md:pb-4">{data.description}</p>
              {expandedItem === data.title && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  {data.expanded}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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
