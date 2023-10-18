-- Drop tables if they exist
DROP TABLE IF EXISTS SongOfTheDay;
DROP TABLE IF EXISTS Song;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Channel;

-- Create Users table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT NOT NULL,
    userAgent TEXT NOT NULL,
    nickname TEXT,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Song table
CREATE TABLE Song (
    id TEXT PRIMARY KEY,
    songName TEXT NOT NULL,
    artistName TEXT NOT NULL,
    albumName TEXT NOT NULL,
    previewUrl TEXT,
    imageUrl TEXT,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Channel table
CREATE TABLE Channel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metaData TEXT,
    userId INTEGER NOT NULL,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE
);

-- Create SongOfTheDay table
CREATE TABLE SongOfTheDay (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    songId TEXT NOT NULL,
    userId INTEGER NOT NULL,
    channelId INTEGER NOT NULL,
    nominationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (songId) REFERENCES Song(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (channelId) REFERENCES Channel(id) ON DELETE CASCADE
);

-- Create view for SongOfTheDay queue for specific channel
CREATE VIEW vw_SongOfTheDayQueue AS
SELECT c.id AS channelId, c.metaData AS channelData, s.songName, u.nickname, strftime('%Y-%m-%dT%H:%M:%S', sod.dateTime) AS dateTime
FROM SongOfTheDay sod
JOIN Song s ON sod.songId = s.id
JOIN Users u ON sod.userId = u.id
JOIN Channel c ON sod.channelId = c.id
ORDER BY dateTime DESC;




