import TableSection from '../../components/table';

export default function MyOrders() {

    return (
        <div className="flex flex-col rounded-box-inner gap-0  pt-12 overflow-hidden">
            <p className="text-2xl md:text-4xl font-extrabold px-10 md:px-16 mb-0">MY ORDERS</p>

            <div className="flex flex-col justify-center items-start px-6 mt-0 overflow-x-scroll">
                <TableSection />
            </div>
        </div>
    );
}
