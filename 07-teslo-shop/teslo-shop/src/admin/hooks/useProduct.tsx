import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import type { Product } from "@/interfaces/product.interface"
import { createUpdateProductAction } from "../actions/create-update-product.action"

export const useProduct = (id: string) => {
    const queryClient = useQueryClient();
    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        enabled: !!id
    })

    const productMutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            queryClient.invalidateQueries({ queryKey: ['product, ', { id: product.id }] })
            queryClient.setQueryData(['products', { id: product.id }], product)
        }
    });


    return {
        ...query,
        productMutation
    }
}
