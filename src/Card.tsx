import React from 'react';
import styled, { css } from 'styled-components';

const BaseCard = css`
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const StyledCard = styled.div<{ darkMode: boolean }>`
    ${props => props.darkMode && `background-color: #333;
    color: white;`}
    ${BaseCard}
`

type CardProps = {
    children: React.ReactNode
    darkMode?: boolean
}

const Card = ({ children, darkMode }: CardProps) => {
    return <StyledCard darkMode={!!darkMode}>
        {children}
    </StyledCard>
}

const CardTitle = ({children}: {children: React.ReactNode}) => (<h2>{children}</h2>) 
const CardBody = ({children}: {children: React.ReactNode}) => (<div>{children}</div>)

Card.Body = CardBody;
Card.Title = CardTitle;
export default Card;