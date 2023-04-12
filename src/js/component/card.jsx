import React from "react";
const Card = () => {
    return(
    <div class="card" style={{width: '18rem'}}>
        <img src="/workspace/react-hello/src/img/485x325.png" class="card-img-top"/>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
};

export default Card