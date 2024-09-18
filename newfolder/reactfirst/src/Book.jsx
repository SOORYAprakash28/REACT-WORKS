import {React} from 'react';
const Book=(props)=>{
    return(
        <div className='book'>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
    );
};
export default Book;
