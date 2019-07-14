import _ from 'lodash';

//item = allmovie = 9
//pagenumber = currentpage = 1
//pageSize = 4
export default function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber  - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}   
