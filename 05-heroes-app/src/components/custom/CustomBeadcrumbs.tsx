import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { SlashIcon } from 'lucide-react'
import { Link } from "react-router";

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[];
}

export const CustomBeadcrumbs = (props: Props) => {
    return (

        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Inicio</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {
                    props.breadcrumbs?.map(breadcrumb => (
                        <div className="flex items-center">
                            <BreadcrumbItem>
                                <BreadcrumbSeparator>
                                    <SlashIcon />
                                </BreadcrumbSeparator>
                                <BreadcrumbLink asChild>
                                    <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))
                }
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black">{props.currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
