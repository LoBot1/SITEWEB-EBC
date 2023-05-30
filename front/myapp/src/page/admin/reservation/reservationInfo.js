import md5 from "md5";
import React, { useMemo } from 'react';
import { useState, useEffect } from "react";

import { reservationDelete_ } from "../../../components/reservation/reservationDelete";
import { reservationUpdate_ } from "../../../components/reservation/reservationUpdate";
import { reservationInsert_ } from "../../../components/reservation/reservationInsert";
export default function ReservationInfo(props) {
    const [price, setPrice] = useState(props.reservation.price);
    const [avaible, setAvaible] = useState(props.reservation.avaible);
    const [start_date, setStart_Date] = useState(props.reservation.start_date);
    const [finish_date, setFinish_Date] = useState(props.reservation.finish_date);
    const [category, setCategory] = useState(props.reservation.category);
    const [place, setPlace] = useState(props.reservation.place);
    const [coach_name, setCoach_name] = useState(props.reservation.coach_name);
    const [id, setId] = useState(props.reservation.id);
    const [desc, setDesc] = useState(props.reservation.desc);   

    const [desc2, setDesc2] = useState(props.reservation.desc2);
    const [mainImage, setMainImage] = useState(props.reservation.mainImage);
    const [image1, setImage1] = useState(props.reservation.image1);
    const [image2, setImage2] = useState(props.reservation.image2);
    const [image3, setImage3] = useState(props.reservation.image3);
    const [video, setVideo] = useState(props.reservation.video);


    const changePrice = useMemo(() => (params) => {
        setPrice(params.target.value)
    }, [price])
    const changeAvaible = useMemo(() => (params) => {
        setAvaible(params.target.value)
    }, [avaible])
    const changeCategory = useMemo(() => (params) => {
        setCategory(params.target.value)
    }, [category])
    const changeStart_Date = useMemo(() => (params) => {
        setStart_Date(params.target.value)
    }, [start_date])
    const changeFinish_Date = useMemo(() => (params) => {
        setFinish_Date(params.target.value)
    }, [finish_date])
    const changePlace = useMemo(() => (params) => {
        setPlace(params.target.value)
    }, [place])
    const changeCoach_name = useMemo(() => (params) => {
        setCoach_name(params.target.value)
    }, [coach_name])
    const changeId = useMemo(() => (params) => {
        setId(params.target.value)
    }, [id])
    const changeDesc = useMemo(() => (params) => {
        setDesc(params.target.value)
    }, [desc])
    const changeDesc2 = useMemo(() => (params) => {
        setDesc2(params.target.value)
    }, [desc2])

    const changeMainImage = useMemo(() => (params) => {
        setMainImage(params.target.value)
    }, [mainImage])
    const changeImage1 = useMemo(() => (params) => {
        setImage1(params.target.value)
    }, [image1])
    const changeImage2 = useMemo(() => (params) => {
        setImage2(params.target.value)
    }, [image2])
    const changeImage3 = useMemo(() => (params) => {
        setImage3(params.target.value)
    }, [image3])
    const changeVideo = useMemo(() => (params) => {
        setVideo(params.target.value)
    }, [video])

    const onClickDeleteReservation = async () => {
        let data = {
            "id": id,
        };
        reservationDelete_(data);
        props.setAlerts(10); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);
    }

    const onClickInsertReservation = async () => {
        let datas = {
            "coach_name": coach_name,
            "place": place,
            "start_date": start_date,
            "finish_date": finish_date,
            "category": category,
            "price": price,
            "desc": desc,
            "desc2": desc2,
            "avaible": avaible,
            "mainImage": mainImage,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "video": video
        };
        reservationInsert_(datas);
        props.setAlerts(9); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);

    }

    const onClickUpdateReservation = async () => {
        let datas = {
            "id": id,
            "coach_name": coach_name,
            "place": place,
            "start_date": start_date,
            "finish_date": finish_date,
            "category": category,
            "price": price,
            "desc": desc,
            "desc2": desc2,
            "avaible": avaible,
            "mainImage": mainImage,
            "image1": image1,
            "image2": image2,
            "image3": image3,
            "video": video
        };
        reservationUpdate_(datas);
        props.setAlerts(8); //toast d'alerte
        props.setShow(true); //toast afficher
        props.setColors(0); //toast vert
        setTimeout(() => { window.location.replace('/admin_reservation'); }, 1000);
    }

    return <div className="rsrv-info-contain">

        <form>
            <div className="info-resadd">
                <div className="info3"><input type="hidden" id="reservationId" value={id} onChange={changeId} /></div>
                <div className="info3"><p>Nom de Coach</p><input placeholder="Nom du coach" type="text" id="coach_name" onChange={changeCoach_name} defaultValue={coach_name} /></div>
                <div className="info3"><p>Lieu</p><input placeholder="Lieu" type="text" id="place" onChange={changePlace} defaultValue={place} /></div>
                <div className="info3"><p>Date - Start</p><input placeholder="Date de début (jour/mois/année) (j/m/aaaa) " type="date" id="start_date" onChange={changeStart_Date} defaultValue={start_date} /></div>
                <div className="info3"><p>Date - End</p><input placeholder="Date de fin (jour/mois/année) (j/m/aaaa) " type="date" id="finish_date" onChange={changeFinish_Date} defaultValue={finish_date} /></div>
                <div className="info3"><p>Catégorie d'âge</p><input placeholder="Catégorie d'âge" type="text" id="category" onChange={changeCategory} defaultValue={category} /></div>
                <div className="info3"><p>Prix</p><input placeholder="Prix" type="text" id="price" onChange={changePrice} defaultValue={price} /></div>
                <div className="info3"><p>Description</p><input placeholder="Desc" type="text" id="desc" onChange={changeDesc} defaultValue={desc} /></div>
                <div className="info3"><p>Description2</p><input placeholder="Desc2" type="text" id="desc2" onChange={changeDesc2} defaultValue={desc2} /></div>
                <div className="info3"><p>Disponible</p><input placeholder="Disponible (true or false)" type="text" id="avaible" onChange={changeAvaible} defaultValue={avaible} /></div>
                
                <div className="info3"><p>Image Pricipale</p><input placeholder="Image Pricipale" type="text" id="mainImage" onChange={changeMainImage} defaultValue={mainImage} /></div>
                <div className="info3"><p>Image1</p><input placeholder="Image1" type="text" id="image1" onChange={changeImage1} defaultValue={image1} /></div>
                <div className="info3"><p>Image2</p><input placeholder="Image2" type="text" id="image2" onChange={changeImage2} defaultValue={image2} /></div>
                <div className="info3"><p>Image3</p><input placeholder="Image3" type="text" id="image3" onChange={changeImage3} defaultValue={image3} /></div>
                <div className="info3"><p>Video</p><input placeholder="Video" type="text" id="vide" onChange={changeVideo} defaultValue={video} /></div>
               



            </div>
            <div className="checka-add">
                <input type="button" value="Modifier la reservation" onClick={onClickUpdateReservation} />
                <input type="button" value="Supprimer la reservation" onClick={onClickDeleteReservation} />
                <input type="button" value="Ajouter une reservation" onClick={onClickInsertReservation} />
            </div>
        </form>
    </div>
}