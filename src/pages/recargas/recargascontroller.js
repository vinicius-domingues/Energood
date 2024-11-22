// controllers/RecargaController.js
import { fetchRecargas } from '../services/RecargaService';
import { useState, useEffect } from 'react';

export const useRecargaController = () => {
    const [recargas, setRecargas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadRecargas = async () => {
            setLoading(true);
            const recargasData = await fetchRecargas();
            setRecargas(recargasData);
            setLoading(false);
        };

        loadRecargas();
    }, []);

    return { recargas, loading };
};
