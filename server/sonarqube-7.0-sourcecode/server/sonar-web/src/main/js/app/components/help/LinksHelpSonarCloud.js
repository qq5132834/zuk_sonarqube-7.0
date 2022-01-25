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
// @flow
import React from 'react';
import { Link } from 'react-router';
import { translate } from '../../../helpers/l10n';

/*::
type Props = { onClose: () => void };
*/

export default function LinksHelpSonarCloud({ onClose } /*: Props */) {
  return (
    <div>
      <h2 className="spacer-top spacer-bottom">{translate('help.section.links')}</h2>

      <p className="spacer-bottom">
        <a href="https://about.sonarcloud.io/news/">{translate('footer.news')}</a>
      </p>

      <p className="spacer-bottom">
        <a href="https://about.sonarcloud.io/terms.pdf">{translate('footer.terms')}</a>
      </p>

      <p className="spacer-bottom">
        <a href="https://twitter.com/sonarqube">{translate('footer.twitter')}</a>
      </p>

      <p className="spacer-bottom">
        <a href="https://about.sonarcloud.io/get-started/">{translate('footer.get_started')}</a>
      </p>

      <p className="spacer-bottom">
        <a href="https://about.sonarcloud.io/contact/">{translate('footer.help')}</a>
      </p>

      <p className="spacer-bottom">
        <Link to="/web_api" onClick={onClose}>
          {translate('footer.web_api')}
        </Link>
      </p>

      <p>
        <a href="https://about.sonarcloud.io/">{translate('footer.about')}</a>
      </p>
    </div>
  );
}
