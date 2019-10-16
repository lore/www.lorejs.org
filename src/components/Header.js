import React from 'react';
import TailwindLogo from './TailwindLogo';
import SearchIcon from './SearchIcon';
import GithubIcon from './GithubIcon';
import DiscordIcon from './DiscordIcon';
import TwitterIcon from './TwitterIcon';
import LoreLogo from '../assets/images/logos/logo.png';
import LoreLogoText from '../assets/images/logos/lore_logo_text.png';
import AlgoliaSearch from './AlgoliaSearch';

export default function() {
  return (
    <div id="header" className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative mx-auto px-6">
        <div className="flex items-center -mx-6">
          <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
            <div className="flex items-center">
              <a href="/" className="block lg:mr-4">
                <div className="flex">
                  <img className="h-8 my-auto mr-1" style={{ marginTop: '-2px' }} src={LoreLogo} />
                  <img className="h-8 m-auto" src={LoreLogoText} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
            <div className="w-full lg:px-6 xl:w-3/4 xl:px-12">
              <AlgoliaSearch/>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
              <div className="flex justify-start items-center text-gray-500">
                <a className="block flex items-center hover:text-gray-100 text-gray-400 mr-5" href="https://github.com/lore/lore">
                  <GithubIcon />
                </a>
                <a className="block flex items-center hover:text-gray-100 text-gray-400 mr-5" href="https://twitter.com/loreframework">
                  <TwitterIcon/>
                </a>
                {/*<a className="block flex items-center hover:text-gray-700" href="/discord">*/}
                {/*  <DiscordIcon />*/}
                {/*</a>*/}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
