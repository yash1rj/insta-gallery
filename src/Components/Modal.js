import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

    const modalCloseHandler = (event) => {
        if(event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    };

    return (
        <motion.div className="backdrop" 
            onClick={modalCloseHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <motion.img src={selectedImg} 
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                alt='enlarged pic' />
        </motion.div>
    );
};

export default Modal;