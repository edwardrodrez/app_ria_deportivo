import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormRegistroComponent } from './registro/form-registro/form-registro.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormLoginComponent } from './login/form-login/form-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';


import { ListarUsuariosComponent } from './private/listar-usuarios/listar-usuarios.component';
import {MatTableModule} from '@angular/material/table';
import { ListarCategoriasComponent } from './private/listar-categorias/listar-categorias.component';
import { ListarConveniosComponent } from './private/listar-convenios/listar-convenios.component';
import { ListarMediosdepagoComponent } from './private/listar-mediosdepago/listar-mediosdepago.component';
import { ListarPagosComponent } from './private/listar-pagos/listar-pagos.component';
import { ListarPrestadoresdesaludComponent } from './private/listar-prestadoresdesalud/listar-prestadoresdesalud.component';
import { ListarNoticiasPublicasComponent } from './public/listar-noticias-publicas/listar-noticias-publicas.component';
import { ListarActividadesPublicasComponent } from './public/listar-actividades-publicas/listar-actividades-publicas.component';
import { ListarContactosPublicasComponent } from './public/listar-contactos-publicas/listar-contactos-publicas.component';
import { ListarSomosPublicasComponent } from './public/listar-somos-publicas/listar-somos-publicas.component';
import { ListarActividadesPrivadasComponent } from './private/listar-actividades-privadas/listar-actividades-privadas.component';
import { ListarNoticiasPrivadasComponent } from './private/listar-noticias-privadas/listar-noticias-privadas.component';
import { ElimCategoriaComponent } from './modales/categorias/elim-categoria/elim-categoria.component';
import { ModCategoriaComponent } from './modales/categorias/mod-categoria/mod-categoria.component';
import { AddCategoriaComponent } from './modales/categorias/add-categoria/add-categoria.component';
import { ElimNoticiaComponent } from './modales/noticias/elim-noticia/elim-noticia.component';
import { ModNoticiaComponent } from './modales/noticias/mod-noticia/mod-noticia.component';
import { AddNoticiaComponent } from './modales/noticias/add-noticia/add-noticia.component';
import { ElimActividadComponent } from './modales/actividades/elim-actividad/elim-actividad.component';
import { ModActividadComponent } from './modales/actividades/mod-actividad/mod-actividad.component';
import { AddActividadComponent } from './modales/actividades/add-actividad/add-actividad.component';
import { ElimPagosComponent } from './modales/pagos/elim-pagos/elim-pagos.component';
import { ModPagosComponent } from './modales/pagos/mod-pagos/mod-pagos.component';
import { AddPagosComponent } from './modales/pagos/add-pagos/add-pagos.component';
import { ElimMediopagosComponent } from './modales/mediopagos/elim-mediopagos/elim-mediopagos.component';
import { ModMediopagosComponent } from './modales/mediopagos/mod-mediopagos/mod-mediopagos.component';
import { AddMediopagosComponent } from './modales/mediopagos/add-mediopagos/add-mediopagos.component';
import { ElimPrestsaludComponent } from './modales/prestsalud/elim-prestsalud/elim-prestsalud.component';
import { ModPrestsaludComponent } from './modales/prestsalud/mod-prestsalud/mod-prestsalud.component';
import { AddPrestsaludComponent } from './modales/prestsalud/add-prestsalud/add-prestsalud.component';
import { ElimConvenioComponent } from './modales/convenios/elim-convenio/elim-convenio.component';
import { ModConvenioComponent } from './modales/convenios/mod-convenio/mod-convenio.component';
import { AddConvenioComponent } from './modales/convenios/add-convenio/add-convenio.component';
import { ElimUsuarioComponent } from './modales/usuarios/elim-usuario/elim-usuario.component';
import { ModUsuarioComponent } from './modales/usuarios/mod-usuario/mod-usuario.component';
import { AddUsuarioComponent } from './modales/usuarios/add-usuario/add-usuario.component';
import { VerInfoUsuarioComponent } from './modales/usuarios/ver-info-usuario/ver-info-usuario.component';
import { VerInfoConvenioComponent } from './modales/convenios/ver-info-convenio/ver-info-convenio.component';
import { VerInfoPrestsaludComponent } from './modales/prestsalud/ver-info-prestsalud/ver-info-prestsalud.component';
import { VerInfoMediopagosComponent } from './modales/mediopagos/ver-info-mediopagos/ver-info-mediopagos.component';
import { VerInfoPagosComponent } from './modales/pagos/ver-info-pagos/ver-info-pagos.component';
import { VerInfoActividadComponent } from './modales/actividades/ver-info-actividad/ver-info-actividad.component';
import { VerInfoNoticiaComponent } from './modales/noticias/ver-info-noticia/ver-info-noticia.component';
import { VerInfoCategoriaComponent } from './modales/categorias/ver-info-categoria/ver-info-categoria.component';
import { AsignarRolComponent } from './modales/roles/asignar-rol/asignar-rol.component';
import { QuitarRolComponent } from './modales/roles/quitar-rol/quitar-rol.component';
import {MatSelectModule} from '@angular/material/select';
import { ListarContratosComponent } from './private/listar-contratos/listar-contratos.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ElimContratoComponent } from './modales/contratos/elim-contrato/elim-contrato.component';
import { ModContratoComponent } from './modales/contratos/mod-contrato/mod-contrato.component';
import { AddContratoComponent } from './modales/contratos/add-contrato/add-contrato.component';
import { ListarRolesComponent } from './private/listar-roles/listar-roles.component';
import { InfoNoticiaComponent } from './modales/noticia-publica/info-noticia/info-noticia.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './_services/auth-interceptor.service';
import {HttpErrorInterceptor} from './_services/error-interceptor.service';
import { AuthService } from './services/auth.service';
import { MensajeComponent } from './_services/mensaje/mensaje.component'

import { MatSnackBarModule } from '@angular/material/snack-bar';

import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { VerInfoContratosComponent } from './modales/contratos/ver-info-contratos/ver-info-contratos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRegistroComponent,
    FormLoginComponent,

    ListarUsuariosComponent,
    ListarCategoriasComponent,
    ListarConveniosComponent,
    ListarContratosComponent,
    ListarMediosdepagoComponent,
    ListarPagosComponent,
    ListarPrestadoresdesaludComponent,
    ListarNoticiasPublicasComponent,
    ListarActividadesPublicasComponent,
    ListarContactosPublicasComponent,
    ListarSomosPublicasComponent,
    ListarActividadesPrivadasComponent,
    ListarNoticiasPrivadasComponent,
    ElimCategoriaComponent,
    ModCategoriaComponent,
    AddCategoriaComponent,
    ElimNoticiaComponent,
    ModNoticiaComponent,
    AddNoticiaComponent,
    ElimActividadComponent,
    ModActividadComponent,
    AddActividadComponent,
    ElimPagosComponent,
    ModPagosComponent,
    AddPagosComponent,
    ElimMediopagosComponent,
    ModMediopagosComponent,
    AddMediopagosComponent,
    ElimPrestsaludComponent,
    ModPrestsaludComponent,
    AddPrestsaludComponent,
    ElimConvenioComponent,
    ModConvenioComponent,
    AddConvenioComponent,
    ElimUsuarioComponent,
    ModUsuarioComponent,
    AddUsuarioComponent,
    VerInfoUsuarioComponent,
    VerInfoConvenioComponent,
    VerInfoPrestsaludComponent,
    VerInfoMediopagosComponent,
    VerInfoPagosComponent,
    VerInfoActividadComponent,
    VerInfoNoticiaComponent,
    VerInfoCategoriaComponent,
    AsignarRolComponent,
    QuitarRolComponent,
    ListarContratosComponent,
    ElimContratoComponent,
    ModContratoComponent,
    AddContratoComponent,
    ListarRolesComponent,
    InfoNoticiaComponent,
    MensajeComponent,
    VerInfoContratosComponent,
    
  ],
  imports: [
    A11yModule,
    ClipboardModule,
    DragDropModule,
    PortalModule,
    ScrollingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatListModule,
    MatNativeDateModule, 
    MatRippleModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSortModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  providers: [
  {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptorService,multi: true},
  AuthService
  ]
})
export class AppModule { }
