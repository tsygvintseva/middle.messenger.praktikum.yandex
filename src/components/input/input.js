import Handlebars from "handlebars";
import inputTemplate from "./input.tmpl";
import "./input.scss";

const input = Handlebars.compile(inputTemplate);

Handlebars.registerPartial("input", input);

export default input;
