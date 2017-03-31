import { PropTypes } from 'react';
import styled from 'styled-components';

import THEME from '../../constants/theme';

const Button = styled.button`
    /* Box model */
    width: ${props => (props.fullWidth ? '100%' : props.width)}
    padding: .6rem 1rem;

    /* Typo */
    color: ${props => props.theme.color};

    /* Visual */
    background-color: ${props => props.theme.background};
    border: ${props => props.theme.border};
    outline: none;
`;

Button.defaultProps = {
    fullWidth: false,
    width: 'auto',
    theme: THEME.button.default
};

Button.propTypes = {
    fullWidth: PropTypes.bool,
    width: PropTypes.string
};

export default Button;
