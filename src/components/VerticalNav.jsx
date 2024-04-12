import '../css/verticalNav.scss';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Button, Box, Flex } from '@radix-ui/themes';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import {
  HeartFilledIcon,
  BookmarkFilledIcon,
  DrawingPinFilledIcon,
} from '@radix-ui/react-icons';
const VerticalNav = () => {
  return (
    <Box pt="7" pr="7" className="verticalNavBox">
      <Flex>
        <div className="verticalNavBuffer"></div>
        <nav className="verticalNav">
          <div className="verticalNav-elements">
            <ul>
              <li>
                <NavLink to="/recipe-book" end>
                  <AccessibleIcon.Root>
                    <BookmarkFilledIcon />
                  </AccessibleIcon.Root>
                  {'   '}Saved Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipe-book/favorite" end>
                  <AccessibleIcon.Root>
                    <HeartFilledIcon />
                  </AccessibleIcon.Root>
                  {'   '}Favorite Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipe-book/want" end>
                  {'   '}
                  <AccessibleIcon.Root>
                    <DrawingPinFilledIcon />
                  </AccessibleIcon.Root>
                  {'     '}Want to Try
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Flex>
    </Box>
  );
};

export default VerticalNav;
