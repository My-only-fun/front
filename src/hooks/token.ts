import { useState } from 'react';

function getToken(): string {
  const tokenString = localStorage.getItem('access_token');
  if (tokenString) {
    return tokenString;
  }
  return '';
}

function removeToken() {
  localStorage.removeItem('access_token')
}

function useToken() {
  function setToken(userToken: string) {
    localStorage.setItem('access_token', userToken);
  }
  const [token] = useState(getToken());

  return {
    setToken,
    token,
  };
}

export { getToken, useToken, removeToken };