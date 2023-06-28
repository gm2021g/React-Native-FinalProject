import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("profiles.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS profiles (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, name TEXT, lastName TEXT, place TEXT, image TEXT, address TEXT, coords TEXT)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertProfile = (
  email,
  name,
  lastName,
  place,
  image,
  address,
  coords
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO profiles (email, name, lastName, place, image, address, coords) VALUES (?,?,?,?,?,?,?)",
        [email, name, lastName, place, image, address, JSON.stringify(coords)],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectProfile = (email) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM profiles WHERE email = '" + email + "' ",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const deleteProfile = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM profiles",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const updateProfile = (
  p_email,
  p_name,
  p_lastName,
  p_place,
  p_image,
  p_address,
  p_coords
) => {
  const v_coords = JSON.stringify(p_coords);

  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE profiles SET name = '" +
          p_name +
          "', lastName =  '" +
          p_lastName +
          "', place =  '" +
          p_place +
          "', image =  '" +
          p_image +
          "', address =  '" +
          p_address +
          "', coords =  '" +
          v_coords +
          "' WHERE email = '" +
          p_email +
          "' ",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
