/* eslint-disable */
import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import APIService from '../../../services/api-service';

export const itemFilterContext = createContext();

const itemFilterContextProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selections, setSelections] = useState([]);

  const handleCheckBoxClick = (e) => {
    const { name, checked } = e.target;
    const selectedFilters = filters.map(filter => ({
      ...filter,
      options: filter.options.map(option => ({
        ...option,
        checked: option.id === name ? checked : option.checked
      }))
    }))
    const newSelections = selections
    if (!selections.includes(name)) {
      newSelections.push(name);
    } else {
      const findIndex = selections.indexOf(name);
      newSelections.splice(findIndex, 1);
    }
    setFilters(selectedFilters);
    setSelections(newSelections);
  };

  const paramsSync = (filters, urlParams) => {
    console.log({
      filters,
      urlParams,
    })
    let modifiedFilters
    if (urlParams.length > 0) {
      modifiedFilters = filters.map(filter => {
        urlParams.forEach(urlParam => {
          const selectedOption = filter.options.find(x => x.id === urlParam);
          if (selectedOption) {
            selectedOption.checked = true
          }
        })
        return filter;
      })
      return modifiedFilters
    } else {
      modifiedFilters = filters
      return modifiedFilters
    }
  }


  const filtersWithUrlSync = async () => {
    const fetchedFilters = await APIService.fetchFilters();
    const urlSelections = searchParams.getAll('selections');
 
    const filters = fetchedFilters.map(filter => ({
      ...filter,
      options: filter.options.map(option => ({
        ...option,
        checked: false
      }))
    }))
    const syncedFilters = paramsSync(filters, urlSelections)
    return syncedFilters;
  }

  const changeFilters = () => {
    setSearchParams({ selections});
  }


  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchItems();
      const syncdFilters = await filtersWithUrlSync()
      setFilters(syncdFilters);
      setItems(fetchedItems);
    })();
  }, [searchParams]);


  const value = useMemo(() => ({
    items,
    filters,
    selections,
    handleCheckBoxClick,
    changeFilters,
  }), [items, filters, selections]);

  return (
    <itemFilterContext.Provider value={value}>
      {children}
    </itemFilterContext.Provider>
  );
};

export default itemFilterContextProvider;
