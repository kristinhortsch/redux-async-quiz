import reducer from './dogs';
import { FETCH_DOG_IMAGE } from '../actions/dogs';

describe('reducer', () => {
  it('handles the fetch dog image url', () => {
    const state = {
      imageUrl: {
        status: '',
        message: ''
      }
    };
    const fetchedUrl = reducer(state, {
      type: FETCH_DOG_IMAGE,
      payload: {
        status: 'success',
        message: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg'
      }
    });

    expect(fetchedUrl).toEqual({
      imageUrl: 'https://images.dog.ceo/breeds/sheepdog-english/n02105641_2052.jpg'
    });
  });  
});
