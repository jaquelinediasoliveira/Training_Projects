import { Masonry } from '@mui/lab';

import axios from "axios";
import { useEffect, useState } from 'react';

export default function ImageMasonry({ searchValue }) {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const accessKey = import.meta.env.VITE_API_KEY;;

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            try {
                const url = searchValue
                    ? `https://api.unsplash.com/search/photos?query=${searchValue}&page=1&per_page=20&client_id=${accessKey}`
                    : `https://api.unsplash.com/photos?page=1&per_page=20&client_id=${accessKey}`;

                const response = await axios.get(url);
                setImages(searchValue ? response.data.results : response.data);
            } catch (err) {
                setError("Error loading images:" + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [accessKey, searchValue]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Masonry columns={5} spacing={2}>
            {images.length > 0 ? (
                images.map((image) => (
                    <div key={image.id} className="image-item">
                        <img src={image.urls.small} alt={image.alt_description} loading="lazy"
                            style={{
                                borderRadius: 4,
                                display: 'block',
                                width: '100%',
                            }} />
                        <p style={{ color: ' #767676', fontSize: '12px', margin: 0 }}>Foto por {image.user.name} no Unsplash</p>
                    </div>
                ))
            ) : (
                <p>No results for current search.</p>
            )}
        </Masonry>
    );
}