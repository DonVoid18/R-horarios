import { useState } from "react";
import FormDate from "./Components/FormDate/FormDate";
import ContainerCruses from "./Components/ContainerCruses/ContainerCruses";
function App() {
  const [courses, setCourses] = useState([]);
  const saveCourses = (value) => {
    // necesitamos los valores de la hora

    setCourses([value, ...courses]);
  };
  const coursesOrder = (numberWeek) => {
    return courses
      .filter((course) => course.week_course === numberWeek)
      .sort((a, b) => {
        if (parseInt(a.hours_open_course) < parseInt(b.hours_open_course)) {
          return -1;
        }
        if (
          parseInt(a.hours_open_course) === parseInt(b.hours_open_course) &&
          parseInt(a.minutes_open_course) < parseInt(b.minutes_open_course)
        ) {
          return -1;
        }
      });
  };
  return (
    <div className="App">
      <FormDate sendCourse={saveCourses}></FormDate>
      <div className="container_schedule">
        <div className="container_day_lunes">
          <h1>Lunes</h1>
          {coursesOrder("1").map((value) => (
            <h1 key={value.id}>
              {value.name_course} - {value.hours_open_course}:
              {value.minutes_open_course} - {value.hours_finish_course}:
              {value.minutes_finish_course}
            </h1>
          ))}
        </div>
        <div className="container_day_martes">
          <h1>Martes</h1>
          {coursesOrder("2").map((value) => (
            <h1 key={value.id}>
              {value.name_course} - {value.hours_open_course}:
              {value.minutes_open_course} - {value.hours_finish_course}:
              {value.minutes_finish_course}
            </h1>
          ))}
        </div>
      </div>
      <ContainerCruses courses={courses}></ContainerCruses>
    </div>
  );
}

export default App;
