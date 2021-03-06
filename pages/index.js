import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const MovieLink = ({movie}) => (
    <li>
        <Link prefetch as={`/p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
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
            {props.movies && props.movies.map(movie => (
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
    const res = await fetch('https://www.omdbapi.com/?apikey=c1fdf939&s=pokemon')
    const data = await res.json()
    console.log('Data: ' + JSON.stringify(data));

    console.log(`Movie data fetched. Count ${data.Search && data.Search.length}`)

    return {
        movies: data.Search
    }
}

export default Index;
