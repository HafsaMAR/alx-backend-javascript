#!/usr/bin/node
/* eslint-disable no-shadow */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(filename);
  return Promise.allSettled([userPromise, photoPromise])
    .then((result) => result.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })))
    .catch((error) => {
      console.error('Error:', error);
      return [];
    });
}
