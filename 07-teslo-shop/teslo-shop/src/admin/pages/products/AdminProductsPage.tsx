import { AdminTitle } from '@/admin/components/AdminTitle'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CurrencyFormatter } from '@/lib/currency-formatter'
import { useProducts } from '@/shop/hooks/useProducts'
import { PencilIcon, PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

export const AdminProductsPage = () => {
    const { data, isLoading } = useProducts();

    if (isLoading) return <Spinner />

    return (
        <>
            <div className='flex justify-between items-center'>
                <AdminTitle
                    title='Productos'
                    subtitle='Aqui puedes ver y administrar sus productos' />
                <div className="flex justify-end mb-10 gap-4">

                    <Link to='/admin/products/new'>
                        <Button>
                            <PlusIcon />
                            Nuevo producto
                        </Button>
                    </Link>
                </div>
            </div>
            <Table className='bg-white p-10 shadow-xs  rounded-md mb-1 '>
                <TableHeader>

                    <TableRow>
                        <TableHead>Imagen</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Inventario</TableHead>
                        <TableHead>Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.products.map(product => (

                            <TableRow key={product.id}>
                                <TableCell>
                                    <img
                                        src={product.images[0]}
                                        className='w-20 h-20 object-cover rounded-md'
                                    />
                                </TableCell>
                                <TableCell>
                                    <Link to={`/admin/products/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </TableCell>
                                <TableCell>{CurrencyFormatter(product.price)}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>{product.gender}</TableCell>
                                <TableCell>{product.sizes.join(', ')}</TableCell>
                                <TableCell className="text-right">
                                    <Link to={`/admin/products/${product.id}`}>
                                        <PencilIcon className='size-4 text-blue-500' />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
}
