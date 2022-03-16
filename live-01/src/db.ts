import { Pool } from 'pg';

const connectionString = 'postgres://rbcnehxi:ln6m69T2cekSFos0pAn1_-xpUc3tp3e3@motty.db.elephantsql.com/rbcnehxi';

const db = new Pool({ connectionString });

export default db;