import React from 'react';
import { shallow } from 'enzyme';
import { IconSVG } from '../../../';

import VerticalNavigationItem from '../VerticalNavigationItem';

const getComponent = (props = {}) => shallow(
  <VerticalNavigationItem {...props}>Sample</VerticalNavigationItem>
);

describe('<VerticalNavigationSection />', () => {
  it('applies rest props to action', () => {
    const mounted = getComponent({ 'aria-test': 'foo' });
    expect(mounted.find('.slds-nav-vertical__action a').prop('aria-test')).toEqual('foo');
  });

  it('renders a notification badge', () => {
    const mounted = getComponent({ notification: 3, notificationLabel: 'foo' });
    const $badge = mounted.find('.slds-badge');
    expect($badge.exists()).toBeTruthy();
    expect($badge.find('.slds-assistive-text').text()).toEqual('foo');
  });

  it('renders an icon', () => {
    const icon = { icon: 'foo', sprite: 'utility', title: 'bar' };
    const mounted = getComponent({ icon });
    expect(mounted.find(IconSVG).prop('icon')).toEqual('foo');
  });
});
