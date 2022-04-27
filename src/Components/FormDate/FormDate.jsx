import { useState } from "react";
import "./FormDate.css";
import ButtonHour from "../ButtonHour/ButtonHour";
import { v4 as uuidv4 } from "uuid";
function FormDate({ sendCourse }) {
  const [form, setForm] = useState({
    name_course: "",
    hours_open_course: "",
    minutes_open_course: "",
    hours_finish_course: "",
    minutes_finish_course: "",
    week_course: undefined,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const sendForm = (e) => {
    e.preventDefault();
    // hacer la validación de los horarios (el horario de finalización debe ser mayor que el horario de inico)
    let validationForm = true;
    if (
      parseInt(form.hours_open_course) * 60 +
        parseInt(form.minutes_open_course) >
      parseInt(form.hours_finish_course) * 60 +
        parseInt(form.minutes_finish_course)
    ) {
      alert("La hora final no debe ser menor a la inicial");
      validationForm = false;
    }
    if (form.week_course == undefined) {
      alert("Día de la semana no ingreado");
      validationForm = false;
    }
    if (validationForm) {
      sendCourse({ id: uuidv4(), ...form });
      setForm({
        name_course: "",
        hours_open_course: "",
        minutes_open_course: "",
        hours_finish_course: "",
        minutes_finish_course: "",
        week_course: undefined,
      });
    }

    // cuando se termine de enviar formulario se debe resetear tods los valores
  };
  return (
    <div className="container_form_courses">
      <div className="title_form_courses">crear nuevo horario</div>
      <form onSubmit={sendForm} className="form_courses">
        <div className="container_input">
          <span className="name_input_container">Nombre del curso</span>
          <input
            className="input_name_course"
            type="text"
            placeholder="Escribir..."
            name="name_course"
            onChange={handleChange}
            value={form.name_course}
            required
          />
        </div>
        <div className="container_input">
          <span className="name_input_container">Inicia</span>
          <ButtonHour
            name={"hours_open_course"}
            min={0}
            max={23}
            cambio={handleChange}
            textPlace={"hh"}
            value={form.hours_open_course}
          ></ButtonHour>
          :
          <ButtonHour
            name={"minutes_open_course"}
            min={0}
            max={59}
            cambio={handleChange}
            textPlace={"mm"}
            value={form.minutes_open_course}
          ></ButtonHour>
        </div>
        <div className="container_input">
          <span className="name_input_container">Finaliza</span>
          <ButtonHour
            name={"hours_finish_course"}
            min={0}
            max={23}
            cambio={handleChange}
            textPlace={"hh"}
            value={form.hours_finish_course}
          ></ButtonHour>
          :
          <ButtonHour
            name={"minutes_finish_course"}
            min={0}
            max={59}
            cambio={handleChange}
            textPlace={"mm"}
            value={form.minutes_finish_course}
          ></ButtonHour>
        </div>
        <div className="container_input">
          <span className="name_input_container">Día de la semana</span>

          <input
            type="radio"
            id="lunes"
            name="week_course"
            value="1"
            onChange={handleChange}
          />
          <label htmlFor="lunes" className="day_week">
            L
          </label>

          <input
            type="radio"
            id="martes"
            name="week_course"
            value="2"
            onChange={handleChange}
          />
          <label htmlFor="martes" className="day_week">
            M
          </label>

          <input
            type="radio"
            id="miercoles"
            name="week_course"
            value="3"
            onChange={handleChange}
          />
          <label htmlFor="miercoles" className="day_week">
            M
          </label>

          <input
            type="radio"
            id="jueves"
            name="week_course"
            value="4"
            onChange={handleChange}
          />
          <label htmlFor="jueves" className="day_week">
            J
          </label>

          <input
            type="radio"
            id="viernes"
            name="week_course"
            value="5"
            onChange={handleChange}
          />
          <label htmlFor="viernes" className="day_week">
            V
          </label>

          <input
            type="radio"
            id="sabado"
            name="week_course"
            value="6"
            onChange={handleChange}
          />
          <label htmlFor="sabado" className="day_week">
            S
          </label>

          <input
            type="radio"
            id="domingo"
            name="week_course"
            value="7"
            onChange={handleChange}
          />
          <label htmlFor="domingo" className="day_week">
            D
          </label>
        </div>
        <div className="container_button_send">
          <button type="submit" className="button_send">
            Guardar Horario
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormDate;
