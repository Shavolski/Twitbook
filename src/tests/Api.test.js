import axios from 'axios';
import { fetchUserData } from './';
import { fetchPostData } from './';

jest.mock('axios');

//Test if the user api fetches data
describe('fetchUserData', () => {
  it('fetches successfully data from an API', async () => {
    const userData = {
      [
        {
          id: '1',
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(userData));

    await expect(fetchData('react')).resolves.toEqual(userData);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});



//Tests if the post api fetches data
describe('fetchPostData', () => {
  it('fetches successfully data from an API', async () => {
    const postData = {
      [
        {
          userID:'1',
          id: '1',
        },
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(postData));

    await expect(fetchData('react')).resolves.toEqual(postData);
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});
