import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from './private/listar-usuarios/listar-usuarios.component';
import { ListarCategoriasComponent } from './private/listar-categorias/listar-categorias.component';
import { ListarConveniosComponent } from './private/listar-convenios/listar-convenios.component';
import { ListarMediosdepagoComponent } from './private/listar-mediosdepago/listar-mediosdepago.component';
import { ListarPagosComponent } from './private/listar-pagos/listar-pagos.component';
import { ListarPrestadoresdesaludComponent } from './private/listar-prestadoresdesalud/listar-prestadoresdesalud.component';
import { ListarNoticiasPrivadasComponent } from './private/listar-noticias-privadas/listar-noticias-privadas.component';
import { ListarActividadesPrivadasComponent } from './private/listar-actividades-privadas/listar-actividades-privadas.component';
import { ListarNoticiasPublicasComponent } from './public/listar-noticias-publicas/listar-noticias-publicas.component';
import { ListarSomosPublicasComponent } from './public/listar-somos-publicas/listar-somos-publicas.component';
import { ListarContactosPublicasComponent } from './public/listar-contactos-publicas/listar-contactos-publicas.component';
import { ListarActividadesPublicasComponent } from './public/listar-actividades-publicas/listar-actividades-publicas.component';
import { ListarContratosComponent } from './private/listar-contratos/listar-contratos.component';
import { ListarRolesComponent } from './private/listar-roles/listar-roles.component';

const routes: Routes = [
  {  
    path: '',
    component: ListarNoticiasPublicasComponent,
  },
  {  
    path: 'inicio',
    component: ListarNoticiasPublicasComponent,
  },
  {  
    path: 'somos',
    component: ListarSomosPublicasComponent,
  },
  {  
    path: 'contactos',
    component: ListarContactosPublicasComponent,
  },
  {  
    path: 'actividades',
    component: ListarActividadesPublicasComponent,
  },
  {  
    path: 'personas',
    component: ListarUsuariosComponent,
  },
  {  
    path: 'categorias',
    component: ListarCategoriasComponent,
  },
  {  
    path: 'convenios',
    component: ListarConveniosComponent,
  },
  {  
    path: 'medios',
    component: ListarMediosdepagoComponent,
  },
  {  
    path: 'precios',
    component: ListarPagosComponent,
  },
  {  
    path: 'prestadores',
    component: ListarPrestadoresdesaludComponent,
  },
  {  
    path: 'noticias',
    component: ListarNoticiasPrivadasComponent,
  },
  {  
    path: 'actividadespriv',
    component: ListarActividadesPrivadasComponent,
  },
  {  
    path: 'contratos',
    component: ListarContratosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
