const DATA_KEY = '@TestApp';

export function saveData(key: string, value: any) {
  try {
    const storageData = getAllData();
    storageData[key] = value;
    localStorage.setItem(DATA_KEY, JSON.stringify(storageData));
  } catch (error) {
    handleStorageError(error);
  }
}

export function getData(key: string) {
  try {
    const storageData = getAllData();
    return storageData[key];
  } catch (error) {
    handleStorageError(error);
  }
}

export function removeData(key: string) {
  try {
    const storageData = getAllData();
    delete storageData[key];
    localStorage.setItem(DATA_KEY, JSON.stringify(storageData));
  } catch (error) {
    handleStorageError(error);
  }
}

export function getAllData() {
  try {
    const storageData = localStorage.getItem(DATA_KEY);
    return storageData !== null ? JSON.parse(storageData) : {};
  } catch (error) {
    handleStorageError(error);
  }
}

export function clearAllData() {
  try {
    localStorage.removeItem(DATA_KEY);
  } catch (error) {
    handleStorageError(error);
  }
}

function handleStorageError(error: any): void {
  console.log('localStorage -> ERROR: ', JSON.stringify(error));
}