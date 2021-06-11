import { useEffect, useState } from "react";
import { projectFireStore } from "../Firebase/config";

const useFirestore = (collection) => {

    const [docs, setDocs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const unsub = projectFireStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                
                snap.docs.forEach(doc => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });

                setDocs(documents);
                setLoading(false);
            });

        return () => unsub();

    }, [collection]);

    return { docs, loading };
};

export default useFirestore;