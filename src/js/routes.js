
import SolicitudesPage from '../pages/solicitudes.svelte';
import NuevaSolicitudPage from '../pages/nueva_solicitud.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: SolicitudesPage,
  },
  {
    path: '/solicitudes/nueva/',
    component: NuevaSolicitudPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
