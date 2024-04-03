import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModalInfo = ({ info }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div className="overflow-scroll md:overflow-visible">
      <div className="text-center py-2">
        <h3 className="text-4xl pb-2">{info.title}</h3>
        <p className="">{info.text}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-around w-full h-full md:max-h-96 py-8">
        {info.data.map((data, index) => (
          <motion.div
            className={`md:w-1/3 w-full border-2 border-argBlue relative bg-prussiaBlue h-1/3 md:h-auto flex md:flex-col ${
              expandedItem === index ? 'md:h-auto' : ''
            } transition-all duration-500 ease-in-out`}
            key={index}
            onClick={() => setExpandedItem(index)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full flex md:items-center md:justify-center overflow-hidden">
              <img className="max-h-full min-h-full max-w-none" src={data.image} alt={info.title} />
            </div>
            <motion.div
              className={`absolute bottom-0 right-0 md:left-0 h-full md:h-1/2 w-1/2 md:w-full bg-night opacity-80 p-4 ${
                expandedItem === index ? 'md:h-full w-full' : ''
              } transition-all duration-500 ease-in-out`}
            >
              <h4 className="text-lg md:text-base lg:text-lg md:pt-2">{data.title}</h4>
              <p className="text-argBlue pb-2 md:pb-4">{data.description}</p>
              {expandedItem === index && (
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
