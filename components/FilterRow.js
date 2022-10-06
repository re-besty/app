import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import FilterListHeaderInner from "@src/components/Filter/FilterListHeader";

const FilterRow = (props) => {
  const {
    details,
    filter,
    initialTab,
    filters,
    subfilters,
    activeSubFilters,
    global,
    colors,
    t,
    labels,
    filterType } = props;
  
  const [activeFilter, setActiveFilter] = useState(initialTab || filters[0]);

  console.log('filter:' + filter);
  console.log('filters:' + filters);
  console.log('filterType:' + filterType);
  console.log('subfilters:' + subfilters);
  console.log('subfilters type:' + subfilters.type);
  console.log('activeSubFilters:' + activeSubFilters);
  console.log('details:' + details);
  console.log('labels:' + labels);
  // console.dir(subfilters);
  // console.dir(activeSubFilters);
  // console.dir(details);
  // console.dir(labels);

  // console.log(props);

  return <FilterListHeaderInner {...props} />

  // return <FilterListHeaderInner
  //   {...{
  //     showFilterArrow: true,
  //     details,
  //     disableFilter: false,
  //     disableSubFilters: false,
  //     count: filterType === "courses" ? courseCount : undefined,
  //     filter: activeFilter,
  //     subfilters,
  //     activeSubFilters,
  //     global,
  //     colors,
  //     t,
  //     labels,
  //     filterType,
  //     containerStyle: {
  //       backgroundColor: colors.bodyFrontBg
  //     }
  //   }}
  //   />
  
}

export default FilterRow;
