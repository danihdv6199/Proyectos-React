
interface Props {
    title: string;
    subTitle?: string;
}

export const CustomJumbotron = (props: Props) => {
    const defaultSubTitle = 'Ropa minimalista y elegante'
    return (
        <section className="py-10 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto text-center">
                <h1 className="text-2xl lg:text-5xl  tracking-tight mb-6 font-montserrat ">
                    {props.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {props.subTitle || defaultSubTitle}
                </p>
            </div>
        </section>
    )
}
