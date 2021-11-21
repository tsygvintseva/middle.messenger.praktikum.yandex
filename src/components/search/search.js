import Handlebars from "handlebars";
import searchTemplate from "./search.tmpl";
import "./search.scss";

const search = Handlebars.compile(searchTemplate);

Handlebars.registerPartial("search", search);

export default search;
