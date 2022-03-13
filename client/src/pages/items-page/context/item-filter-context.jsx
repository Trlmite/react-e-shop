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
  const filtersWithUrlSync = async () => {
    const fetchedFilters = await APIService.fetchFilters();
    const urlSelections = searchParams.getAll('selections');
    let modifiedFilters = fetchedFilters.map(filter => ({
      ...filter,
      options: filter.options.map(option => ({
        ...option,
        checked: false
      }))
    }))
    let modifiedFiltersUrl;

    if (urlSelections.length > 0) {
      modifiedFiltersUrl = modifiedFilters.forEach(filter => {
        urlSelections.forEach(selection => {
          const selectedOption = filter.options.find(x => x.id === selection);
          if (selectedOption) {
            selectedOption.checked = true
          }
        })
      })
      console.log({modifiedFilters})
      console.log("if returnas")
      return modifiedFiltersUrl
    } else {
      console.log("else returnas")
      return modifiedFilters
    }
  }

  const changeFilters = () => {
    setSearchParams({ selections: selections })
  }


  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchItems();
      const syncdFilters = await filtersWithUrlSync()
      console.log({syncdFilters})
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
  }), [items, filters, selections, searchParams]);

  console.log({filters})

  return (
    <itemFilterContext.Provider value={value}>
      {children}
    </itemFilterContext.Provider>
  );
};

export default itemFilterContextProvider;
