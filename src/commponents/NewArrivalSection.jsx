import Card from "./Card";

function NewArraivalSection({ items, onClickCard }) {
    return (
        <div className=" mt-20">
            <div className="flex-center">
                <div className=" dark:text-white bg-[url('./assets/lines.png')] text-4xl font-extrabold">
                    New Arrivals
                </div>
            </div>

            <div className=" justify-between mt-10 grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
                {items.map(item => {
                    return <Card key={item.id} item={item} onClick={onClickCard} />
                })}
            </div>
        </div>
    );
}

export default NewArraivalSection;