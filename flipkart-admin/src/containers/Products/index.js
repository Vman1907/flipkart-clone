import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

/**
* @author
* @function Products
**/

export const Products = (props) => {

  useEffect(()=>{
    props.setActive(3)
  })

  return(
    <Layout active={props.active} sidebar>
        products
    </Layout>
   )

 }