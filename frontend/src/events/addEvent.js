import dom from "../dom.js";
import addHandler from "../handlers/addHandler.js";

const addEvent = () => {
   dom.btn.addEventListener('click', (e) => {
      e.preventDefault();
      addHandler();
   });
};

export default addEvent;