import { useEffect, useState } from 'react';
import { projectStorage, projectFireStore, timestamp } from '../Firebase/config';

const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // name reference of to be uploaded file
        const storageRef = projectStorage.ref(file.name);

        // collection reference of firebase 
        const collectionRef = projectFireStore.collection('images');

        // upload file to firebase storage
        // listening on state_changed event during file upload and trigerring a function with the
        // snapshot of file in time during upload
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({
                url,
                createdAt
            });
            setUrl(url);
        });
    }, [file]);

    return { progress, url, error };
};

export default useStorage;