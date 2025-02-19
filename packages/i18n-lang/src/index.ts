/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import strings from './config/strings.json';
import languageManifest from './config/language.manifest.json';
// @ts-ignore
import { strings as _strings } from './enterprise';

declare const window: any;
declare const global: any;

function loadAllLang() {
  const newStrings = strings;
  if (_strings) {
    for (const key in strings) {
      newStrings[key] = { ...strings[key], ..._strings[key] };
    }
  }
  if (typeof window !== 'undefined') {
    (window as any).apitable_i18n = newStrings;
    (window as any).languageManifest = languageManifest;
  } else {
    (global as any).apitable_i18n = newStrings;
    (global as any).languageManifest = languageManifest;
  }
}

loadAllLang();

