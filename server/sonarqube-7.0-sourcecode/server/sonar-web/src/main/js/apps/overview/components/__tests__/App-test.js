/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import OverviewApp from '../OverviewApp';
import EmptyOverview from '../EmptyOverview';

it('should render OverviewApp', () => {
  const component = { key: 'foo', analysisDate: '2016-01-01' };
  const output = shallow(<App component={component} />);
  expect(output.type()).toBe(OverviewApp);
});

it('should render EmptyOverview', () => {
  const component = { key: 'foo' };
  const output = shallow(<App component={component} />);
  expect(output.type()).toBe(EmptyOverview);
});

it('redirects on Code page for files', () => {
  const branch = { isMain: false, name: 'b' };
  const component = {
    breadcrumbs: [{ key: 'project' }, { key: 'foo' }],
    key: 'foo',
    qualifier: 'FIL'
  };
  const replace = jest.fn();
  mount(<App branch={branch} component={component} />, { context: { router: { replace } } });
  expect(replace).toBeCalledWith({
    pathname: '/code',
    query: { branch: 'b', id: 'project', selected: 'foo' }
  });
});
