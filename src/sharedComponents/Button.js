import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { UserContext } from '../App';

export default function Buttons() {
  const user = useContext(UserContext);
  return <Button variant='contained'>{user}</Button>;
}
