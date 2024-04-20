export const VideosUpgradeStatements = [
    {
        toVersion: 1,
        statements: [
            `CREATE TABLE IF NOT EXISTS videos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                link TEXT NOT NULL UNIQUE,
                description TEXT,
                thumbnail TEXT
            );`
        ]
    },
    /* add new statements below for next database version when required*/
];
