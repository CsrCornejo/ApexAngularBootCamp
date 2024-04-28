import { Routes } from '@angular/router';
import { MY_FIRST_ROUTES } from './modules/my-first-module/my-first-module.module';

// NOTA: Como solo necesito la ruta declarada por el module, no necesito importar el modulo en app.component
// Si se necesitara mas partes expuestas como directivas o pipes del modulo, se tendria que importar en app.component
// Esto es porque el proyecto es standalone pero se esta usando un modulo como si fuera de un tercero
// Lo mejor seria usar directamente el standalone component sin meterlo a un modulo pero el ejercicio es de modulos
export const routes: Routes = [
    ...MY_FIRST_ROUTES
];
