import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

/**
 * Wrapper component to allow loaders/spinners to be easily swapped
 */
const Loader = () => (
    <Spinner animation="grow" />);

export default Loader;
