const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_BASEURL

const requests = {
    fetchHeroBanner: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    fetchTrendingMovies: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
    fetchTVShows: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
    fetchUpcomingMovies: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,

}

export default requests