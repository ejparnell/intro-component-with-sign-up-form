import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container, FoldOutContainer, ContactInfo } from './ContactCardStyles'

export function ContactCard() {
    const [isFoldedOut, setIsFoldedOut] = useState(false)

    const handleToggle = () => setIsFoldedOut(!isFoldedOut)

    return (
        <>
            <Container onClick={handleToggle}>
                {isFoldedOut ? 'Close' : 'Like what you see?'}
            </Container>

            {isFoldedOut && (
                <FoldOutContainer>
                    <h3>Contact Me</h3>
                    <ContactInfo>
                        <p>Find Me:</p>
                        <Link to='https://github.com/ejparnell' target='_blank'>GitHub</Link>
                        <br />
                        <Link to='https://www.linkedin.com/in/elizabethjparnell/'>LinkedIn</Link>
                        <p>Challenge by:</p>
                        <Link to='https://www.frontendmentor.io?ref=challenge'>Frontend Mentor</Link>
                    </ContactInfo>
                </FoldOutContainer>
            )}
        </>
    );
}