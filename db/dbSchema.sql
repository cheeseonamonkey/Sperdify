-- Drop tables if they exist
DROP TABLE IF EXISTS SongOfTheDay;
DROP TABLE IF EXISTS Songs;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Channels;

-- Create Users table
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip TEXT NOT NULL,
    userAgent TEXT NOT NULL,
    nickname TEXT,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Songs table
CREATE TABLE Songs (
    id TEXT PRIMARY KEY,
    songName TEXT NOT NULL,
    artistName TEXT NOT NULL,
    albumName TEXT NOT NULL,
    previewUrl TEXT,
    imageUrl TEXT,
    dateTime DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Channels table
CREATE TABLE Channels (
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
    FOREIGN KEY (songId) REFERENCES Songs(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (channelId) REFERENCES Channels(id) ON DELETE CASCADE
);

