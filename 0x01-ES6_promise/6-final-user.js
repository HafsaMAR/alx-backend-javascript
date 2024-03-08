#!/usr/bin/node
/* eslint-disable no-shadow */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const allPromises = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(filename)]);
  return allPromises.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  }));
}
