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
import {
  RECEIVE_HOLDERS_SUCCESS,
  GRANT_PERMISSION_TO_USER,
  REVOKE_PERMISSION_TO_USER,
  GRANT_PERMISSION_TO_GROUP,
  REVOKE_PERMISSION_FROM_GROUP,
  ERROR
} from './actions';

const error = (state = null, action = {}) => {
  switch (action.type) {
    case RECEIVE_HOLDERS_SUCCESS:
    case GRANT_PERMISSION_TO_USER:
    case REVOKE_PERMISSION_TO_USER:
    case GRANT_PERMISSION_TO_GROUP:
    case REVOKE_PERMISSION_FROM_GROUP:
      return null;
    case ERROR:
      return action.message;
    default:
      return state;
  }
};

export default error;
