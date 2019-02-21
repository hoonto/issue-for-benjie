`npm run up` or equivalent

then see a bunch of lines output like:

```
festival-db_1   | 2019-02-21 18:10:14.128 UTC [73] LOG:  starting logical decoding for slot "hjaslibsvpbbygmcvdrrppihdtagrl"
festival-db_1   | 2019-02-21 18:10:14.128 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.128 UTC [73] LOG:  logical decoding found consistent point at 0/16537F8
festival-db_1   | 2019-02-21 18:10:14.128 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.331 UTC [73] LOG:  starting logical decoding for slot "hjaslibsvpbbygmcvdrrppihdtagrl"
festival-db_1   | 2019-02-21 18:10:14.331 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.331 UTC [73] LOG:  logical decoding found consistent point at 0/16537F8
festival-db_1   | 2019-02-21 18:10:14.331 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.534 UTC [73] LOG:  starting logical decoding for slot "hjaslibsvpbbygmcvdrrppihdtagrl"
festival-db_1   | 2019-02-21 18:10:14.534 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.534 UTC [73] LOG:  logical decoding found consistent point at 0/16537F8
festival-db_1   | 2019-02-21 18:10:14.534 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.737 UTC [73] LOG:  starting logical decoding for slot "hjaslibsvpbbygmcvdrrppihdtagrl"
festival-db_1   | 2019-02-21 18:10:14.737 UTC [73] STATEMENT:  SELECT lsn, data FROM pg_catalog.pg_logical_slot_get_changes($1, $2, $3, 'add-tables', $4::text, 'format-version', '1')
festival-db_1   | 2019-02-21 18:10:14.738 UTC [73] LOG:  logical decoding found consistent point at 0/16537F8
```
