import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list';

function HomePage(props) {

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={props.events}/>
    </div>
  );
}

getFeaturedEvents()

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
// 
  return {
    props: {
      events: featuredEvents
    }
  }
}

export default HomePage;




// import { getFeaturedEvents } from '../dummy-data';




  // const featuredEvents = getFeaturedEvents()

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://nextjs-course-7306f-default-rtdb.firebaseio.com/events.json"
  //   );
  //   const data = await response.json();
  
  //   console.log(data)
  // }

  // getData()