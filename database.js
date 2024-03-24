import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('user.db');

const initDB = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY NOT NULL, username TEXT UNIQUE, startDate TEXT, streakDays INTEGER);'
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Tasks (id INTEGER PRIMARY KEY NOT NULL, userId INTEGER, date TEXT, task1 BOOLEAN, task2 BOOLEAN, task3 BOOLEAN, task4 BOOLEAN, FOREIGN KEY (userId) REFERENCES Users (id));'
      );
      // Attempt to add the lastActiveDate column if it doesn't exist
      tx.executeSql(
        'ALTER TABLE Users ADD COLUMN lastActiveDate TEXT;',
        [],
        () => console.log('Successfully added lastActiveDate column'),
        (tx, error) => console.log('Could not add lastActiveDate column', error) // This will fail if the column already exists, which is fine
      );
      tx.executeSql(
        'ALTER TABLE Users ADD COLUMN streakDays TEXT;',
        [],
        () => console.log('Successfully added streakDays column'),
        (tx, error) => console.log('Could not add streakDays column', error) // This will fail if the column already exists, which is fine
      );
    });
  };
  

export const checkUsernameExists = (username, callback) => {
    db.transaction(tx => {
        tx.executeSql(
            'SELECT id FROM Users WHERE username = ?;',
            [username],
            (tx, results) => {
                if (results.rows.length > 0) {
                    callback(true); // Username exists
                } else {
                    callback(false); // Username does not exist
                }
            },
            (tx, error) => {
                console.error("Error checking username: ", error);
                callback(false, error); // Return false and error message
            }
        );
    });
};

export const addUser = (username, callback) => {
    const startDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO Users (username, startDate, lastActiveDate, streakDays) VALUES (?, ?, ?, ?);',
            [username, startDate, startDate, 0],
            (_, result) => {
                callback(true, result.insertId, startDate);
            },
            (tx, error) => {
                console.error("Error adding user: ", error);
                callback(false, null, null, "Unable to create new user.");
            }
        );
    });
};

export const database = {
  initDB,
  addUser,
  checkUsernameExists,
  // Additional functions can be added as needed
};
