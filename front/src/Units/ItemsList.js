import React,{useContext} from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import {ItemExcerpt} from './ItemExcerpt'

import {ItemContext} from '../Context/Contexts'
import {FiltContext} from '../Context/Contexts'
import {OpenContext,
	    UserContext,
	    CartContext} from '../Context/Contexts'

import {Row, Col} from 'antd'   
   
export const ItemsList = () => {
	
	const {items, loading, error, fetchItems, single, setSingle, singleId,
		   removeItem, setCurrentId, setSingleId} = useContext(ItemContext)
		   
    const {addToCart} = useContext(CartContext)
    
    const {state} = useContext(FiltContext)

    const {userData} = useContext(UserContext)
    
    const {openItemForm} = useContext(OpenContext)
    
    const currItem = items.find((item) => item._id === singleId)
    
    const category = state.itemCategory
	const search = state.itemSearch
	const minPrice = state.itemPrice.min
	const maxPrice = state.itemPrice.max
	
	const sortedByDate = items.slice().sort((a, b) =>
		                                   b.date.localeCompare(a.date))
	
	const sortedByPrice = sortedByDate.sort((a,b) => a.price - b.price)

	const filteredByPrice = sortedByPrice.filter(item => {
		if( minPrice > 0 && !maxPrice){
			 return item.price > parseInt(minPrice)}
		if( maxPrice > 0 && !minPrice){
			return item.price < parseInt(maxPrice)}
		if( maxPrice > 0 && minPrice > 0){
			return item.price > parseInt(minPrice) && item.price < parseInt(maxPrice)}
		return item
		})
    const filteredBySearch = filteredByPrice.filter(item => {
		if(search){return item.title.toUpperCase().includes(search.toUpperCase())}
		return item
		})
		
   const totalPages = Math.ceil(filteredBySearch.length/8)
   const Buttons = () => <div style={{'display':'flex', 'fontSize':'20px'}}>Pages:{[...Array(totalPages)].map((e, i) => 
	   <button style={{'margin':'5px', 'fontSize':'20px', 'cursor':'pointer'}} onClick={()=>setPage(i)} key={i}>{i+1}</button>)}</div>

   function sliceIntoChunks() {
    const res = [];
    for (let i = 0; i < filteredBySearch.length; i += 8) {
        const chunk = filteredBySearch.slice(i, i + 8);
        res.push(chunk);
    }
    return res;
}
   const [page, setPage] = React.useState(0)

   const slicer = sliceIntoChunks()
   // console.log(sliceIntoChunks())
   const slicedItems = slicer[page]
   
	/* React.useEffect(()=> {
		    
			if(!loading&&!items.length &&!error.length&&category)fetchItems(category)
		},[loading,fetchItems,items.length, error, category]) */
	 React.useEffect(()=> {    
			fetchItems(category)
		},[]) 
	
	let content
	
	if(loading){
		
		content = <section style={{textAlign:'center'}}>
		<h3>let me upload the products</h3>
		<CircleLoader
        
        cssOverride={{marginLeft:'43%', marginTop: '5%'}}
        color={'#901031'}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></section>
		
	}
	if (!loading&&items&&slicedItems){

		content = 
  
      <>
       <Buttons/>
      <Row gutter={[12, 12]}>
       {slicedItems.map(item => (
			  <Col key={item._id}  span={6}> 
			   <ItemExcerpt  
			           item={item}
			           setSingle={setSingle}
			           setCurrentId={setCurrentId}
			           setSingleId={setSingleId}
			           openItemForm={openItemForm}
			           removeItem={removeItem}
			           userData={userData}
			           addToCart={addToCart}
			            />
			  </Col>
		       ))}
			  </Row>
	  </>
		}
		
	if (!loading&&items&&slicedItems&&single){

		content = <><ItemExcerpt item={currItem}
		                         single={single}
		                         setSingleId={setSingleId}
		                         setSingle={setSingle}
			                     setCurrentId={setCurrentId}
			                     openItemForm={openItemForm}
			                     removeItem={removeItem}
			                     userData={userData}
			                     addToCart={addToCart}/></>
 }
	if (!items && !loading) {content = <section>error</section>}
		 return(
		    <section>
		       {content}
		    </section>
		 )
	}
