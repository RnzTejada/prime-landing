import React from 'react';

interface Props {
  className: string;
}

const Supply: React.FC<Props> = ({ className }) => (
  <div className={className}>
    <div className="title">
      <h3>
        How <b>$PRIMEX</b> works <span>|</span>
      </h3>
    </div>

    <h2>About Supply</h2>
    <p>
      - Max supply 100.000.000 tokens ( 100 M = 100% )<br /> - Start supply of
      90.000.000 tokens to community ( 90 M = 90% ), bringing 100% to swap to
      bring liquidity to market
      <br /> - Start supply of 10.000.000 ( 10M = 10% ) tokens to team ( this
      tokens are going to be locked and goings to be unlocked in differents
      times )
      <br /> - 1 month - unlock 2.000.000 ( 2M = 2% ) tokens <br />- 4 months -
      unlock 4.000.000 ( 4M = 4% ) tokenss
      <br /> - 12 months - unlock 6.000.000 ( 6M = 6% ) tokens
    </p>
    <h4>Two Steps for Prime project</h4>
    <p>
      <b>$PRIMEX token</b> is going to have *2 step* about her *flationary
      system*: on the first step is going to be <b>Deflationary step</b>, then
      after 24 weeks comes the <b>Low Controlled Inflationary step</b>
    </p>

    <h4>Deflationary Step</h4>

    <p>
      To incentivate *users/investors/mines/buyers/whatever who like invest*, we
      are going to set a deflationary system that is going to burn tokens
      everytime we reach much holders be cause if more people want getting in is
      getting better for all of that who joined before:
      <br />- BURN 2B if we reach 2 000 holders ( 2B = 2 % )<br />- BURN 5B if
      we reach 5 000 holders ( 5B = 5 % )<br />- BURN 7,B if we reach 75 000
      holders ( 7,5B = 7,5 % )<br />- BURN 10B if we reach 100 000 holders ( 10B
      = 10 % )
    </p>

    <h4>Inflationary step</h4>
    <p>
      After 12 months of the our ICO, we are not going to STOP to BURN tokens.{' '}
    </p>
    <p>
      In this step we start to MINT to keep stability and better price for
      people who want to buy data and other things.
    </p>
    <p>
      <b>¿ How much we are going to MINT ?</b>
    </p>
    <p>
      We are going to mint 2% every year ( 0,17 % per month ). So depending of
      how many holders we got on the first 12 months, can be:
    </p>
    <p>- if we reach 2 000 holders ⇒ 1 year</p>
    <p>- if we reach 5 000 holders ⇒ 3,5 years</p>
    <p>- if we reach 75 000 holders ⇒ 7,25 years</p>
    <p>- if we reach 100 000 holders ⇒ 12,25 years</p>
  </div>
);

export default Supply;
