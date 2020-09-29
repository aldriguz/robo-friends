import React from 'react';
import Card from '../components/Card';

const CardList = ({ robots }) => {
    /*if(true){
        throw new Error('NOOOO');
    }*/

    const cardsArray = robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    });

    return(
        <React.Fragment>
            {cardsArray}
        </React.Fragment>
    );
}

export default CardList;