import styled from 'styled-components'
import { Link as RouterLink } from 'gatsby'

export const Posts = styled.ol`
    list-style-type: none;
    margin: 0;
`

export const Post = styled.li`
    margin: 0;

    &:hover {
        h2 {
            transform: scale(1.02) translate(7px);
        }
    }
`

export const Link = styled(RouterLink)`
    color: inherit;
    display: block;
    margin: 1rem 0;
    padding: 0.5rem 0;
    text-decoration: none;
`

export const Title = styled.h2`
    color: #493738;
    font-size: 35px;
    font-weight: bold;
    hyphens: auto;
    margin-bottom: 10px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 800px) {
        font-size: 30px;
    }
`

export const PublishedDate = styled.p`
    color: rgba(87, 65, 66, 0.5);
    font-size: 0.7rem;
`

export const Separator = styled.div`
    background: rgba(87, 65, 66, 0.2);
    height: 2px;
    width: 20%;
`
