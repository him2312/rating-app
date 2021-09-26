import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Star.css';

export function Star(props) {
    const [rating, setRating] = useState('');
    const [uuid, setUuid] = useState('');

    useEffect(() => {
        addCheckedToValue();
    }, [props]);

    const addCheckedToValue = () => {
        if (!rating) {
            setRating(Math.round(props.rating * 2));  
        }
        setUuid(uuidv4());
    }

    const updateRatingAndParent = (value) => {
        let updateRating = Number(value);
        setRating(updateRating);
        props.updateParent(updateRating / 2);
    }

    return (
        <fieldset className={`rate ${props.resize ? 'resize' : ''} ${props.leftShift ? 'left-shift' : ''}`} disabled={props.viewOnly}>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating10`} name={`${uuid}-rating`} value="10" checked={rating === 10}/><label htmlFor={`${uuid}-rating10`} title="5 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating9`} name={`${uuid}-rating`} value="9"  checked={rating === 9}/><label className="half" htmlFor={`${uuid}-rating9`} title="4 1/2 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating8`} name={`${uuid}-rating`} value="8"  checked={rating === 8}/><label htmlFor={`${uuid}-rating8`} title="4 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating7`} name={`${uuid}-rating`} value="7"  checked={rating === 7}/><label className="half" htmlFor={`${uuid}-rating7`} title="3 1/2 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating6`} name={`${uuid}-rating`} value="6"  checked={rating === 6}/><label htmlFor={`${uuid}-rating6`} title="3 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating5`} name={`${uuid}-rating`} value="5"  checked={rating === 5}/><label className="half" htmlFor={`${uuid}-rating5`} title="2 1/2 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating4`} name={`${uuid}-rating`} value="4"  checked={rating === 4}/><label htmlFor={`${uuid}-rating4`} title="2 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating3`} name={`${uuid}-rating`} value="3"  checked={rating === 3}/><label className="half" htmlFor={`${uuid}-rating3`} title="1 1/2 stars"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating2`} name={`${uuid}-rating`} value="2"  checked={rating === 2}/><label htmlFor={`${uuid}-rating2`} title="1 star"></label>
            <input onChange={(e) => updateRatingAndParent(e.target.value)} type="radio" id={`${uuid}-rating1`} name={`${uuid}-rating`} value="1"  checked={rating === 1}/><label className="half" htmlFor={`${uuid}-rating1`} title="1/2 star"></label>
        </fieldset>
    )
}