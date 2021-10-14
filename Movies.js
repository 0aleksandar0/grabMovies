import React from 'react'
import styled from 'styled-components'
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from "react-redux"

function Movies() {
    const movies = useSelector(selectMovies);

    return (
        <Container>
            <h4>Livecam</h4>
            <Content>
                { movies &&
                    movies.map((movie)=>(
                        <Wrap key={movie.id}>
                            <img src={movie.cardImg} alt="" />
                        </Wrap>
                    ))
                }
                
               
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden; /*becouse the image goes outside the border it needs to set overflow hidden to see the border*/
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;

    iframe {
        width: 100%;
        height: 100%;
        object-fit: cover; /*cover image within the div*/
    }

    &:hover {
        transform: scale(1.05); /*makes the image bigger*/
        border-color: white;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 90%) 0px 26px 30px -10px,
        rgb(0 0 0 / 82%) 0px 16px 10px -10px;
    }
`