export const getEventById = async (eventId: string) => {
    console.log("...getting event", eventId);
    await sleep(500);
    return {
        name: `Event - ${eventId}`,
    };
}