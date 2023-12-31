// import images from '../public/images/'

export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-7306f-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }

  console.log(events)
  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
