import React, { useEffect } from 'react'
import Layout from '../../components/Layout'

/**
* @author
* @function Orders
**/

export const Orders = (props) => {

  useEffect(()=>{
    props.setActive(4)
  })

  return(
    <Layout active={props.active} sidebar>
        Orders
    </Layout>
   )

 }