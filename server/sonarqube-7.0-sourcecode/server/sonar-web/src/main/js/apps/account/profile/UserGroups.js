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
import PropTypes from 'prop-types';
import { translate } from '../../../helpers/l10n';

export default class UserGroups extends React.PureComponent {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { groups } = this.props;

    return (
      <div>
        <h2 className="spacer-bottom">{translate('my_profile.groups')}</h2>
        <ul id="groups">
          {groups.map(group => (
            <li key={group} className="little-spacer-bottom" title={group}>
              {group}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
