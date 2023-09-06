CREATE TABLE IF NOT EXISTS kitt (
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    content VARCHAR(256),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    cat_id INTEGER NOT NULL
)