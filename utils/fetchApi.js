import axios from 'axios';

const baseUrl = 'https://bayut.p.rapidapi.com'

//headers: {
//    'X-RapidAPI-Key': '50abd5cb12msha22aa72d0314c95p1cea52jsn5956d0ecab91',
//    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '50abd5cb12msha22aa72d0314c95p1cea52jsn5956d0ecab91',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
}

return data;
