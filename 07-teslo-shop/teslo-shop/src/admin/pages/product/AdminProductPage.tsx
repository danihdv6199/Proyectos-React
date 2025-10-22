// https://github.com/Klerith/bolt-product-editor

import { Navigate, useNavigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hooks/useProduct';
import { Spinner } from '@/components/ui/spinner';
import { ProductForm } from './uo/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { toast } from 'sonner';


export const AdminProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, isError, data: product, productMutation } = useProduct(id || '');

    const handleSubmit = async (productLike: Partial<Product> & { files?: File[] }) => {
        await productMutation.mutateAsync(productLike, {
            onSuccess: (data) => {
                toast.success('Producto actualizado correctamente')
                navigate(`/admin/products/${data.id}`)
            },
            onError: (error) => {
                toast.error('Error al actualizar')
            }

        });
    }

    const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
    const subtitle =
        id === 'new'
            ? 'Aquí puedes crear un nuevo producto.'
            : 'Aquí puedes editar el producto.';



    if (isError) {
        return <Navigate to='/admin/products' />
    }

    if (isLoading)
        return <Spinner />

    if (!product) {
        return <Navigate to='/admin/products' />
    }
    return <ProductForm
        title={title}
        subTitle={subtitle}
        product={product}
        onSubmit={handleSubmit}
        isPending={productMutation.isPending} />

};