import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {

    const { docs, loading } = useFirestore('images');

    return (
        <div className="img-grid">
            {loading && <div className="spinner"></div>}
            {docs && !loading && docs.map(doc => (
                <motion.div 
                    className="img-wrap"
                    layout
                    whileHover={{opacity: 1}}
                    key={doc.id} 
                    onClick={() => setSelectedImg(doc.url)}>
                        <motion.img 
                            src={doc.url}
                            alt="uploaded pic" />
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;