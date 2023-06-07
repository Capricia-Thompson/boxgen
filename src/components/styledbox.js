import styled from 'styled-components'

const StyledBox = styled.div`
    background: ${props => props.bgColor};
    width: ${props => props.size || '75px'};
    height: ${props => props.size || '75px'};`;

export default StyledBox