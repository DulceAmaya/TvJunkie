import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>¡Checa las recomendaciones de la semana!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='img/movie-1.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Romcom' 
                            datatype='movie'
                            title='Seeking a friend for the end of the world'
                        />
                        <CardItem 
                            src='img/movie-2.jfif'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Drama' 
                            datatype='movie'
                            title='Adopt a Highway'
                        />
                        <CardItem 
                            src='img/movie-3.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Comedia' 
                            datatype='movie'
                            title='Mr. Right'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='img/movie-4.jpeg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Drama' 
                            datatype='movie'
                            title='Room'
                        />
                        <CardItem 
                            src='img/movie-5.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Familiar' 
                            datatype='movie'
                            title='Paddington 2'
                        />
                        <CardItem 
                            src='img/movie-6.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Acción' 
                            datatype='movie'
                            title="Ocean's 8"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src='img/tv-1.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Comedia' 
                            datatype='tvshow'
                            title='Crashing'
                        />
                        <CardItem 
                            src='img/tv-2.jfif'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='Drama' 
                            datatype='tvshow'
                            title='Outlander'
                        />
                        <CardItem 
                            src='img/tv-3.jpg'
                            text='Lorem ipsum dolor sit amet consectetur adipiscing elit lectus'
                            label='SciFi' 
                            datatype='tvshow'
                            title='Into the night'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
