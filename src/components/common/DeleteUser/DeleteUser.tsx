'use client';

import React, { MouseEvent } from 'react';

const DeleteUser = ({ userId }: { userId: string }) => {
  const handleDeleteUser = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // TODO: make sure that the user really wants to delete the user and then delete both the user and the profile
    await fetch(`http://localhost:4000/api/profiles/${userId}`, {
      method: 'DELETE'
    });
    await fetch(`http://localhost:4000/api/users/${userId}`, {
      method: 'DELETE'
    });

    // window.location.reload();
  };
  return (
    <a href='/' onClick={handleDeleteUser}>
      Delete User
    </a>
  );
};

export default DeleteUser;
