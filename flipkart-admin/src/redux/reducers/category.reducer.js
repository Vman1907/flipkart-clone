import { categoriesConstants } from "../actions/constants";
const initState = {
  categories: [],
  loading: false,
  error: null,
};
const buildNewCategories=(categories, category)=>{
  let myCategories=[];
  for(let cat of categories)
  {
    myCategories.push({
      ...cat, children:cat.children && cat.children.length>0?buildNewCategories(cat.children, category):[],
    })
  }
  return myCategories;
}
const categories = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case categoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
    
    state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case categoriesConstants.ADD_NEW_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case categoriesConstants.ADD_NEW_CATEGORY_SUCCESS:
      console.log(action);
      const updatedCategories=  buildNewCategories(state.categories, action.payload.category);
      console.log(updatedCategories);
      state = {
        ...state,
        loading: false,
      };
      break;

    case categoriesConstants.ADD_NEW_CATEGORY_FAILURE:
      state = {
        initState,
      };
      break;

    default:
  }
  return state;
};
export default categories;
