import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ListItems = ({
    title,
    subtitle,
    pointsData = [],
}) => {
    return (
        <div className='mt-5'>
            {title && (<h2 className="section-heading mb-3">{title}</h2>)}
            <div className='topic-block'>
                {subtitle && (
                    <h4>{subtitle}</h4>
                )}
                <ul className="text-secondary">
                    {pointsData.map((point, index) => (<li key={index}>{point}</li>))}
                </ul>
            </div>
        </div>
    );
}

export default ListItems;