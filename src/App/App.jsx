import { Link } from 'react-router-dom'

import { AppContainer, ContentContainer } from './AppStyles'
import { ContactCard } from '../ContactCard/ContactCard'
import { HeadingContainer } from '../shared/Heading/HeadingStyles'
import { Text } from '../shared/Text/Text'
import { PromoCard } from '../PromoCard/PromoCard'
import { FreeTrialForm } from '../FreeTrialForm/FreeTrialForm'

function App() {
    return (
        <AppContainer>
            <ContentContainer>
                <HeadingContainer>Learn to code by watching others</HeadingContainer>

                <Text>
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                    but understanding how developers think is invaluable.
                </Text>
            </ContentContainer>
            <ContentContainer>
                <PromoCard />

                <FreeTrialForm />
            </ContentContainer>
            <ContactCard />
        </AppContainer>
    )
}

export default App
