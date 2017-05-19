import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const MovieLink = ({movie}) => (
    <li>
        <Link as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
            <a>{movie.Title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }
            a:hover {
                opacity: 0.6;
            }
            
        `}</style>
    </li>
)

const Index =  props => (
    <Layout>
        <h1>Pokemon Movies</h1>
        <ul>
            {props.movies.map(movie => (
                <MovieLink key={movie.imdbID} movie={movie} />
            ))}
        </ul>
        <style jsx>{`
            h1 {
                font-family: "Arial";
            }
            ul {
                padding: 0;
            }
        `}</style>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('http://www.omdbapi.com/?s=pokemon')
    const data = await res.json()

    console.log(`Movie data fetched. Count ${data.Search.length}`)

    return {
        movies: data.Search
    }
}

export default Index;
