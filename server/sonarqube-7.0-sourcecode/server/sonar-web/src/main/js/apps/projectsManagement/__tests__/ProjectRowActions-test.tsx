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
import * as React from 'react';
import { shallow } from 'enzyme';
import ProjectRowActions, { Props } from '../ProjectRowActions';
import { Visibility } from '../../../app/types';
import { click } from '../../../helpers/testUtils';

jest.mock('../../../api/components', () => ({
  getComponentShow: jest.fn(() => Promise.reject(undefined))
}));

jest.mock('../../../api/nav', () => ({
  getComponentNavigation: jest.fn(() => Promise.resolve())
}));

const project = {
  id: '',
  key: 'project',
  name: 'Project',
  organization: 'org',
  qualifier: 'TRK',
  visibility: Visibility.Private
};

it('restores access', async () => {
  const wrapper = shallowRender();
  expect(wrapper).toMatchSnapshot();

  wrapper.prop<Function>('onToggleClick')();
  await new Promise(setImmediate);
  wrapper.update();
  expect(wrapper).toMatchSnapshot();

  click(wrapper.find('.js-restore-access'));
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});

it('applies permission template', () => {
  const onApplyTemplate = jest.fn();
  const wrapper = shallowRender({ onApplyTemplate });
  click(wrapper.find('.js-apply-template'));
  expect(onApplyTemplate).toBeCalledWith(project);
});

function shallowRender(props: Partial<Props> = {}) {
  const wrapper = shallow(
    <ProjectRowActions
      currentUser={{ login: 'admin' }}
      onApplyTemplate={jest.fn()}
      project={project}
      {...props}
    />
  );
  (wrapper.instance() as ProjectRowActions).mounted = true;
  return wrapper;
}
