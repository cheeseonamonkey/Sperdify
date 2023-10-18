-- Insert example data into Users table
INSERT INTO Users (ip, userAgent, nickname) VALUES ('192.168.0.1', 'Mozilla/5.0', 'JohnDoe');
INSERT INTO Users (ip, userAgent, nickname) VALUES ('192.168.0.2', 'Mozilla/5.0', 'JaneDoe');

-- Insert example data into Song table
INSERT INTO Songs (id, songName, artistName, albumName, previewUrl, imageUrl) VALUES ('1', 'Song 1', 'Artist 1', 'Album 1', 'http://preview1.com', 'http://image1.com');
INSERT INTO Songs (id, songName, artistName, albumName, previewUrl, imageUrl) VALUES ('2', 'Song 2', 'Artist 2', 'Album 2', 'http://preview2.com', 'http://image2.com');

-- Insert example data into Channel table
INSERT INTO Channels (metaData, userId) VALUES ('Channel 1', 1);
INSERT INTO Channels (metaData, userId) VALUES ('Channel 2', 2);

-- Insert example data into SongOfTheDay table
INSERT INTO SongOfTheDay (songId, userId, channelId) VALUES ('1', 1, 1);
INSERT INTO SongOfTheDay (songId, userId, channelId) VALUES ('2', 2, 2);
