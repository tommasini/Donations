import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useCallback, useEffect} from 'react';

function useStorage<T>(key: string, restore?: (value: T) => void) {
  const {getItem, setItem, removeItem} = useAsyncStorage(key);

  const getValue = useCallback(async () => {
    const initialItem = await getItem();

    if (initialItem) {
      try {
        return Promise.resolve(JSON.parse(initialItem));
      } catch ({message}) {
        // eslint-disable-next-line no-console
        console.error(`useStorage#getValue: ${message}`);
      }
    }

    return '';
  }, [getItem]);

  const getInitialValue = useCallback(async () => {
    if (!restore) {
      return;
    }

    const value = await getValue();

    restore(value);
  }, [getValue, restore]);

  const _setItem = (value: T) => {
    setItem(JSON.stringify(value));
  };

  const _getItem = async () => {
    const value = await getValue();

    return value;
  };

  useEffect(() => {
    getInitialValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getStorage: _getItem,
    setStorage: _setItem,
    removeStorage: removeItem,
  };
}

export default useStorage;
