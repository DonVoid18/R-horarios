import { useState } from "react";
import "./FormDate.css";
import ButtonHour from "../ButtonHour/ButtonHour";
import { v4 as uuidv4 } from "uuid";
function FormDate({ sendCourse }) {
  const [form, setForm] = useState({
    name_course: undefined,
    hours_open_course: undefined,
    minutes_open_course: undefined,
    hours_finish_course: undefined,
    minutes_finish_course: undefined,
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
    sendCourse({id: uuidv4(), ...form});
  };
  return (
    <div className="container_form_courses">
      <form onSubmit={sendForm} className="form_courses">
        <div className="container_input">
          <input
            type="text"
            placeholder="Nombre del curso"
            name="name_course"
            onChange={handleChange}
            required
          />
        </div>
        <div className="container_input">
          <ButtonHour
            name={"hours_open_course"}
            min={0}
            max={23}
            cambio={handleChange}
          ></ButtonHour>
          <ButtonHour
            name={"minutes_open_course"}
            min={0}
            max={59}
            cambio={handleChange}
          ></ButtonHour>
        </div>
        <div className="container_input">
          <ButtonHour
            name={"hours_finish_course"}
            min={0}
            max={23}
            cambio={handleChange}
          ></ButtonHour>
          <ButtonHour
            name={"minutes_finish_course"}
            min={0}
            max={59}
            cambio={handleChange}
          ></ButtonHour>
        </div>
        <div className="container_input">
          <label htmlFor="lunes">L</label>
          <input type="radio" id="lunes" name="week_course" value="1" onChange={handleChange} required/>

          <label htmlFor="martes">M</label>
          <input type="radio" id="martes" name="week_course" value="2" onChange={handleChange}/>

          <label htmlFor="miercoles">M</label>
          <input type="radio" id="miercoles" name="week_course" value="3" onChange={handleChange}/>

          <label htmlFor="jueves">J</label>
          <input type="radio" id="jueves" name="week_course" value="4" onChange={handleChange}/>

          <label htmlFor="viernes">V</label>
          <input type="radio" id="viernes" name="week_course" value="5" onChange={handleChange}/>

          <label htmlFor="sabado">S</label>
          <input type="radio" id="sabado" name="week_course" value="6" onChange={handleChange}/>

          <label htmlFor="domingo">D</label>
          <input type="radio" id="domingo" name="week_course" value="7" onChange={handleChange}/>
        </div>
        <div className="container_button_send">
          <button type="submit">Guardar Horario</button>
        </div>
      </form>
    </div>
  );
}
export default FormDate;
