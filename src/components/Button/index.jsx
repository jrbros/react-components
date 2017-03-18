import { PropTypes } from 'react';
import styled from 'styled-components';

import { GRAY, GRAY_LIGHT } from '../../constants/colors';

const Button = styled.button`
    /* Box model */
    width: ${props => (props.fullWidth ? '100%' : props.width)}
    padding: .6rem 1rem;

    /* Typo */
    color: ${GRAY};

    /* Visual */
    background-color: ${GRAY_LIGHT};
    border: none;
    outline: none;
`;

Button.defaultProps = {
    fullWidth: false,
    width: 'auto'
};

Button.propTypes = {
    fullWidth: PropTypes.bool,
    width: PropTypes.string
};

export default Button;
