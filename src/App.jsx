import { useState } from "react";
import "./App.css";
import FormDate from "./Components/FormDate/FormDate";
import ContainerCruses from "./Components/ContainerCruses/ContainerCruses";
import Course from "./Components/Course/Course";
function App() {
  const coursesLocal = JSON.parse(localStorage.getItem("ObjectCourse"));
  const [courses, setCourses] = useState(
    coursesLocal === null ? [] : coursesLocal
  );
  const saveCourses = (value) => {
    // necesitamos los valores de la hora
    const newCourses = [value, ...courses];
    setCourses(newCourses);
    updateLocalStorage(newCourses);
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
  const updateLocalStorage = (obj) => {
    localStorage.setItem("ObjectCourse", JSON.stringify(obj));
  };
  const deleteCourse = (idCourse) => {
    const newCourses = courses.filter((course) => course.id !== idCourse);
    setCourses(newCourses);
    updateLocalStorage(newCourses);
  };
  return (
    <div className="App">
      <div className="container_aplication">
        <div className="subContainer_view">
          <FormDate sendCourse={saveCourses}></FormDate>
        </div>
        <div className="subContainer_view">
          <div className="container_schedule">
            <div className="container_day_week day_lunes">
              <div className="container_title_day">lunes</div>
              <div className="container_courses_schedule">
                {coursesOrder("1").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_martes">
              <div className="container_title_day">martes</div>
              <div className="container_courses_schedule">
                {coursesOrder("2").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_miercoles">
              <div className="container_title_day">miércoles</div>
              <div className="container_courses_schedule">
                {coursesOrder("3").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_jueves">
              <div className="container_title_day">jueves</div>
              <div className="container_courses_schedule">
                {coursesOrder("4").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_viernes">
              <div className="container_title_day">viernes</div>
              <div className="container_courses_schedule">
                {coursesOrder("5").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_sabado">
              <div className="container_title_day">sábado</div>
              <div className="container_courses_schedule">
                {coursesOrder("6").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
            <div className="container_day_week day_domingo">
              <div className="container_title_day">domingo</div>
              <div className="container_courses_schedule">
                {coursesOrder("7").map((value) => (
                  <Course
                    key={value.id}
                    idCourse={value.id}
                    nameCourse={value.name_course}
                    open_c_h={value.hours_open_course}
                    open_c_m={value.minutes_open_course}
                    finish_c_h={value.hours_finish_course}
                    finish_c_m={value.minutes_finish_course}
                    deleteCourse={deleteCourse}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="subContainer_view">
          <ContainerCruses courses={courses}></ContainerCruses>
        </div>
      </div>
    </div>
  );
}

export default App;
