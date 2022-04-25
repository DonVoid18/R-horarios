import { v4 as uuidv4 } from "uuid";
import "./ContainerCruses.css";
function ContainerCruses({ courses }) {
  const coursesCrosses = (dayWeek) => {
    let newCourses = courses
      .filter((course) => course.week_course === dayWeek)
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

    // aquí devolvemos todos los cursos que se cruzan en parejas de dos
    let newCoursesCrosses = [];
    let o_course = 0;
    let f_course = 0;
    for (let i = 0; i < newCourses.length - 1; i++) {
      f_course =
        parseInt(newCourses[i].hours_finish_course) * 60 +
        parseInt(newCourses[i].minutes_finish_course);
      o_course =
        parseInt(newCourses[i + 1].hours_open_course) * 60 +
        parseInt(newCourses[i + 1].minutes_open_course);

      if (f_course > o_course) {
        newCoursesCrosses.push({
          id: uuidv4(),
          c_1: newCourses[i].name_course,
          c_2: newCourses[i + 1].name_course,
          time: f_course - o_course
        });
      }
    }
    return newCoursesCrosses;
  };
  return (
    <div className="container_courses_crosses">
      <p>Los cruces de horarios son los siguientes: </p>
      <div className="container_crosses crosses_lunes">
        <div>
          <strong>lunes</strong>
        </div>

        {coursesCrosses("1").map((value, index) => (
          <span
            key={value.id}
          >{`${value.c_1} tiene cruce con ${value.c_2} un tiempo de ${value.time} minutos`}</span>
        ))}
      </div>
      <div className="container_crosses crosses_martes">
        <div>
          <strong>martes</strong>
        </div>
        {coursesCrosses("2").map((value, index) => (
          <span
            key={value.id}
          >{`${value.c_1} tiene cruce con ${value.c_2} un tiempo de ${value.time} minutos`}</span>
        ))}
      </div>
    </div>
  );
}
export default ContainerCruses;
