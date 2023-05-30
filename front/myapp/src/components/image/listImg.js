import { useEffect, useState } from "react";
import { ReservationImg_ } from "../../api/reservation";
import { NewsImg_ } from "../../api/news";

export function ListImg ()
{
    const [list, setList] = useState();
    const [resa, setResa] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        const reservationFetched = ReservationImg_();
        reservationFetched
            .then(result => setResa(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, [resa]);

    useEffect(() => {
        const reservationFetched = NewsImg_();
        reservationFetched
            .then(result => setNews(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, [news]);

    

    return resa
}