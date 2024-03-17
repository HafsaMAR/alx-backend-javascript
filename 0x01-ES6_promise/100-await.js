#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photo, user] = await Promise.all([
    uploadPhoto(),
    createUser(),
  ]);

  return !photo || !user ? { photo: null, user: null } : { photo, user };
}
