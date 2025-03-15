import { Suspense } from 'react'
import ProductDetails from './ProductDetails'

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <ProductDetails slug={params.slug} />
    </Suspense>
  )
} 