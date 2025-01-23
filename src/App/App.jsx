import { Link } from 'react-router-dom'

import { AppContainer } from './AppStyles'
import { ContactCard } from '../ContactCard/ContactCard'
import { HeadingContainer } from '../shared/Heading/HeadingStyles'
import { Text } from '../shared/Text/Text'
import { PromoCard } from '../PromoCard/PromoCard'
import { FreeTrialForm } from '../FreeTrialForm/FreeTrialForm'

function App() {
    return (
        <AppContainer>
            <HeadingContainer>Learn to code by watching others</HeadingContainer>

            <Text>
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
                but understanding how developers think is invaluable.
            </Text>

            <PromoCard />

            <FreeTrialForm />

            <ContactCard />
        </AppContainer>
    )
}

export default App
