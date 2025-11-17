 
'use client'

import FaqArea from '@/components/faq/FaqArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



// export const metadata = {
//   title: "FAQ - Indalio Premium Workspace Accessories | Common Questions",
//   description: "Find answers to frequently asked questions about Indalio monitor arms, installation, VESA compatibility, warranty, and product specifications.",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;