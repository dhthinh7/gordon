import { productList } from "@/lib/constant"
import { LoadingStatus, TProduct } from "@/lib/models"
import { useCallback, useEffect, useState } from "react"

type TUseFetchProductsData = {
  productId?: string
}

const useFetchProductsData = ({ productId }: TUseFetchProductsData) => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [productDetail, setProductDetail] = useState<TProduct>()
  const [loading, setLoading] = useState<LoadingStatus>('')

  const getData = useCallback(async () => {
    setLoading('fetching')
    try {
      if (productId) {
        // Call API to fetch product detail
        // Update product detail
        setTimeout(() => {
          setProductDetail(productList[0])
          setLoading('')
        }, 500)
      } else {
        // Call API to fetch data
        // Update product list
        setTimeout(() => {
          setProducts(productList)
          setLoading('')
        }, 500)
      }
    } catch (error) {
      // console.log('Fetching data error: ', error)
    } finally {
      // setLoading('')
    }
  }, [productId])

  useEffect(() => {
    getData()
  }, [getData])

  return {
    loading,
    products,
    productDetail
  }
}

export default useFetchProductsData