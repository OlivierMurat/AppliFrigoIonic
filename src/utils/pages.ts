import { RecettesPage } from '../pages/recettes/recettes';
import { PlanificationPage } from '../pages/planification/planification';
import { ListePage } from '../pages/liste/liste';
import { FrigoPage } from '../pages/frigo/frigo';

const Pages = [
  { title: 'Frigo', component: FrigoPage, icon: "snow", color: "#E47500" },
  { title: 'Recettes', component: RecettesPage, icon: "pizza", color: "#5AD863" },
  { title: 'Planification', component: PlanificationPage, icon: "calendar", color: "#F8E548" },
  { title: 'Liste', component: ListePage, icon: "list-box", color: "#AD5CE9" }
];

export default Pages;

