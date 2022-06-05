import React from 'react';


const Cards = ({name, emoji, meaning}) => {
   
    return (
        <>
            
                <div className="term">
                    <dt>
                        <span className="emoji" role="img" aria-label={name}>
                            {emoji}
                        </span>
                        <span>
                            {name}
                        </span> 
                    </dt>
                    <dd>
                        {meaning}
                    </dd>
                </div>
            
        </>
    );
}

export default Cards;

/* <h1>
        <span>Emojipedia</span>
      </h1>
        <dl className="dictionary">
          {Emojipedia.map(createEntry)}
        </dl> */




        // function createEntry(emoji){
        //     return <Cards
        //     id={emoji.id}
        //     name={emoji.name}
        //     emoji={emoji.emoji}
        //     meaning={emoji.meaning}
        //     />
        //   }