/**
 * Copyright 2016 Ary Pablo Batista <arypbatista@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Cloudant = require('../lib/cloudant-promise');
const credentials = process.env.CLOUDANT_CREDENTIALS;


const testDatabase = () => `test${Math.random().toString(16).replace('.', '0')}`;

describe('cloudant', () => {

  it('create db', () => {
    const dbName = testDatabase();
    const cloudant = Cloudant(credentials);

    return cloudant.db.create(dbName)
      .then(() => cloudant.db.destroy(dbName));
  });

  it('insert', () => {
    const dbName = testDatabase();
    const cloudant = Cloudant(credentials);

    return cloudant.db.create(dbName)
      .then(() => {
        const db = cloudant.db.use(dbName);
        return db.insert({ 'crazy': true }, 'rabbit')
          .then((doc) => db.get(doc.id))
          .then(() => cloudant.db.destroy(dbName));
      });
  });

});
