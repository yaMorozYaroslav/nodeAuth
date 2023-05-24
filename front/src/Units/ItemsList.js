import React,{useContext} from 'react'
import {ItemExcerpt} from './ItemExcerpt'

import {ItemContext} from '../Context/Contexts'
import {FiltContext} from '../Context/Contexts'
import {OpenContext, UserContext} from '../Context/Contexts'

import InfiniteScroll from 'react-infinite-scroll-component'
import {Row, Col} from 'antd'   
   
export const ItemsList = () => {
	
	const {items, totalPages, currentPage, loading, error, fetchItems,
		   removeItem, currentId, setCurrentId} = useContext(ItemContext)
    
    const {state} = useContext(FiltContext)

    const {userData} = useContext(UserContext)
    
    const {itemForm, authForm, openItemForm, closeAuthForm} = useContext(OpenContext)
    
    const [page, setPage] = React.useState(1)
    
    console.log(totalPages, currentPage)
    const category = state.itemCategory
	const search = state.itemSearch
	const minPrice = state.itemPrice.min
	const maxPrice = state.itemPrice.max
	
	const sortedByDate = items.slice().sort((a, b) =>
		                                   b.createdAt.localeCompare(a.createdAt))
	
	const categorized = sortedByDate.filter((item)=>{
		if(category === 'all'){ return item }
		if(category === 'soils'){return item.category === 'soil'}
		if(category === 'pesticides'){return item.category === 'pesticide'}
		if(category === 'seeds'){return item.category === 'seed'}
		return item
		})
	
	const sortedByPrice = categorized.sort((a,b) => a.price - b.price)
	//console.log(minPrice)
	const filteredByPrice = sortedByPrice.filter(item => {
		if(!search && minPrice > 0 && maxPrice === 0){
			 return item.price > parseInt(minPrice)}
		if(!search && maxPrice > 0 && minPrice === 0){
			return item.price < parseInt(maxPrice)}
		if(!search && maxPrice > 0 && minPrice > 0){
			return item.price > parseInt(minPrice) && item.price < parseInt(maxPrice)}
		if(search){return item.title.toUpperCase().includes(search.toUpperCase())}
		return item
		})
const fetchData = () => {
	setPage(page+1)
	fetchItems(page+1, 'seed')
    console.log('bottom')
    }
console.log(page)
/* React.useEffect(() => {
	 const handleScroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop !== 
                              document.documentElement.offsetHeight ) {
    return;
  }
  setPage(page+1)
  fetchItems(page+1)
  console.log(page)
};

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [fetchItems, page]) */
const quantity = items.length * currentPage 
console.log(currentPage < totalPages, quantity )
	 React.useEffect(()=> {
		    
			if(!loading&&!items.length &&!error.length)fetchItems(page, 'seed')
		},[loading,fetchItems,items.length, error, page]) 
	
	if(items.length)console.log(items)
	let content
	
	if(loading){
		
		content = <p>loading</p>
		
	}
	if (!loading&&items){

		content = 
  <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={currentPage < totalPages} // Replace with a condition based on your data source
      loader={<p>Loading...</p>}
      endMessage={<p>No more data to load.</p>}
                                               >
      <Row gutter={[16, 16]}>
       
			  <Col span={24}>
			   {filteredByPrice.map(item => (
			   <ItemExcerpt 
			           key={item._id} 
			           item={item}
			           setCurrentId={setCurrentId}
			           openItemForm={openItemForm}
			           removeItem={removeItem}
			           userData={userData}
			            />))}
			  </Col></Row>
   </InfiniteScroll>
		}
	if (error.length && !loading) {content = <section>{error}</section>}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
