import React from 'react'
import CookieConsent from 'react-cookie-consent'

export default function CookieConsentSection() {
    return (
        <div>
            <CookieConsent
            location="bottom"
            buttonText="Consent"
            cookieName="Afunja"
            style={{ background: "#2B373B" }}
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={150}
        >
            <Container>
                <small>This website uses third party cookies to enhance the user experience.</small>
            </Container>
        </CookieConsent>
        </div>
    );
}