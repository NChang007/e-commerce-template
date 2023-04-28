import React from 'react'
import PriceRangeBar from '../components/PriceRangeBar'

const page = () => {
  return (
    <div className='woman-page'>
        <div className="woman-page-header">
            <p>this is some header that will update </p> 
        </div>
        <div className="woman-page-body">
            {/* left side of the page with all filters  */}
            <div className="category-filter-container">
                <div className="active-filters">
                    <div className="active-filters-header">
                        <p>FILTER</p>
                        <p>clear all</p>
                    </div>
                    <div className="active-filters-body">
                        <p>Jewelry:<strong>Necklaces</strong><span>x</span></p>
                    </div>
                </div>
                <div className="designer-filters">
                    <div className="designer-filters-header">
                        <p>DESIGNERS</p>
                        <p>-/+</p>
                    </div>
                    <div className="designer-filters-body">
                        <div className="designer-filter-search">
                            some search bar
                        </div>
                        <div className="designer-filter-search-results">
                            <p>ChaCha Temers</p>

                        </div>
                    </div>
                </div>
                <div className="category-filters">
                    <div className="category-filters-header">
                        <p>DESIGNERS</p>
                        <p>-/+</p>
                    </div>
                    <div className="category-filters-body">
                        {/* loop over all categories and return a component 
                        that is a dropdown with all subcategories of 
                        the one category passed  */}
                        <p>Clothing  +/-</p>
                        <p>Shoes  +/-</p>
                        <p>Bags  +/-</p>
                        <p>Jewelry  +/-</p>
                    </div>
                </div>
                <div className="size-filters">
                    <div className="size-filters-header">
                        <p>SIZES</p>
                        <p>-/+</p>
                    </div>
                    <div className="size-filters-body">
                        {/* All sizes offered updated by filters  */}
                        <p>big</p>
                        <p>small</p>
                        <p>Fat</p>
                        <p>Super Fat</p>
                        <p>Eat something</p>
                    </div>
                </div>
                <div className="color-filters">
                    <div className="color-filters-header">
                        <p>COLORS</p>
                        <p>-/+</p>
                    </div>
                    <div className="color-filters-body">
                        {/* All colors offered*/}
                        <p>blue</p>
                        <p>gold</p>
                        <p>green</p>
                        <p>Purple</p>
                        <p>Black/White</p>
                    </div>
                </div>
                <div className="price-filters">
                    <div className="price-filters-header">
                        <p>PRICE</p>
                        <p>-/+</p>
                    </div>
                    <div className="price-filters-body">
                        {/* range slider componet to range a min and max price to filter */}
                        <PriceRangeBar/>
                    </div>
                </div>
                        

            </div>
            {/* right side of the page with all results based on filters if any */}
            <div className="category-filter-results-container">
                {/* return items as card with quick add || updates when filters are applied  */}
            </div>
        </div>
    </div>
  )
}

export default page