import React from 'react'

const Popup = ({selected, closePopup}) => {
    return (
        <section className = 'popup'>
           <div className = 'context'>
             <h2>{selected.Title}<span> ({selected.Year})</span></h2>
             <p className = "rating"> Rating: {selected.imdbRating}</p>
             <div className = "plot">
                 <img src = {selected.Poster} alt= ""/>
                 <p>{selected.Plot}</p>
             </div>
             <button className = 'close' onClick={closePopup}> Close </button>
           </div>
        </section>
        
        
    )
}

export default Popup