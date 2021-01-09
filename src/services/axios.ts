import axios from 'axios';

const actCamp = axios.create({
  baseURL: `${process.env.REACT_APP_PROXY_URL}${process.env.REACT_APP_BASE_URL}`,
  headers: { 'Api-Token': process.env.REACT_APP_API_KEY }
});

export const getContacts = async () => {
  try {
    const result = await actCamp.get('/contacts');
    return {
      success: true,
      data: result.data.contacts,
      error: ''
    };
  } catch (_) {
    return {
      success: false,
      data: null,
      error: 'Something went wrong!'
    };
  }
};