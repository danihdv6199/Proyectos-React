import { AdminTitle } from '@/admin/components/AdminTitle'
import { CustomPagination } from '@/components/custom/CustomPagination'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

export const AdminProductsPage = () => {
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
                        <TableHead className="w-[100px]">Invoice</TableHead>
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
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>
                            <img
                                src='https//placehold.co/250x250'
                                className='w-20 h-20 object-cover rounded-md'
                            />
                        </TableCell>
                        <TableCell>Producto 1</TableCell>
                        <TableCell>2500</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>Categoria 1</TableCell>
                        <TableCell>x, s</TableCell>
                        <TableCell className="text-right">
                            <Link to={'/admin/products/t-shirt'}>
                                Editar
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <CustomPagination totalPages={10} />
        </>
    )
}
