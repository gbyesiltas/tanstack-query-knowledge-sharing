export const getProductsForEvent = async (eventId: string) => {
    console.log("...getting products for event", eventId);
    await sleep(500);
    return [
        {
            id: "1",
            eventId,
            name: "Product 1",
            price: 100,
        },
        {
            id: "2",
            eventId,
            name: "Product 2",
            price: 200,
        },
    ];
}