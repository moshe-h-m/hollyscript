import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
    params: { storeId: string }
}

const dashboardPage: React.FC<DashboardPageProps> = async ({params}) => {

    const store = await prismadb.store.findFirst({where: { id: params.storeId}});

    return (
        <div>
            {/*{TODO this will be the deshboard}*/}
        <h1>Active store: {store?.name}</h1>
        </div>
    );
}

export default dashboardPage;