import React from 'react';
import FaqsContainer from '../containers/faqs';
import JumbotronContainer  from '../containers/jumbotron';
import FooterContainer from '../containers/footer';


function homes() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  )
}

export default homes
