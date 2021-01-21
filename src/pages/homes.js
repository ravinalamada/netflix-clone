import React from 'react';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer  from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import HeaderContainer from '../containers/header';
import { OptForm, Feature } from '../components';

function homes() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited Films, Tv programs and more.
          </Feature.Title>
          <Feature.SubTitle>Watch anywhere, cancel anytime</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address"/>
            <OptForm.Button>Join the conversation</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  )
}

export default homes
