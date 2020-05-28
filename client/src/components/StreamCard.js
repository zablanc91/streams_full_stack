import React from 'react';
import { Link } from 'react-router-dom';

const StreamCard = ({id, name, description}) => {
    return(
        <div className="col-md-4" key={id}>
            <div className="card">
                <div className="card-header">
                    <Link to={`/streams/${id}`} >
                        {name}
                    </Link>    
                </div>
                <div className="card-body">
                    {description}
                </div>
            </div>
        </div> 
    );
}

export default StreamCard;